// Zadanie 15: Transformacja obiektu - zmiana kluczy
// Napisz funkcję, która używa `reduce` do przekształcenia obiektu, zmieniając nazwy kluczy zgodnie z mapowaniem.

function transformKeys(obj, mapping) {
  // TODO: Uzupełnij implementację używając reduce
  return Object.entries(obj).reduce(/* ... */);
}

// Testy
const obj = { firstName: "John", lastName: "Doe", age: 30 };
const mapping = { firstName: "name", lastName: "surname" };
const result = transformKeys(obj, mapping);
const expected = { name: "John", surname: "Doe", age: 30 };
console.log("Wynik:", result);
console.log("Oczekiwany:", expected);
console.log("Test:", JSON.stringify(result) === JSON.stringify(expected) ? "✅ PASS" : "❌ FAIL");

