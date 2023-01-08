# Aplikacje webowe (React)

## Utworzenie aplikacji
1. Jeśli nie masz zainstalowanego pobierz [Node](https://nodejs.org/en/download/)
2. W terminalu wpisz komendę `npm i create-react-app –g`
3. Utwórz folder REACT na dysku C
4. W folderze REACT wpisz komendę `create-react-app hello`
5. Przejdź do folderu projektu `hello` komendą `cd hello`
6. Wpisz komendę `npm start`, aby uruchomić serwer deweloperski
7. W wyniku komendy uruchomi się przeglądarka z adresem `localhost:3000`


## Poprzednie zadania

["Zadanie kursy"](./02sj2022.md/#aplikacja-webowa)

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