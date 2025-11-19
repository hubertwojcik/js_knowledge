# Zadania z JavaScript reduce - 20 zadań od podstaw do zaawansowanych

## Poziom 1: Podstawy (Zadania 1-5)

### Zadanie 1: Suma liczb

Napisz funkcję, która używa `reduce` do zsumowania wszystkich liczb w tablicy.

**Przykład:**

```javascript
const numbers = [1, 2, 3, 4, 5];
// Oczekiwany wynik: 15
```

---

### Zadanie 2: Iloczyn liczb

Napisz funkcję, która używa `reduce` do obliczenia iloczynu wszystkich liczb w tablicy.

**Przykład:**

```javascript
const numbers = [2, 3, 4];
// Oczekiwany wynik: 24
```

---

### Zadanie 3: Znajdź maksimum

Napisz funkcję, która używa `reduce` do znalezienia największej liczby w tablicy.

**Przykład:**

```javascript
const numbers = [3, 7, 2, 9, 1, 5];
// Oczekiwany wynik: 9
```

---

### Zadanie 4: Zliczanie elementów

Napisz funkcję, która używa `reduce` do zliczenia wszystkich elementów w tablicy.

**Przykład:**

```javascript
const items = ["a", "b", "c", "d", "e"];
// Oczekiwany wynik: 5
```

---

### Zadanie 5: Suma długości stringów

Napisz funkcję, która używa `reduce` do zsumowania długości wszystkich stringów w tablicy.

**Przykład:**

```javascript
const words = ["hello", "world", "reduce", "is", "cool"];
// Oczekiwany wynik: 22
```

---

## Poziom 2: Transformacje (Zadania 6-10)

### Zadanie 6: Tablica do obiektu - indeksy jako klucze

Napisz funkcję, która używa `reduce` do przekształcenia tablicy w obiekt, gdzie kluczami są indeksy.

**Przykład:**

```javascript
const arr = ["a", "b", "c"];
// Oczekiwany wynik: { 0: 'a', 1: 'b', 2: 'c' }
```

---

### Zadanie 7: Grupowanie po długości

Napisz funkcję, która używa `reduce` do pogrupowania słów według ich długości.

**Przykład:**

```javascript
const words = ["cat", "dog", "elephant", "bird", "lion"];
// Oczekiwany wynik: { 3: ['cat', 'dog'], 8: ['elephant'], 4: ['bird', 'lion'] }
```

---

### Zadanie 8: Zliczanie wystąpień

Napisz funkcję, która używa `reduce` do zliczenia wystąpień każdego elementu w tablicy.

**Przykład:**

```javascript
const items = ["apple", "banana", "apple", "orange", "banana", "apple"];
// Oczekiwany wynik: { apple: 3, banana: 2, orange: 1 }
```

---

### Zadanie 9: Płaska tablica z zagnieżdżonych

Napisz funkcję, która używa `reduce` do spłaszczenia tablicy zagnieżdżonej o jednym poziomie.

**Przykład:**

```javascript
const nested = [
  [1, 2],
  [3, 4],
  [5, 6],
];
// Oczekiwany wynik: [1, 2, 3, 4, 5, 6]
```

---

### Zadanie 10: Obiekt do tablicy par klucz-wartość

Napisz funkcję, która używa `reduce` do przekształcenia obiektu w tablicę par [klucz, wartość].

**Przykład:**

```javascript
const obj = { a: 1, b: 2, c: 3 };
// Oczekiwany wynik: [['a', 1], ['b', 2], ['c', 3]]
```

---

## Poziom 3: Średnio zaawansowane (Zadania 11-15)

### Zadanie 11: Grupowanie obiektów po właściwości

Napisz funkcję, która używa `reduce` do pogrupowania tablicy obiektów według wartości określonej właściwości.

**Przykład:**

```javascript
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
  { name: "David", age: 30 },
];
// Grupowanie po 'age'
// Oczekiwany wynik: {
//   25: [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }],
//   30: [{ name: 'Bob', age: 30 }, { name: 'David', age: 30 }]
// }
```

---

### Zadanie 12: Suma właściwości obiektów

Napisz funkcję, która używa `reduce` do zsumowania wartości określonej właściwości z tablicy obiektów.

**Przykład:**

```javascript
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 75 },
];
// Suma właściwości 'price'
// Oczekiwany wynik: 1100
```

---

### Zadanie 13: Usuwanie duplikatów

Napisz funkcję, która używa `reduce` do usunięcia duplikatów z tablicy.

**Przykład:**

```javascript
const numbers = [1, 2, 2, 3, 4, 4, 5];
// Oczekiwany wynik: [1, 2, 3, 4, 5]
```

---

### Zadanie 14: Głębokie spłaszczenie tablicy

Napisz funkcję, która używa `reduce` do spłaszczenia tablicy zagnieżdżonej na dowolnym poziomie głębokości.

**Przykład:**

```javascript
const deeplyNested = [1, [2, [3, [4, 5]]], 6];
// Oczekiwany wynik: [1, 2, 3, 4, 5, 6]
```

---

### Zadanie 15: Transformacja obiektu - zmiana kluczy

Napisz funkcję, która używa `reduce` do przekształcenia obiektu, zmieniając nazwy kluczy zgodnie z mapowaniem.

**Przykład:**

