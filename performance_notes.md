# Wydajność metod tablicowych i pętli w JavaScript

## Czym jest Execution Context?

**Execution Context** to wewnętrzne środowisko uruchomieniowe, które
silnik JavaScript tworzy za każdym razem, gdy: - wywoływana jest
funkcja, - wykonywany jest globalny kod, - tworzony jest blok `eval`.

Execution Context zawiera: - **Environment Record** -- zmienne, funkcje,
argumenty, - **Outer Environment** -- odnośnik do zakresów zewnętrznych
(scope chain), - **`this` binding**, - **mechanizmy kontroli
sterowania** (stos wywołań, try/catch).

W praktyce:\
➡️ *każde wywołanie funkcji = nowy execution context*\
➡️ dlatego wszystkie metody tablicowe oparte o callback mają dodatkowy
koszt.

------------------------------------------------------------------------

# Dlaczego metody tablicowe są wolniejsze od zwykłej pętli `for`

## 1. Callback Overhead (główny winowajca)

Każda metoda tablicowa: `map`, `filter`, `forEach`, `reduce`, `find`,
`some`...

➡️ **wywołuje callback dla każdego elementu**, co tworzy NOWY execution
context.

To oznacza: - konieczność obsługi stosu wywołań, - przekazanie
argumentów (`value`, `index`, `array`), - setup środowiska funkcji, -
obsługę wyjątków.

Nawet jeśli callback jest nazwany (nie anonimowy), execution context i
tak powstaje.

------------------------------------------------------------------------

## 2. Tworzenie nowych tablic (alokacje pamięci)

-   `map` → tworzy nową tablicę `O(n)` pamięci
-   `filter` → również tworzy nową tablicę `O(k)` (k ≤ n)
-   `flatMap` → jeszcze większy narzut
-   `reduce` → w zależności od akumulatora
-   `forEach` → nic nie zwraca, ale callback overhead nadal istnieje

Każda alokacja generuje: - dodatkowy narzut przepisywania danych, -
więcej pracy dla Garbage Collectora.

------------------------------------------------------------------------

## 3. Brak możliwości przerwania

Metody tablicowe **nie mają** `break` ani `continue`.

Muszą przejść *całą tablicę*, więc: - `map`, `filter`, `forEach`,
`every`, `some`, `reduce` → **minimum O(n)**

Natomiast pętla `for` może przerwać działanie:

``` js
for (let i = 0; i < arr.length; i++) {
  if (found) break;
}
```

------------------------------------------------------------------------

## 4. Narzut specyfikacji ECMA

Metody tablicowe muszą obsłużyć: - sparse arrays (puste miejsca), -
modyfikacje prototypu, - `thisArg`, - konwersje typów, - wyjątki, -
dziedziczenie.

Pętla `for` tego nie robi.

------------------------------------------------------------------------

## 5. Wielokrotne iteracje (chaining)

Przykład:

``` js
arr.filter(...).map(...).reduce(...)
```

To: - **3 pełne przejścia tablicy → O(3n)** czasu, - czasami 2--3 nowe
tablice → **O(n)** pamięci.

Pętla:

``` js
for (const item of arr) {
  if (condition(item)) total += transform(item);
}
```

➡️ jedno przejście → **O(n)**\
➡️ zero dodatkowych tablic → **O(1)** pamięci

------------------------------------------------------------------------

# Złożoność metod tablicowych

  -----------------------------------------------------------------------------------
  Metoda         Time Complexity           Space Complexity          Uwagi
  -------------- ------------------------- ------------------------- ----------------
  `forEach`      O(n)                      O(1)                      callback per
                                                                     element

  `map`          O(n)                      O(n)                      tworzy nową
                                                                     tablicę

  `filter`       O(n)                      O(k)                      k ≤ n

  `reduce`       O(n)                      O(1)                      ale callback
                                                                     overhead

  `some`         O(n) worst                O(1)                      zatrzymuje się
                                                                     gdy znajdzie

  `every`        O(n) worst                O(1)                      zatrzymuje się
                                                                     gdy znajdzie
                                                                     false

  `find`         O(n) worst                O(1)                      zatrzymuje się
                                                                     gdy znajdzie

  `findIndex`    O(n) worst                O(1)                      zatrzymuje się
                                                                     gdy znajdzie

  `sort` (bez    O(n log n)                O(n)                      optymalizowany
  comparatora)                                                       przez V8

  `sort` (z      O(n log n \* callback)    O(n)                      ogromny callback
  callbackiem)                                                       overhead
  -----------------------------------------------------------------------------------

------------------------------------------------------------------------

# Podsumowanie

➡️ **Zwykły `for` ma najmniejszy narzut:**\
- brak callbacków\
- brak tworzenia nowych tablic\
- brak kosztów specyfikacji ECMA\
- lepsza optymalizacja w JIT

➡️ **Metody tablicowe są wygodne**, ale: - przy bardzo dużych datasetach
ich narzuty są znaczące, - każdy callback = execution context, - `map`,
`filter` tworzą dodatkowe tablice, - chaining zwiększa koszt
wielokrotnie.

W projektach z ogromnymi danymi: ✔️ używa się pętli `for` w hot path\
✔️ ogranicza tworzenie nowych struktur\
✔️ łączy transformacje w jedno przejście

------------------------------------------------------------------------

# Koniec
