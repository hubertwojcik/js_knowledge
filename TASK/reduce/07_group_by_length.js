// Zadanie 7: Grupowanie po długości
// Napisz funkcję, która używa `reduce` do pogrupowania słów według ich długości.

function groupByLength(words) {
  return words.reduce((acc, curr) => {
    const key = curr.length;
    if (acc[key]) {
      acc[key].push(curr);
    } else {
      acc[key] = [curr];
    }
    return acc;
  }, {});
}

// Testy
const words = ["cat", "dog", "elephant", "bird", "lion"];
const result = groupByLength(words);
const expected = { 3: ["cat", "dog"], 8: ["elephant"], 4: ["bird", "lion"] };
console.log("Wynik:", JSON.stringify(result, null, 2));
console.log("Oczekiwany:", JSON.stringify(expected, null, 2));
console.log(
  "Test:",
  JSON.stringify(result) === JSON.stringify(expected) ? "✅ PASS" : "❌ FAIL"
);
