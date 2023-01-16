# 01 | Sesja zimowa 2023

::: details Arkusz

:::

## Operacje na bazie danych

Jeżeli nie wiesz jak utworzyć i zaimportować bazę danych, przejdź [tutaj](/inf03/wskazowki-pomoc/tworzenie-import-bazy).

<CodeGroup>
  <CodeGroupItem title="kwerendy.txt">

```sql
kw1: SELECT cena, pojemnosc FROM farby WHERE kolor LIKE "czerwony";
kw2: SELECT kolor, cena / pojemnosc AS `cena jednostkowa` FROM farby;
kw3: SELECT kolor, liczba_puszek FROM farby INNER JOIN malowanie ON farby.id_farby = malowanie.id_farby WHERE id_pomieszczenia = 3;
kw4: CREATE VIEW pomieszczenie1 AS SELECT id_sciany, id_farby, liczba_puszek FROM malowanie WHERE id_pomieszczenia = 1;
```

  </CodeGroupItem>
</CodeGroup>

## Witryna internetowa

::: tip Elementy różniące się na stronach
Elementy stron, które są różne dla obu z nich są zaznaczone podświetleniem.
:::

<CodeGroup>
  <CodeGroupItem title="mieszamy.html">

```html{27-43}
<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <title>malarz</title>
    <link rel="stylesheet" href="styl_1.css">
</head>

<body>
    <!-- Blok banera -->
    <header>
        <h1>Malowanie pokoi i biur</h1>
    </header>

    <!-- Blok lewy -->
    <nav>
        <h2>Menu</h2>
        <ul>
            <li> <a href="mieszamy.html">Mieszamy</a> </li>
            <li> <a href="cena.html">Wyceniamy</a> </li>
        </ul>
    </nav>

    <!-- Blok środkowy -->
    <section>
        <h2>Barwy i ich pochodne</h2>
        <table>
            <tr>
                <th colspan="2">Składowe</th>
                <th>Wynik</th>
            </tr>
            <tr>
                <td>żółty</td>
                <td>czerwony</td>
                <td>pomarańczowy</td>
            </tr>
            <tr>
                <td>czerwony</td>
                <td>niebieski</td>
                <td>fioletowy</td>
            </tr>
        </table>
    </section>

    <!-- Blok prawy -->
    <aside>
        <img src="obraz.png" alt="Próbki farb">
    </aside>

    <!-- Blok stopki -->
    <footer>
        <h3>MALARZ</h3>
        <p>Stronę opracował: 0000000000</p>
    </footer>
</body>

</html>
```

  </CodeGroupItem>
  <CodeGroupItem title="cena.html">

```html{27-31}
<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <title>malarz</title>
    <link rel="stylesheet" href="styl_1.css">
</head>

<body>
    <!-- Blok banera -->
    <header>
        <h1>Malowanie pokoi i biur</h1>
    </header>

    <!-- Blok lewy -->
    <nav>
        <h2>Menu</h2>
        <ul>
            <li> <a href="mieszamy.html">Mieszamy</a> </li>
            <li> <a href="cena.html">Wyceniamy</a> </li>
        </ul>
    </nav>

    <!-- Blok środkowy -->
    <section>
        <h2>Zapotrzebowanie na farbę</h2>
        <label for="powierzchnia">Powierzchnia malowania (m<sup>2</sup>):</label>
        <input type="number" id="powierzchnia">
        <button onclick="policz()">Policz</button>
        <p id="wynik"></p>
    </section>

    <!-- Blok prawy -->
    <aside>
        <img src="obraz.png" alt="Próbki farb">
    </aside>

    <!-- Blok stopki -->
    <footer>
        <h3>MALARZ</h3>
        <p>Stronę opracował: 0000000000</p>
    </footer>

    <!-- Skrypt -->
    <script>

    </script>
</body>

</html>
```

  </CodeGroupItem>
  <CodeGroupItem title="styl_1.css">

```css
/* Wszystkie selektory stylu css */
* {
  font-family: Cambria;
}

/* Bloki banera i stopki */
header,
footer {
  background: #829eb9;
  color: white;
  text-align: center;
  padding: 10px;
}

/* Bloki lewy i prawy */
nav,
aside {
  background: #b3c6d9;
  height: 400px;
  width: 25%;
  padding-top: 100px;
}

/* Blok środkowy */
section {
  background: #e0e9f1;
  height: 400px;
  width: 50%;
  text-align: center;
  padding-top: 100px;
}

/* Tabela */
table {
  border: 1px solid dimgray;
  width: 80%;
  margin: auto;
  border-collapse: collapse;
}

/* Komórka tabeli i komórka nagłówkowa */
td,
th {
  border: 1px solid dimgray;
  border-collapse: collapse;
}

/* Najechanie na komórkę tabeli */
td:hover {
  background-color: steelblue;
  color: white;
}

/* Obraz */
img {
  width: 100%;
  border-radius: 20px;
}

/* Dodatkowe formatowanie do poprawnego wyświetlania bloków */
nav,
section,
aside {
  float: left;
}

footer {
  clear: both;
}
```

  </CodeGroupItem>
</CodeGroup>

## Skrypt JavaScript

::: warning Załączanie skryptu
Pamiętaj, aby odpowiednio załączyć skrypt do swoich plików. Możesz dodać go z pliku zewnętrznego za pomocą konstrukcji `<script src="skrypt.js"></script>` lub umieścić go w dowolnym miejscu strony, ja zostawiłem miejsce na skrypt na dole strony, tuż przed zamykającym znacznikiem `</body>`.
:::

<CodeGroup>
  <CodeGroupItem title="cena.html">

```js
<script>
  function policz() {
      //pobranie wartości z pola id="powierzchnia" jako liczba (+ z przodu)
      let powierzchnia = +document.getElementById('powierzchnia').value;
      //ustawienie zmiennej wynik na element strony o id="wynik"
      let wynik = document.getElementById('wynik');
      
      //obliczenie ilości potrzebnych puszek (Match.ceil() to zaokrąglenie w górę)
      let zapotrzebowanie = Math.ceil(powierzchnia / 4);
      
      //wypisanie obliczonejliczby puszek do elementu `wynik`
      wynik.innerHTML = `Liczba potrzebnych puszek: ${zapotrzebowanie}`;
  }
<script>
```

  </CodeGroupItem>
</CodeGroup>

Opracował: **Wojciech Chrzan aka Worshox**
