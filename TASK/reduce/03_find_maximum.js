// Zadanie 3: Znajdź maksimum
// Napisz funkcję, która używa `reduce` do znalezienia największej liczby w tablicy.
function findMax(numbers) {
  return numbers.reduce((acc, curr) => (curr > acc ? curr : acc), 0);
}

// Testy
const numbers = [3, 7, 2, 9, 1, 5];
const result = findMax(numbers);
console.log("Wynik:", result);
console.log("Oczekiwany:", 9);
console.log("Test:", result === 9 ? "✅ PASS" : "❌ FAIL");
