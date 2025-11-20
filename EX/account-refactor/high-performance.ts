interface Account {
  Id: string;
  ParentId: string | null;
  promotionsIds: string[];
}

interface AccountGroup {
  accountId: string;
  accountGroupId: string;
  startDate: Date;
  endDate: Date;
}

function dateValid(startDate: Date, endDate: Date): boolean {
  const now = new Date();
  return now >= startDate && now <= endDate;
}

function buildAccountMap(accounts: Account[]): Map<string, Account> {
  const accountMap = new Map();
  for (let i = 0; i < accounts.length; i++) {
    accountMap.set(accounts[i].Id, accounts[i]);
  }
  return accountMap;
}

function filterValidGroups(accountGroups: AccountGroup[]): AccountGroup[] {
  return accountGroups.filter((g) => dateValid(g.startDate, g.endDate));
}

function buildGroupsByAccount(
  validGroups: AccountGroup[]
): Map<string, AccountGroup[]> {
  const accountMap = new Map();
  for (let i = 0; i < validGroups.length; i++) {
    const group = validGroups[i];
    if (!accountMap.has(group.accountId)) {
      accountMap.set(group.accountId, []);
    } else {
      accountMap.get(group.accountId).push(group);
    }
  }
  return accountMap;
}

function getGroupPromotions(
  accountId: string,
  groupsByAccount: Map<string, AccountGroup[]>,
  accountMap: Map<string, Account>,
  groupPromotionsCache: Map<string, Set<string>>
): Set<string> {
  const cached = groupPromotionsCache.get(accountId);
  if (cached) return cached;

  const result = new Set<string>();
  const groups = groupsByAccount.get(accountId);
  if (groups) {
    for (let i = 0; i < groups.length; i++) {
      const entry = groups[i];
      const groupAccount = accountMap.get(entry.accountId);
      if (groupAccount) {
        const promos = groupAccount.promotionsIds;
        for (let j = 0; j < promos.length; j++) {
          result.add(promos[j]);
        }
      }
    }
  }
  groupPromotionsCache.set(accountId, result);
  return result;
}

function getParentChain(
  accountId: string,
  accountMap: Map<string, Account>,
  parentChainCache: Map<string, string[]>
): string[] {
  const cache = parentChainCache.get(accountId);
  if (cache) return cache;

  const chain: string[] = [];
  const visited = new Set<string>();

  let current = accountId;
  while (true) {
    const acc = accountMap.get(accountId);
    if (!acc || !acc.ParentId) break;
    const parentId = acc.ParentId;

    if (visited.has(parentId)) break;
    visited.add(parentId);

    chain.push(parentId);
    current = parentId;
  }

  parentChainCache.set(accountId, chain);
  return chain;
}

function refactoredAggregatePromotions(
  accounts: Account[],
  accountGroups: AccountGroup[]
): Account[] {
  const accountMap = buildAccountMap(accounts);

  const validGroups = filterValidGroups(accountGroups);

  const groupsByAccount = buildGroupsByAccount(validGroups);

  const groupPromotionsCache = new Map<string, Set<string>>();
  const parentChainCache = new Map<string, string[]>();

  const results: Account[] = new Array(accounts.length);

  for (let i = 0; i < accounts.length; i++) {
    const account = accounts[i];

    const finalPromos = new Set<string>();

    const base = account.promotionsIds;
    for (let j = 0; j < base.length; j++) {
      finalPromos.add(base[j]);
    }

    const groupPromotions = getGroupPromotions(
      account.Id,
      groupsByAccount,
      accountMap,
      groupPromotionsCache
    );

    for (const promo of groupPromotions) {
      finalPromos.add(promo);
    }

    const chain = getParentChain(account.Id, accountMap, parentChainCache);

    for (let k = 0; k < chain.length; k++) {
      const parent = accountMap.get(chain[k]);
      if (!parent) continue;

      const parentPromos = parent.promotionsIds;
      for (let p = 0; p < parentPromos.length; p++) {
        finalPromos.add(parentPromos[p]);
      }
    }

    results[i] = {
      ...account,
      promotionsIds: [...finalPromos],
    };
  }
  return results;
}
