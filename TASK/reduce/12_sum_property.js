// Zadanie 12: Suma właściwości obiektów
// Napisz funkcję, która używa `reduce` do zsumowania wartości określonej właściwości z tablicy obiektów.

function sumProperty(array, property) {
  // TODO: Uzupełnij implementację używając reduce
  return array.reduce(/* ... */);
}

// Testy
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 75 },
];
const result = sumProperty(products, "price");
console.log("Wynik:", result);
console.log("Oczekiwany:", 1100);
console.log("Test:", result === 1100 ? "✅ PASS" : "❌ FAIL");

