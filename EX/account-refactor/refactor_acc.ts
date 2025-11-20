/**
 * Primary Comprehensive Question
 *
 * You inherit code that, for each Account, performs two separate traversals
 * to aggregate promotion IDs:
 *
 * Group promotions: For every account, it iterates through all AccountGroup records,
 * filtering each by date validity (startDate/endDate) and then, if relevant, looks up
 * related promotions from associated group accounts.
 *
 * Parent promotions: For every account, it walks up its parent chain (using repeated
 * searches through the full accounts array) to collect inherited promotions.
 */

// ============================================================================
// Type Definitions
// ============================================================================

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

// ============================================================================
// Helper Functions
// ============================================================================

// function dateValid(startDate: Date, endDate: Date): boolean {
//   const now = new Date();
//   return now >= startDate && now <= endDate;
// }

// ============================================================================
// Legacy Implementation (for reference)
// ============================================================================

function legacyAggregatePromotions(
  accounts: Account[],
  accountGroups: AccountGroup[]
): void {
  accounts.forEach((account) => {
    // Group promotions
    // Note: This adds only the direct promotionsIds from groupAccount,
    // not promotions from groupAccount's parent chain
    accountGroups.forEach((group) => {
      if (
        dateValid(group.startDate, group.endDate) &&
        group.accountId === account.Id
      ) {
        const groupAccount = accounts.find(
          (a) => a.Id === group.accountGroupId
        );
        if (groupAccount) {
          // groupAccount is an Account, so it has promotionsIds property
          account.promotionsIds.push(...groupAccount.promotionsIds);
        }
      }
    });

    // Parent chain promotions
    let parentId = account.ParentId;
    while (parentId) {
      const parent = accounts.find((a) => a.Id === parentId);
      if (!parent) break;
      account.promotionsIds.push(...parent.promotionsIds);
      parentId = parent.ParentId;
    }
  });
}

// function refactoredAggregatePromotions(
//   accounts: Account[],
//   accountGroups: AccountGroup[]
// ): Account[] {
//   const accountMap = new Map<string, Account>();
//   for (const account of accounts) {
//     accountMap.set(account.Id, account);
//   }

//   const filteredAccountGroups: AccountGroup[] = [];
//   for (const accGroup of accountGroups) {
//     if (dateValid(accGroup.startDate, accGroup.endDate)) {
//       filteredAccountGroups.push(accGroup);
//     }
//   }

//   const groupMap = new Map<string, AccountGroup[]>();
//   for (const accGroup of filteredAccountGroups) {
//     if (groupMap.has(accGroup.accountId)) {
//       const currentGroup = groupMap.get(accGroup.accountId);
//       if (!currentGroup) continue;
//       currentGroup.push(accGroup);
//       groupMap.set(accGroup.accountId, currentGroup);
//     } else {
//       groupMap.set(accGroup.accountId, [accGroup]);
//     }
//   }

//   const result: Account[] = accounts.map((acc) => ({
//     ...acc,
//     promotionsIds: [...acc.promotionsIds],
//   }));

//   for (const account of result) {
//     const accountGroups = groupMap.get(account.Id);
//     if (!accountGroups) continue;
//     for (const accGroups of accountGroups) {
//       const acc = accountMap.get(accGroups.accountGroupId);
//       if (!acc) continue;
//       account.promotionsIds.push(...acc.promotionsIds);
//     }
//   }

//   for (const account of result) {
//     const accountPromotionsIds = new Set<string>();
//     let parentId = account.ParentId;
//     while (parentId) {
//       const parent = accountMap.get(parentId);
//       if (!parent) break;
//       for (const id of parent.promotionsIds) {
//         accountPromotionsIds.add(id);
//       }
//       parentId = parent.ParentId;
//     }
//     account.promotionsIds = [...account.promotionsIds, ...accountPromotionsIds];
//   }

//   return result;
// }

function upgradedRefactoredAggregatePromotions(
  accounts: Account[],
  accountGroups: AccountGroup[]
): Account[] {
  // Szybkie lookupy
  const accountMap = new Map<string, Account>();
  for (const account of accounts) {
    accountMap.set(account.Id, account);
  }
  // Filtrujmey tylko wane datowo grupy
  const validGroups = accountGroups.filter((g) =>
    dateValid(g.startDate, g.endDate)
  );

  // Mapa accountId - AccountGroup
  const groupsByAccount = new Map<string, AccountGroup[]>();
  for (const group of validGroups) {
    if (!groupsByAccount.has(group.accountId)) {
      groupsByAccount.set(group.accountId, []);
    }
    groupsByAccount.get(group.accountId)?.push(group);
  }

  return accounts;
}

/**
 * Question:
 *
 * Identify and analyze the core inefficiencies and complexity risks in this approach.
 * Then propose a refactor strategy that:
 *
 * (a) reduces cyclomatic complexity,
 * (b) improves time complexity, and
 * (c) enhances data locality and clarity.
 *
 * Analysis Requirements:
 *
 * Be explicit about:
 *
 * - The original time complexity in terms of A (accounts), G (accountGroups),
 *   H (average hierarchy height), and L (lookup cost of accounts.find).
 *
 * - Redundant work being repeated across iterations (e.g., filtering the same
 *   accountGroups multiple times, searching for the same accounts repeatedly).
 *
 * - Risks of duplicate promotions accumulation (pushing to arrays without deduplication).
 *
 * - Data structures you would introduce to optimize (maps, sets, queues, etc.).
 *
 * - How you would transform the parent chain traversal to avoid repeated find() calls.
 *
 * - Potential trade-offs or edge cases (e.g., very deep hierarchies, invalid dates,
 *   missing parent references, circular parent chains).
 */

// ============================================================================
// Test Data
// ============================================================================

const testAccounts: Account[] = [
  { Id: "a1", ParentId: null, promotionsIds: ["p1", "p2"] },
  { Id: "a2", ParentId: "a1", promotionsIds: ["p3"] },
  { Id: "a3", ParentId: "a2", promotionsIds: ["p4"] },
  { Id: "a4", ParentId: null, promotionsIds: ["p5"] },
  { Id: "a5", ParentId: "a4", promotionsIds: ["p6"] },
];

const testAccountGroups: AccountGroup[] = [
  {
    accountId: "a1",
    accountGroupId: "a4",
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-12-31"),
  },
  {
    accountId: "a2",
    accountGroupId: "a5",
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-12-31"),
  },
  {
    accountId: "a3",
    accountGroupId: "a1",
    startDate: new Date("2025-01-01"), // Future date - should be filtered out
    endDate: new Date("2025-12-31"),
  },
];

// ============================================================================
// Test Execution
// ============================================================================

// Uncomment to test:
// const result = refactoredAggregatePromotions(testAccounts, testAccountGroups);
// console.log(JSON.stringify(result, null, 2));
