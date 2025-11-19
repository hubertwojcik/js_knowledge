// Zadanie 10: Obiekt do tablicy par klucz-wartość
// Napisz funkcję, która używa `reduce` do przekształcenia obiektu w tablicę par [klucz, wartość].

function objectToArray(obj) {
  return Object.entries(obj).reduce((acc, curr) => {
    const [key, value] = curr;
    acc.push([key, value]);
    return acc;
  }, []);
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
