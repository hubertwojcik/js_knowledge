// Zadanie 23: Memory Complexity O(n) - używanie spread operator
// Napisz funkcję, która używa `reduce` ze spread operatorem do dodawania elementów.
// UWAGA: spread operator tworzy nową tablicę w każdej iteracji, więc złożoność pamięciowa to O(n).

function addWithSpread(arrays) {
  // TODO: Uzupełnij implementację używając reduce ze spread operatorem
  // Przykład: [[1,2], [3,4]] -> [1,2,3,4]
  // Pamiętaj: [...acc, ...curr] tworzy NOWĄ tablicę w każdej iteracji
  return arrays.reduce(/* ... */);
}

// Testy
const arrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const result = addWithSpread(arrays);
const expected = [1, 2, 3, 4, 5, 6];
console.log("Wynik:", result);
console.log("Oczekiwany:", expected);
console.log(
  "Test:",
  JSON.stringify(result) === JSON.stringify(expected) ? "✅ PASS" : "❌ FAIL"
);
console.log(
  "\n💡 Memory Complexity: O(n) - spread tworzy nową tablicę w każdej iteracji"
);
