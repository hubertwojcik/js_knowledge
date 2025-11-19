// Zadanie 17: Redukcja z akumulatorem obiektowym
// Napisz funkcję, która używa `reduce` do przekształcenia tablicy obiektów w jeden obiekt z wieloma agregacjami (suma, średnia, min, max).

function aggregateStats(array, property) {
  // TODO: Uzupełnij implementację używając reduce
  // Zwróć obiekt z: total, average, min, max, count
  return array.reduce(/* ... */);
}

// Testy
const sales = [
  { product: "A", amount: 100 },
  { product: "B", amount: 200 },
  { product: "A", amount: 150 },
  { product: "C", amount: 50 },
];
const result = aggregateStats(sales, "amount");
const expected = {
  total: 500,
  average: 125,
  min: 50,
  max: 200,
  count: 4,
};
console.log("Wynik:", result);
console.log("Oczekiwany:", expected);
console.log("Test:", JSON.stringify(result) === JSON.stringify(expected) ? "✅ PASS" : "❌ FAIL");

