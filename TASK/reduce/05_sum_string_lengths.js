// Zadanie 5: Suma długości stringów
// Napisz funkcję, która używa `reduce` do zsumowania długości wszystkich stringów w tablicy.

function sumStringLengths(words) {
  return words.reduce((acc, curr) => acc + curr.length, 0);
}

// Testy
const words = ["hello", "world", "reduce", "is", "cool"];
const result = sumStringLengths(words);
console.log("Wynik:", result);
console.log("Oczekiwany:", 22);
console.log("Test:", result === 22 ? "✅ PASS" : "❌ FAIL");
