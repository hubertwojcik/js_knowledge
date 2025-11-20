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

function buildAccountsMap(accounts: Account[]): Map<string, Account> {
  const accountMap = new Map<string, Account>();
  for (let i = 0; i < accounts.length; i++) {
    accountMap.set(accounts[i].Id, accounts[i]);
  }
  return accountMap;
}

function filterValidAccountGroups(
  accountGroups: AccountGroup[]
): AccountGroup[] {
  const out: AccountGroup[] = [];
  for (let i = 0; i < accountGroups.length; i++) {
    const accountGroup = accountGroups[i];
    if (dateValid(accountGroup.startDate, accountGroup.endDate)) {
      out.push(accountGroup);
    }
  }
  return out;
}

function buildAccountGroupsMap(
  accountGroups: AccountGroup[]
): Map<string, AccountGroup[]> {
  const accountGroupsMap = new Map<string, AccountGroup[]>();

  for (let i = 0; i < accountGroups.length; i++) {
    const account = accountGroups[i];
    if (!accountGroupsMap.has(account.accountId)) {
      accountGroupsMap.set(account.accountId, []);
    }
    accountGroupsMap.get(account.accountId)?.push(account);
  }

  return accountGroupsMap;
}

function getGroupPromotions(
  accountId: string,
  accountMap: Map<string, Account>,
  accountGroupsMap: Map<string, AccountGroup[]>,
  groupPromotionsCache: Map<string, Set<string>>
) {
  const cache = groupPromotionsCache.get(accountId);
  if (cache) return cache;

  const result = new Set<string>();
  const accountGroups = accountGroupsMap.get(accountId);

  if (accountGroups) {
    for (let i = 0; i < accountGroups.length; i++) {
      const group = accountGroups[i];
      const account = accountMap.get(group.accountId);
      if (account) {
        const promos = account.promotionsIds;
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
    const account = accountMap.get(accountId);
    if (!account || !account.ParentId) break;

    const parentId = account.ParentId;
    if (visited.has(parentId)) break;
    visited.add(parentId);

    chain.push(parentId);
    current = parentId;
  }

  parentChainCache.set(accountId, chain);
  return chain;
}

export function aggregatePromotions(
  accounts: Account[],
  accountsGroups: AccountGroup[]
) {
  const accountsMap = buildAccountsMap(accounts);

  const validGroups = filterValidAccountGroups(accountsGroups);

  const accountsGroupMap = buildAccountGroupsMap(validGroups);

  const groupPromotionsCache = new Map<string, Set<string>>();

  const parentChainCache = new Map<string, string[]>();

  const results: Account[] = new Array(accounts.length);

  for (let i = 0; i < accounts.length; i++) {
    const currentAccount = accounts[i];

    const finalPromos = new Set<string>();

    const groupPromotions = Array.from(
      getGroupPromotions(
        currentAccount.Id,
        accountsMap,
        accountsGroupMap,
        groupPromotionsCache
      )
    );

    for (let j = 0; j < groupPromotions.length; j++) {
      finalPromos.add(groupPromotions[j]);
    }

    const chain = getParentChain(
      currentAccount.Id,
      accountsMap,
      parentChainCache
    );

    for (let k = 0; k < chain.length; k++) {
      const parent = accountsMap.get(chain[k]);
      if (!parent) continue;

      const parentPromos = parent.promotionsIds;
      for (let p = 0; i < parentPromos.length; p++) {
        finalPromos.add(parentPromos[p]);
      }
    }

    results[i] = {
      ...currentAccount,
      promotionsIds: [...finalPromos],
    };
  }
  return results;
}
