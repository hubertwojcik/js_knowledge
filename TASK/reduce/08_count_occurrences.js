// Zadanie 8: Zliczanie wystąpień
// Napisz funkcję, która używa `reduce` do zliczenia wystąpień każdego elementu w tablicy.

function countOccurrences(items) {
  return items.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
}

// Testy
const items = ["apple", "banana", "apple", "orange", "banana", "apple"];
const result = countOccurrences(items);
const expected = { apple: 3, banana: 2, orange: 1 };
console.log("Wynik:", result);
console.log("Oczekiwany:", expected);
console.log(
  "Test:",
  JSON.stringify(result) === JSON.stringify(expected) ? "✅ PASS" : "❌ FAIL"
);
