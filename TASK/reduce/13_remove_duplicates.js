// Zadanie 13: Usuwanie duplikatów
// Napisz funkcję, która używa `reduce` do usunięcia duplikatów z tablicy.
// UWAGA: Możesz użyć Set/Map dla O(1) lookup lub includes() dla O(n) lookup

function removeDuplicates(array) {
  return Array.from(
    array.reduce((acc, curr) => {
      acc.add(curr);
      return acc;
    }, new Set())
  );
}

// Testy
const numbers = [1, 2, 2, 3, 4, 4, 5];
const result = removeDuplicates(numbers);
const expected = [1, 2, 3, 4, 5];
console.log("Wynik:", result);
console.log("Oczekiwany:", expected);
console.log(
  "Test:",
  JSON.stringify(result) === JSON.stringify(expected) ? "✅ PASS" : "❌ FAIL"
);
