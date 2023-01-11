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
import "./App.css";

function App() {
  return <div className="App">

  </div>;
}

export default App;
```
  </CodeGroupItem>
</CodeGroup>


## Porady

Wypisanie elementów z tablicy za pomocą metody `.map()`
```jsx
<ol>
{tablica.map((element) => (
    <li key={element}>{element}</li>
))}
</ol>
// Jeśli elementy mają być wypisane w liście należy użyć <ul>, bądź <ol> zależnie od polecenia
```