```javascript
const obj = { firstName: "John", lastName: "Doe", age: 30 };
const mapping = { firstName: "name", lastName: "surname" };
// Oczekiwany wynik: { name: 'John', surname: 'Doe', age: 30 }
```

---

## Poziom 4: Zaawansowane (Zadania 16-20)

### Zadanie 16: Agregacja z warunkami

Napisz funkcję, która używa `reduce` do obliczenia średniej wartości właściwości z obiektów, które spełniają określony warunek.

**Przykład:**

```javascript
const students = [
  { name: "Alice", grade: 85, passed: true },
  { name: "Bob", grade: 45, passed: false },
  { name: "Charlie", grade: 90, passed: true },
  { name: "David", grade: 70, passed: true },
];
// Średnia ocen tylko dla studentów, którzy zdali (passed: true)
// Oczekiwany wynik: 81.67 (zaokrąglone)
```

---

### Zadanie 17: Redukcja z akumulatorem obiektowym

Napisz funkcję, która używa `reduce` do przekształcenia tablicy obiektów w jeden obiekt z wieloma agregacjami (suma, średnia, min, max).

**Przykład:**

```javascript
const sales = [
  { product: "A", amount: 100 },
  { product: "B", amount: 200 },
  { product: "A", amount: 150 },
  { product: "C", amount: 50 },
];
// Oczekiwany wynik: {
//   total: 500,
//   average: 125,
//   min: 50,
//   max: 200,
//   count: 4
// }
```

---

### Zadanie 18: Zagnieżdżone grupowanie

Napisz funkcję, która używa `reduce` do pogrupowania obiektów według dwóch właściwości (zagnieżdżone grupowanie).

**Przykład:**

```javascript
const orders = [
  { customer: "Alice", product: "Laptop", quantity: 1 },
  { customer: "Bob", product: "Mouse", quantity: 2 },
  { customer: "Alice", product: "Mouse", quantity: 1 },
  { customer: "Bob", product: "Laptop", quantity: 1 },
];
// Grupowanie najpierw po 'customer', potem po 'product'
// Oczekiwany wynik: {
//   Alice: {
//     Laptop: [{ customer: 'Alice', product: 'Laptop', quantity: 1 }],
//     Mouse: [{ customer: 'Alice', product: 'Mouse', quantity: 1 }]
//   },
//   Bob: {
//     Mouse: [{ customer: 'Bob', product: 'Mouse', quantity: 2 }],
//     Laptop: [{ customer: 'Bob', product: 'Laptop', quantity: 1 }]
//   }
// }
```

---

### Zadanie 19: Redukcja z transformacją i filtrowaniem

Napisz funkcję, która używa `reduce` do jednoczesnego filtrowania, transformacji i agregacji danych w jednej operacji.

**Przykład:**

```javascript
const transactions = [
  { type: "income", amount: 1000, category: "salary" },
  { type: "expense", amount: 200, category: "food" },
  { type: "income", amount: 500, category: "freelance" },
  { type: "expense", amount: 150, category: "transport" },
  { type: "expense", amount: 300, category: "food" },
];
// Filtruj tylko wydatki, pogrupuj po kategorii i zsumuj kwoty
// Oczekiwany wynik: { food: 500, transport: 150 }
```

---

### Zadanie 20: Kompleksowa transformacja z wieloma akumulatorami

Napisz funkcję, która używa `reduce` do przekształcenia tablicy obiektów w obiekt zawierający wiele różnych agregacji i transformacji jednocześnie.

**Przykład:**

```javascript
const employees = [
  { name: "Alice", department: "Engineering", salary: 80000, years: 3 },
  { name: "Bob", department: "Engineering", salary: 90000, years: 5 },
  { name: "Charlie", department: "Marketing", salary: 70000, years: 2 },
  { name: "David", department: "Engineering", salary: 85000, years: 4 },
  { name: "Eve", department: "Marketing", salary: 75000, years: 3 },
];
// Oczekiwany wynik: {
//   byDepartment: {
//     Engineering: [/* obiekty z Engineering */],
//     Marketing: [/* obiekty z Marketing */]
//   },
//   totalSalary: 400000,
//   averageSalary: 80000,
//   departmentStats: {
//     Engineering: { count: 3, totalSalary: 255000, avgSalary: 85000 },
//     Marketing: { count: 2, totalSalary: 145000, avgSalary: 72500 }
//   },
//   seniorEmployees: [/* osoby z years >= 4 */]
// }
```

---

## Wskazówki do rozwiązań

### Podstawowe wzorce reduce:

```javascript
// Suma
arr.reduce((acc, curr) => acc + curr, 0)

// Maksimum
arr.reduce((acc, curr) => curr > acc ? curr : acc, arr[0])

// Grupowanie
arr.reduce((acc, curr) => {
  const key = /* wyznacz klucz */;
  if (!acc[key]) acc[key] = [];
  acc[key].push(curr);
  return acc;
}, {})

// Transformacja obiektu
Object.entries(obj).reduce((acc, [key, value]) => {
  acc[newKey] = value;
  return acc;
}, {})
```

### Zaawansowane techniki:

- Używanie akumulatora jako obiektu z wieloma właściwościami
- Łączenie operacji (filtrowanie + transformacja + agregacja)
- Rekurencyjne reduce dla zagnieżdżonych struktur
- Reduce z warunkami i logiką biznesową

---

**Powodzenia na rozmowie! 🚀**
