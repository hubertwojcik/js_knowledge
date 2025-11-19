// Zadanie 4: Zliczanie elementów
// Napisz funkcję, która używa `reduce` do zliczenia wszystkich elementów w tablicy.

function countElements(items) {
  return items.reduce((acc, _) => acc + 1, 0);
}

// Testy
const items = ["a", "b", "c", "d", "e"];
const result = countElements(items);
console.log("Wynik:", result);
console.log("Oczekiwany:", 5);
console.log("Test:", result === 5 ? "✅ PASS" : "❌ FAIL");
