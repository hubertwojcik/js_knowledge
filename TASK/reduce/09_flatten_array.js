// Zadanie 9: Płaska tablica z zagnieżdżonych
// Napisz funkcję, która używa `reduce` do spłaszczenia tablicy zagnieżdżonej o jednym poziomie.

function flattenArray(nested) {
  return nested.reduce((acc, curr) => {
    return acc.concat(curr);
  }, []);
}

// Testy
const nested = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const result = flattenArray(nested);
const expected = [1, 2, 3, 4, 5, 6];
console.log("Wynik:", result);
console.log("Oczekiwany:", expected);
console.log(
  "Test:",
  JSON.stringify(result) === JSON.stringify(expected) ? "✅ PASS" : "❌ FAIL"
);
