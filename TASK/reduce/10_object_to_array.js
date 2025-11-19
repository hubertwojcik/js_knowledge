// Zadanie 10: Obiekt do tablicy par klucz-wartość
// Napisz funkcję, która używa `reduce` do przekształcenia obiektu w tablicę par [klucz, wartość].

function objectToArray(obj) {
  // TODO: Uzupełnij implementację używając reduce
  return Object.entries(obj).reduce((acc, curr) => {});
}

// Testy
const obj = { a: 1, b: 2, c: 3 };
const result = objectToArray(obj);
const expected = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
];
console.log("Wynik:", result);
console.log("Oczekiwany:", expected);
console.log(
  "Test:",
  JSON.stringify(result) === JSON.stringify(expected) ? "✅ PASS" : "❌ FAIL"
);
