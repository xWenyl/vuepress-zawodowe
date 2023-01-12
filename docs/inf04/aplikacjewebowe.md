# Aplikacje webowe (React)

## Poprzednie zadania

02 | Sesja letnia 2022 - [Kursy](./02sl2022.md/#aplikacja-webowa)

## Utworzenie aplikacji

1. Jeśli nie masz zainstalowanego pobierz [Node](https://nodejs.org/en/download/)
2. W terminalu wpisz komendę `npm i create-react-app –g`
3. Utwórz folder REACT na dysku C
4. W folderze REACT wpisz komendę `create-react-app hello`
5. Przejdź do folderu projektu `hello` komendą `cd hello`
6. Wpisz komendę `npm start`, aby uruchomić serwer deweloperski
7. W wyniku komendy uruchomi się przeglądarka z adresem `localhost:3000`

::: tip Porada
Przed rozpoczęciem pracy nad aplikacją warto usunąć niepotrzebny kod z pliku `App.js`
:::
<CodeGroup>
<CodeGroupItem title="App.js">

```jsx
import './App.css';

function App() {
    return (
      <div className="App">

    </div>;
    )
}

export default App;
```

  </CodeGroupItem>
</CodeGroup>

## Ważne zagadnienia

### Komponent

Komponent to niezależna, wielorazowego użytku część kodu. Może to być przycisk, tabela, formularz, cokolwiek zadecydujemy.
Standardem jest pisanie komponentów funkcyjnych i nadawanie im nazw wielkią literą.

Przykład komponentu zdefiniowanego w pliku Hello.js:

```jsx
function Hello() {
    return (
        // Komponenty mogą zwracać tylko jeden element korzenny, w tym przypadku div
        <div>
            <h2>Hello, world!</h2>
            <p>How are you doing?</p>
        </div>
    );
}

export default Hello;
```

Przykładowe użycie w App.js:

```jsx
// Wymagany jest import komponentu
import Hello from './Hello.js';

function App() {
    return (
        <div>
            <h1>Welcome to my app.</h1>
            <Hello />
        </div>
    );
}

export default App;
```

### `useState()`

React daje nam dostęp do tzw. hooków. Są to funkcje, które pozwalają nam kontrolować działanie aplikacji.
Jednym z nich jest `useState()`. Jako argument przyjmuje wartość domyślną i zwraca nam tzw. state, oraz funkcję zmieniającą dany state.

::: tip State
Jest to stan naszej aplikacji. Działa jak normalna zmienna, ale zamiast `=`, jego wartość zmieniamy specjalną funkcją. Różni się też tym, iż zmiana wartości state aktualizuje nasz interfejs.
:::

Komponent Licznik.js używający state:

```jsx
// Aby używać hooków należy je zaimportować
import { useState } from 'react';

function Licznik() {
    const [licznik, setLicznik] = useState(0);

    function zwieksz() {
        // Można to rozumieć podobnie do licznik = licznik + 1;
        setLicznik(licznik => licznik + 1);
    }

    function resetuj() {
        // Można to rozumieć podobnie do licznik = 0;
        setLicznik(0);
    }

    return (
        <div>
            <h2>{licznik}</h2>
            <button onClick={zwieksz}>Zwieksz licznik</button>
            <button onClick={resetuj}>Resetuj licznik</button>
        </div>
    );
}
```

### `useRef()`

`useRef()` przyjmuje domyślną wartość i jest używany do stworzenia 'adresu', pod który możemy przypisać znacznik HTML

Komponent używający `useRef`:

```jsx
// Aby używać hook'ów należy je zaimportować
import { useRef } from 'react';

function Licznik() {
    // buttonRef to jakiś pusty adres
    const buttonRef = useRef(0);

    // Po danym przypisaniu buttonRef to adres danego przycisku
    // Natomiast buttonRef.current to dany przycisk
    return (
        <div>
            <button ref={buttonRef}>Kliknij</button>
        </div>
    );
}
```

### Obsługa inputów

Wyróżniamy dwa, trochę różne sposoby na obsługiwanie input'ów:

1. Używając `useRef()`
2. Używajac `useState()`

Różnią się tym, że używając `useState()` możemy programatycznie zmieniać wartość inputa, a używając `useRef()` możemy tą wartość programatycznie jedynie odczytywać

::: details useRef

```jsx
import { useRef } from 'react';
function App() {
  const inputRef = useRef(0);

  // W ten sposób możemy odczytać wartość inputa używając inputRef.current.value
  return <input ref={inputRef}>
}
export default App;
```

:::

::: details useState

```jsx
import { useState } from 'react';
function App() {
  const [tekst, setTekst] = useState('');

  // W ten sposób możemy:
  // 1. odczytać wartość inputa używając zmiennej tekst
  // 2. nadpisać wartość inputa używając funkcji setTekst
  return <input value={tekst} onChange={(e) => setTekst(e.target.value)}>
}
export default App;
```

:::

### `.map()`

Gdy nasze dane są w formie tablicy możemy je wypisać używając metody `.map()`.

Daje nam to możliwość generowania znaczników HTML jakbyśmy to robili używając pętli.
:::tip Pamiętaj
Jeśli elementy mają być wypisane w liście należy użyć `<ul>`, bądź `<ol>` zależnie od polecenia
:::

```jsx
const tablica = ['a', 'b', 'c'];

// Zapełniamy znacznik <ol> danymi z tablicy
<ol>
    {tablica.map(element => (
        <li key={element}>{element}</li>
    ))}
</ol>;
// W dany sposób w naszym <ol> stworzymy 3 znaczniki <li>:
// <li key="a">a</li>
// <li key="b">b</li>
// <li key="c">c</li>
```
