// Zadanie 2: Iloczyn liczb
// Napisz funkcję, która używa `reduce` do obliczenia iloczynu wszystkich liczb w tablicy.
function multiplyNumbers(numbers) {
  return numbers.reduce((acc, curr) => acc * curr, 1);
}

// Testy
const numbers = [2, 3, 4];
const result = multiplyNumbers(numbers);
console.log("Wynik:", result);
console.log("Oczekiwany:", 24);
console.log("Test:", result === 24 ? "✅ PASS" : "❌ FAIL");
