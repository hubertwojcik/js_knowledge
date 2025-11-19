// Zadanie 18: Zagnieżdżone grupowanie
// Napisz funkcję, która używa `reduce` do pogrupowania obiektów według dwóch właściwości (zagnieżdżone grupowanie).

function nestedGroupBy(array, firstKey, secondKey) {
  // TODO: Uzupełnij implementację używając reduce
  // Najpierw grupuj po firstKey, potem po secondKey
  return array.reduce(/* ... */);
}

// Testy
const orders = [
  { customer: "Alice", product: "Laptop", quantity: 1 },
  { customer: "Bob", product: "Mouse", quantity: 2 },
  { customer: "Alice", product: "Mouse", quantity: 1 },
  { customer: "Bob", product: "Laptop", quantity: 1 },
];
const result = nestedGroupBy(orders, "customer", "product");
const expected = {
  Alice: {
    Laptop: [{ customer: "Alice", product: "Laptop", quantity: 1 }],
    Mouse: [{ customer: "Alice", product: "Mouse", quantity: 1 }],
  },
  Bob: {
    Mouse: [{ customer: "Bob", product: "Mouse", quantity: 2 }],
    Laptop: [{ customer: "Bob", product: "Laptop", quantity: 1 }],
  },
};
console.log("Wynik:", JSON.stringify(result, null, 2));
console.log("Oczekiwany:", JSON.stringify(expected, null, 2));
console.log("Test:", JSON.stringify(result) === JSON.stringify(expected) ? "✅ PASS" : "❌ FAIL");

