# 03 | Sesja zimowa 2023

::: details Arkusz

:::

## Operacje na bazie danych

Jeżeli nie wiesz jak utworzyć i zaimportować bazę danych, przejdź [tutaj](/inf03/wskazowki-pomoc/tworzenie-import-bazy).

<CodeGroup>
  <CodeGroupItem title="kwerendy.txt">

```sql
kw1: SELECT nazwa, ulica FROM kwiaciarnie WHERE miasto LIKE "Malbork";
kw2: SELECT id_kwiaciarni, COUNT(id_zam) FROM zamowienia GROUP BY id_kwiaciarni;
kw3: SELECT nazwa, miasto, kwiaty FROM kwiaciarnie INNER JOIN zamowienia ON kwiaciarnie.id_kwiaciarni = zamowienia.id_kwiaciarni WHERE data = "07.01.2017";
kw4: CREATE TABLE klienci(id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, imie VARCHAR(15), nazwisko VARCHAR(15), rabat INT UNSIGNED);
```

  </CodeGroupItem>
</CodeGroup>

## Witryna internetowa

::: tip WSKAZÓWKA: Podświetlony kod
Elementy różniące strony są zaznaczone podświetleniem.
:::

<CodeGroup>
  <CodeGroupItem title="index.html">

```html{35-38}
<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <title>Kwiaty</title>
    <link rel="stylesheet" href="styl3.css">
</head>

<body>
    <!-- Blok banera -->
    <header>
        <h1>Grupa Polskich Kwiaciarni</h1>
    </header>

    <!-- Blok lewy -->
    <nav>
        <h2>Menu</h2>
        <ol>
            <li> <a href="index.html">Stona główna</a> </li>
            <li> <a href="https://kwiaty.pl" target="_blank">Rozpoznaj kwiaty</a> </li>
            <li>
                <a href="znajdz.php">Znajdź kwiaciarnię</a>
                <ol>
                    <li>w Warszawie</li>
                    <li>w Malborku</li>
                    <li>w Poznaniu</li>
                </ol>
            </li>
        </ol>
    </nav>

    <!-- Blok prawy -->
    <main>
        <h2>Strona dla miłośników kwiatów</h2>
        <img src="gerbera.jpg" alt="Gerbera">
        <img src="gozdzik.jpg" alt="Goździk">
        <img src="roza.jpg" alt="Róża">
    </main>

    <!-- Blok stopki -->
    <footer>
        <p>Stronę opracował: 0000000000</p>
    </footer>
</body>

</html>
```

  </CodeGroupItem>
  <CodeGroupItem title="znajdz.php">

```php{35-45}
<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <title>Kwiaty</title>
    <link rel="stylesheet" href="styl3.css">
</head>

<body>
    <!-- Blok banera -->
    <header>
        <h1>Grupa Polskich Kwiaciarni</h1>
    </header>

    <!-- Blok lewy -->
    <nav>
        <h2>Menu</h2>
        <ol>
            <li> <a href="index.html">Stona główna</a> </li>
            <li> <a href="https://kwiaty.pl" target="_blank">Rozpoznaj kwiaty</a> </li>
            <li>
                <a href="znajdz.php">Znajdź kwiaciarnię</a>
                <ol>
                    <li>w Warszawie</li>
                    <li>w Malborku</li>
                    <li>w Poznaniu</li>
                </ol>
            </li>
        </ol>
    </nav>

    <!-- Blok prawy -->
    <main>
        <h2>Znajdź kwiaciarnię</h2>
        <form method="POST">
            <label for="miasto">Podaj nazwę miasta:</label>
            <input type="text" name="miasto" id="miasto">
            <input type="submit" value="SPRWADŹ">
        </form>

        <?php
          //Skrypt PHP
        ?>

    </main>

    <!-- Blok stopki -->
    <footer>
        <p>Stronę opracował: 0000000000</p>
    </footer>
</body>

</html>
```

  </CodeGroupItem>
  <CodeGroupItem title="styl3.css">

```css
/* Wszystkie selektory stylu css */
* {
  font-family: Georgia;
}

/* Blok banera i stopki */
header,
footer {
  background: #c75b39;
  color: white;
  padding: 10px;
  text-align: center;
}

/* Blok lewy */
nav {
  background: #ff8a65;
  width: 25%;
  height: 500px;
  padding-top: 50px;
}

/* Blok prawy */
main {
  background: snow;
  width: 75%;
  height: 500px;
  text-align: center;
  padding-top: 50px;
}

/* Obraz */
img {
  width: 25%;
  margin: 10px;
  box-shadow: 15px 15px 10px dimgray;
}

/* Element listy */
li {
  margin: 5px;
}

/* Znak markera */
li::marker {
  color: snow;
}

/* Nagłówek trzeciego stopnia */
h3 {
  margin: 50px 0;
}

/* Dodatkowe formatowanie do poprawnego wyświetlania bloków */
nav,
main {
  float: left;
}

footer {
  clear: both;
}
```

  </CodeGroupItem>
</CodeGroup>

## Skrypt PHP

::: warning UWAGA: Załączanie skryptu
Pamiętaj, aby odpowiednio załączyć skrypt do swoich plików. Możesz dodać go z pliku zewnętrznego za pomocą konstrukcji `include('skrypt.php');` lub umieścić go w odpowiednim miejscu strony, tam, gdzie ma być wypisana dana wartość.
:::

<CodeGroup>
  <CodeGroupItem title="cennik.php">

```php
<form method="POST">
    <label for="miasto">Podaj nazwę miasta:</label>
    <input type="text" name="miasto" id="miasto">
    <input type="submit" value="SPRWADŹ">
</form>

<?php
    if (!empty($_POST['miasto'])) {
        $polaczenie = mysqli_connect('localhost', 'root', '', 'kwiaciarnia');
        $sql = "SELECT nazwa, ulica FROM kwiaciarnie WHERE miasto LIKE '{$_POST['miasto']}'";

        $wynik = mysqli_query($polaczenie, $sql);

        while ($rekord = mysqli_fetch_row($wynik)) {
            echo "<h3>$rekord[0], $rekord[1]</h3>";
        }

        mysqli_close($polaczenie);
    }
?>
```

  </CodeGroupItem>
</CodeGroup>

Opracował: **Wojciech Chrzan aka Worshox**
