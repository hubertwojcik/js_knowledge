// Zadanie 11: Grupowanie obiektów po właściwości
// Napisz funkcję, która używa `reduce` do pogrupowania tablicy obiektów według wartości określonej właściwości.

function groupByProperty(array, property) {
  return array.reduce((acc, curr) => {
    const { age } = curr;
    if (acc[age]) {
      acc[age].push(curr);
    } else {
      acc[age] = [curr];
    }
    return acc;
  }, {});
}

// Testy
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
  { name: "David", age: 30 },
];
const result = groupByProperty(people, "age");
const expected = {
  25: [
    { name: "Alice", age: 25 },
    { name: "Charlie", age: 25 },
  ],
  30: [
    { name: "Bob", age: 30 },
    { name: "David", age: 30 },
  ],
};
console.log("Wynik:", JSON.stringify(result, null, 2));
console.log("Oczekiwany:", JSON.stringify(expected, null, 2));
console.log(
  "Test:",
  JSON.stringify(result) === JSON.stringify(expected) ? "✅ PASS" : "❌ FAIL"
);
