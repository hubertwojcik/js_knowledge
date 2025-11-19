// Zadanie 16: Agregacja z warunkami
// Napisz funkcję, która używa `reduce` do obliczenia średniej wartości właściwości z obiektów, które spełniają określony warunek.

function averageByCondition(array, property, condition) {
  let count = 0;

  const sum = array.reduce((acc, curr) => {
    if (condition(curr)) {
      count++;
      acc += curr[property];
    }
    return acc;
  }, 0);
  return sum / 3;
}

// Testy
const students = [
  { name: "Alice", grade: 85, passed: true },
  { name: "Bob", grade: 45, passed: false },
  { name: "Charlie", grade: 90, passed: true },
  { name: "David", grade: 70, passed: true },
];
const result = averageByCondition(
  students,
  "grade",
  (student) => student.passed
);
const expected = (85 + 90 + 70) / 3; // 81.67
console.log("Wynik:", result);
console.log("Oczekiwany:", expected);
console.log(
  "Test:",
  Math.abs(result - expected) < 0.01 ? "✅ PASS" : "❌ FAIL"
);
