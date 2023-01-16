# 02 | Sesja zimowa 2023

::: details Arkusz

:::

## Operacje na bazie danych

Jeżeli nie wiesz jak utworzyć i zaimportować bazę danych, przejdź [tutaj](/inf03/wskazowki-pomoc/tworzenie-import-bazy).

<CodeGroup>
  <CodeGroupItem title="kwerendy.txt">

```sql
kw1: SELECT * FROM pokoje;
kw2: SELECT id_pok, sezon FROM rezerwacje WHERE liczba_dn > 7;
kw3: SELECT SUM(liczba_dn) FROM rezerwacje WHERE sezon LIKE "zima";
kw4: UPDATE rezerwacje SET liczba_dn = 4 WHERE liczba_dn < 4;
kw5: CREATE USER najemca IDENTIFIED BY 'n@JEM1@!';
```

  </CodeGroupItem>
</CodeGroup>

## Witryna internetowa

::: tip WSKAZÓWKA: Podświetlony kod
Elementy różniące strony są zaznaczone podświetleniem.
:::

<CodeGroup>
  <CodeGroupItem title="index.html">

```html{25}
<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <title>Wynajem pokoi</title>
    <link rel="stylesheet" href="styl2.css">
</head>

<body>
    <!-- Blok banera -->
    <header>
        <h1>Pensjonat pod dobrym humorem</h1>
    </header>

    <!-- Blok lewy -->
    <section>
        <a href="index.html">GŁÓWNA</a>
        <img src="1.jpg" alt="pokoje">
    </section>

    <!-- Blok środkowy -->
    <section>
        <a href="cennik.php">CENNIK</a>
        <img src="2.jpg" alt="pokoje">
    </section>

    <!-- Blok prawy -->
    <section>
        <a href="kalkulator.html">KALKULATOR</a>
        <img src="3.jpg" alt="pokoje">
    </section>

    <!-- Blok stopki -->
    <footer>
        <p>Stronę opracował: 0000000000</p>
    </footer>
</body>

</html>
```

  </CodeGroupItem>
  <CodeGroupItem title="cennik.php">

```php{25-29}
<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <title>Wynajem pokoi</title>
    <link rel="stylesheet" href="styl2.css">
</head>

<body>
    <!-- Blok banera -->
    <header>
        <h1>Pensjonat pod dobrym humorem</h1>
    </header>

    <!-- Blok lewy -->
    <section>
        <a href="index.html">GŁÓWNA</a>
        <img src="1.jpg" alt="pokoje">
    </section>

    <!-- Blok środkowy -->
    <section>
        <a href="cennik.php">CENNIK</a>
        <table>

            // Skrypt PHP

        </table>
    </section>

    <!-- Blok prawy -->
    <section>
        <a href="kalkulator.html">KALKULATOR</a>
        <img src="3.jpg" alt="pokoje">
    </section>

    <!-- Blok stopki -->
    <footer>
        <p>Stronę opracował: 0000000000</p>
    </footer>
</body>

</html>
```

  </CodeGroupItem>
  <CodeGroupItem title="styl_1.css">

```css
/* Wszystkie selektory stylu css */
* {
  font-family: Garamond;
  text-align: center;
}

/* Ciało strony */
body {
  background: lavender;
}

/* Blok banera i stopki */
header,
footer {
  background: #af8eb5;
  color: white;
  padding: 10px;
}

/* Bloki lewy, środkowy i prawy */
section {
  background: #e1bee7;
  width: 30%;
  height: 500px;
  padding-top: 40px;
  margin: 15px;
  box-shadow: 10px 10px 10px dimgray;
}

/* Odnośnik */
a {
  color: indigo;
  font-size: 150%;
  padding: 10px;
  font-weight: bolder;
}

/* Najechanie na odnośnik */
a:hover {
  background-color: indigo;
  color: white;
}

/* Obraz i tabela */
img,
table {
  border: 1px solid;
  width: 80%;
  margin: 40px auto;
}

/* Dodatkowe formatowanie do poprawnego wyświetlania bloków */
section {
  float: left;
}

footer {
  clear: both;
}
```

  </CodeGroupItem>
</CodeGroup>

## Skrypt PHP

::: warning UWAGA Załączanie skryptu
Pamiętaj, aby odpowiednio załączyć skrypt do swoich plików. Możesz dodać go z pliku zewnętrznego za pomocą konstrukcji `include('skrypt.php');` lub umieścić go w odpowiednim miejscu strony, tam, gdzie ma być wypisana dana wartość.
:::

<CodeGroup>
  <CodeGroupItem title="cennik.php">

```php
<table>
  <?php
      $polaczenie = mysqli_connect('localhost', 'root', '', 'wynajem');
      $sql = "SELECT * FROM pokoje;";

      $result = mysqli_query($polaczenie, $sql) or die("Problem z odczytem danych!");

      while ($rekord = mysqli_fetch_row($result)) {
          echo "<tr> <td>{$rekord[0]}</td> <td>{$rekord[1]}</td> <td>{$rekord[2]}</td> </tr>";
      }

      mysqli_close($polaczenie);
  ?>
</table>
```

  </CodeGroupItem>
</CodeGroup>

Opracował: **Wojciech Chrzan aka Worshox**
