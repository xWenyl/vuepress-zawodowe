# Aplikacje webowe

## Poprzednie zadania

["Kursy react"](./02sj2022.md/#aplikacja-webowa)

## Porady React

Wypisanie elementów z tablicy za pomocą metody `.map()`
```jsx
<ol>
{tablica.map((element) => (
    <li key={element}>{element}</li>
))}
</ol>
// Jeśli elementy mają być wypisane w liście należy użyć <ul>, bądź <ol> zależnie od polecenia
```