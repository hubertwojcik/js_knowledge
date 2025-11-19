// Zadanie 24: Porównanie złożoności pamięciowej - O(n) vs O(1)
// Napisz DWIE funkcje do zliczania wystąpień:
// 1. Z tworzeniem nowego obiektu w każdej iteracji (O(n) - nieefektywne)
// 2. Z modyfikacją akumulatora w miejscu (O(1) - efektywne)

// Wersja 1: O(n) - tworzenie nowego obiektu w każdej iteracji (nieefektywne)
function countOccurrencesON(items) {
  // TODO: Uzupełnij - używając spread operator do tworzenia nowego obiektu
  // return items.reduce((acc, item) => ({ ...acc, [item]: (acc[item] || 0) + 1 }), {});
  return items.reduce(/* ... */);
}

// Wersja 2: O(1) - modyfikacja akumulatora w miejscu (efektywne)
function countOccurrencesO1(items) {
  // TODO: Uzupełnij - modyfikując akumulator bezpośrednio
  // return items.reduce((acc, item) => { acc[item] = (acc[item] || 0) + 1; return acc; }, {});
  return items.reduce(/* ... */);
}

// Testy
const items = ["apple", "banana", "apple", "orange", "banana", "apple"];
const expected = { apple: 3, banana: 2, orange: 1 };

console.log("=== Wersja O(n) - tworzenie nowego obiektu ===");
const resultON = countOccurrencesON(items);
console.log("Wynik:", resultON);
console.log("Test:", JSON.stringify(resultON) === JSON.stringify(expected) ? "✅ PASS" : "❌ FAIL");
console.log("💡 Memory Complexity: O(n) - każda iteracja tworzy nowy obiekt");

console.log("\n=== Wersja O(1) - modyfikacja w miejscu ===");
const resultO1 = countOccurrencesO1(items);
console.log("Wynik:", resultO1);
console.log("Test:", JSON.stringify(resultO1) === JSON.stringify(expected) ? "✅ PASS" : "❌ FAIL");
console.log("💡 Memory Complexity: O(1) - modyfikujemy akumulator w miejscu");

console.log("\n📊 Porównanie:");
console.log("O(n): Tworzy nowy obiekt w każdej iteracji - więcej alokacji pamięci");
console.log("O(1): Modyfikuje istniejący obiekt - mniej alokacji, szybsze");

