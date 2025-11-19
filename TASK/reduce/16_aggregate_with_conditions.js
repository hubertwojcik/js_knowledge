// Zadanie 16: Agregacja z warunkami
// Napisz funkcję, która używa `reduce` do obliczenia średniej wartości właściwości z obiektów, które spełniają określony warunek.

function averageByCondition(array, property, condition) {
  // TODO: Uzupełnij implementację używając reduce
  // condition to funkcja, która zwraca true/false dla każdego elementu
  return array.reduce(/* ... */);
}

// Testy
const students = [
  { name: "Alice", grade: 85, passed: true },
  { name: "Bob", grade: 45, passed: false },
  { name: "Charlie", grade: 90, passed: true },
  { name: "David", grade: 70, passed: true },
];
const result = averageByCondition(students, "grade", (student) => student.passed);
const expected = (85 + 90 + 70) / 3; // 81.67
console.log("Wynik:", result);
console.log("Oczekiwany:", expected);
console.log("Test:", Math.abs(result - expected) < 0.01 ? "✅ PASS" : "❌ FAIL");

