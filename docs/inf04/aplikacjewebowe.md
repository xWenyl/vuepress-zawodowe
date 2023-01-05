# Aplikacje webowe

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