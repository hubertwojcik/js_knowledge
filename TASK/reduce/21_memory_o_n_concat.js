// Zadanie 21: Memory Complexity O(n) - używanie concat
// Napisz funkcję, która używa `reduce` z concat do spłaszczenia tablicy.
// UWAGA: concat tworzy nową tablicę w każdym kroku, więc złożoność pamięciowa to O(n²) w najgorszym przypadku
// lub O(n) jeśli rozważamy tylko wynik końcowy, ale każda iteracja tworzy nową tablicę.

function flattenWithConcat(nested) {
  // TODO: Uzupełnij implementację używając reduce z concat
  // Pamiętaj: concat zwraca NOWĄ tablicę, nie modyfikuje istniejącej
  return nested.reduce(/* ... */);
}

// Testy
const nested = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const result = flattenWithConcat(nested);
const expected = [1, 2, 3, 4, 5, 6];
console.log("Wynik:", result);
console.log("Oczekiwany:", expected);
console.log("Test:", JSON.stringify(result) === JSON.stringify(expected) ? "✅ PASS" : "❌ FAIL");
console.log("\n💡 Memory Complexity: O(n) - każda iteracja tworzy nową tablicę");

