// Zadanie 6: Tablica do obiektu - indeksy jako klucze
// Napisz funkcję, która używa `reduce` do przekształcenia tablicy w obiekt, gdzie kluczami są indeksy.

function arrayToObject(arr) {
  return arr.reduce((acc, curr, index) => {
    acc[index] = curr;
    return acc;
  }, {});
}

// Testy
const arr = ["a", "b", "c"];
const result = arrayToObject(arr);
const expected = { 0: "a", 1: "b", 2: "c" };
console.log("Wynik:", result);
console.log("Oczekiwany:", expected);
console.log(
  "Test:",
  JSON.stringify(result) === JSON.stringify(expected) ? "✅ PASS" : "❌ FAIL"
);
