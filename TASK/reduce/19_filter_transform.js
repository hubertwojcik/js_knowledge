// Zadanie 19: Redukcja z transformacją i filtrowaniem
// Napisz funkcję, która używa `reduce` do jednoczesnego filtrowania, transformacji i agregacji danych w jednej operacji.

function filterGroupAndSum(array, filterFn, groupKey, sumKey) {
  // TODO: Uzupełnij implementację używając reduce
  // Filtruj elementy, pogrupuj po groupKey i zsumuj wartości sumKey
  return array.reduce(/* ... */);
}

// Testy
const transactions = [
  { type: "income", amount: 1000, category: "salary" },
  { type: "expense", amount: 200, category: "food" },
  { type: "income", amount: 500, category: "freelance" },
  { type: "expense", amount: 150, category: "transport" },
  { type: "expense", amount: 300, category: "food" },
];
const result = filterGroupAndSum(
  transactions,
  (t) => t.type === "expense",
  "category",
  "amount"
);
const expected = { food: 500, transport: 150 };
console.log("Wynik:", result);
console.log("Oczekiwany:", expected);
console.log("Test:", JSON.stringify(result) === JSON.stringify(expected) ? "✅ PASS" : "❌ FAIL");

