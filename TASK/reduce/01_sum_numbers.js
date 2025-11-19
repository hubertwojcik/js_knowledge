// Zadanie 1: Suma liczb
// Napisz funkcję, która używa `reduce` do zsumowania wszystkich liczb w tablicy.

function sumNumbers(numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Testy
const numbers = [1, 2, 3, 4, 5];
const result = sumNumbers(numbers);
console.log("Wynik:", result);
console.log("Oczekiwany:", 15);
console.log("Test:", result === 15 ? "✅ PASS" : "❌ FAIL");
