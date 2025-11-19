// Zadanie 14: Głębokie spłaszczenie tablicy
// Napisz funkcję, która używa `reduce` do spłaszczenia tablicy zagnieżdżonej na dowolnym poziomie głębokości.

function deepFlatten(array) {
  // TODO: Uzupełnij implementację używając reduce
  // Wskazówka: użyj rekurencji
  return array.reduce(/* ... */);
}

// Testy
const deeplyNested = [1, [2, [3, [4, 5]]], 6];
const result = deepFlatten(deeplyNested);
const expected = [1, 2, 3, 4, 5, 6];
console.log("Wynik:", result);
console.log("Oczekiwany:", expected);
console.log("Test:", JSON.stringify(result) === JSON.stringify(expected) ? "✅ PASS" : "❌ FAIL");

