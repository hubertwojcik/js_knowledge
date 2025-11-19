// Zadanie 22: Memory Complexity O(1) - używanie push (modyfikacja w miejscu)
// Napisz funkcję, która używa `reduce` z push do spłaszczenia tablicy.
// UWAGA: push modyfikuje istniejącą tablicę, więc złożoność pamięciowa to O(1) dodatkowej pamięci
// (akumulator jest modyfikowany w miejscu, nie tworzymy nowych tablic w każdej iteracji).

function flattenWithPush(nested) {
  // TODO: Uzupełnij implementację używając reduce z push
  // Pamiętaj: push modyfikuje istniejącą tablicę (akumulator)
  return nested.reduce(/* ... */);
}

// Testy
const nested = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const result = flattenWithPush(nested);
const expected = [1, 2, 3, 4, 5, 6];
console.log("Wynik:", result);
console.log("Oczekiwany:", expected);
console.log("Test:", JSON.stringify(result) === JSON.stringify(expected) ? "✅ PASS" : "❌ FAIL");
console.log("\n💡 Memory Complexity: O(1) - modyfikujemy akumulator w miejscu");

