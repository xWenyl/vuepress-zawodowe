# 01 | Sesja letnia 2022

::: details Arkusz
![1](/inf03/2022-lato-wersja-1/strona-1.png)
![2](/inf03/2022-lato-wersja-1/strona-2.png)
![3](/inf03/2022-lato-wersja-1/strona-3.png)
![4](/inf03/2022-lato-wersja-1/strona-4.png)
![5](/inf03/2022-lato-wersja-1/strona-5.png)
:::

## Operacje na bazie danych

Jeżeli nie wiesz jak utworzyć i zaimportować bazę danych, przejdź [tutaj](/inf03/wskazowki-pomoc/tworzenie-import-bazy).

::: warning UWAGA: Informacje o bazie danych
Zwróć uwagę na informacje zamieszczone powyżej schematu bazy danych, dowiesz się tam co oznaczają wartości pól numerycznych w danych polach.
:::

<CodeGroup>
  <CodeGroupItem title="kwerendy.txt">

```sql
kw1: SELECT id, nazwa, wystepowanie FROM Ryby WHERE styl_zycia = 1;
kw2: SELECT Ryby_id, wymiar_ochronny FROM Okres_ochronny WHERE wymiar_ochronny < 30;
kw3: SELECT nazwa, akwen, wojewodztwo FROM Ryby INNER JOIN Lowisko ON Ryby.id = Lowisko.Ryby_id WHERE rodzaj = 3;
kw4: ALTER TABLE Ryby ADD dobowy_limit TINYINT UNSIGNED;
```

  </CodeGroupItem>
</CodeGroup>

::: tip WSKAZÓWKA: Typy numeryczne w MySQL
W języku SQL wyróżnia się wiele numerycznych typów danych. Jednym z nich jest `TINYINT`, mogący przyjąć tylko 256 wartości. Dodanie atrybutu `UNSIGNED` pozwala przyjmować tylko wartości nieujemne (0-255).
:::

## Witryna internetowa

::: tip WSKAZÓWKA: Emmety w VS Code
Edytor kodu Visual Studio Code ma wbudowane wiele przydatnych funkcji takich jak IntelliSense czy Emmet, które ułatwia pracę z kodem. Edytując plik HTML mamy możliwość wygenerowania wstępnego szablonu strony poprzez wpisanie znaku `!`.
:::

<CodeGroup>
  <CodeGroupItem title="wedkuj.php">

```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wędkowanie</title>
    <link rel="stylesheet" href="styl_1.css">
</head>
<body>
    <header> <!-- Blok banera -->
        <h1>Portal dla wędkarzy</h1>
    </header>
    <main>  <!-- Kontener na bloki lewe i prawy-->
        <section> <!-- Kontener na dwa bloki lewe -->
            <div> <!-- Blok lewy 1. -->
                <h3>Ryby zamieszkujące rzeki</h3>
                <ol>
                    <!-- <?php
                        Miejsce na skrypt 1.
                    ?> -->
                </ol>
            </div>
            <div> <!-- Blok lewy 2. -->
                <h3>Ryby drapieżne naszych wód</h3>
                <table>
                    <tr>
                        <th>L.p.</th>
                        <th>Gatunek</th>
                        <th>Występowanie</th>
                    </tr>
                    <!-- <?php
                        Miejsce na skrypt 2.
                    ?> -->
                </table>
            </div>
        </section>
        <section> <!-- Blok prawy -->
            <img src="ryba1.jpg" alt="Sum">
            <a href="kwerendy.txt">Pobierz kwerendy</a>
        </section>
    </main>
    <footer>
        <p>Stronę wykonał: Wojciech Chrzan Worshox</p>
    </footer>
</body>
</html>
```

  </CodeGroupItem>
  <CodeGroupItem title="styl_1.css">

```css
/* Formatowanie z egzaminu */

* {
    font-family: Helvetica;
}

header, footer {
    background-color: #008387;
    color: white;
    padding: 5px;
    font-size: 130%;
    text-align: center;
}

section div {
    background-color: #EFEFEF;
    width: 55%;
}

section div:first-child {
    height: 150px;
}

section div:last-child {
    height: 300px;
}

section:last-child {
    background-color: #4FB3BF;
    width: 45%;
    height: 450px;
    text-align: center;
}

img {
    box-shadow: 10px 10px 7px DimGray;
    margin: 20px;
}

table, th, td {
    border: 1px solid #4FB3BF;
    border-collapse: collapse;
}

table {
    margin: auto;
    width: 80%;
}

th, td {
    padding: 4px;
}

tr:hover {
    background-color: #4FB3BF;
}

/* Dodatkowe formatowanie do poprawnego układu bloków */

main {
    display: flex;
}

section:first-child {
    width: 55%;
}

section div {
    width: 100%;
}

h3 {
    margin-block: 0;
}
```

  </CodeGroupItem>
</CodeGroup>

## Skrypt połączenia z bazą

::: warning UWAGA: Lokalizacja skryptu
Zawsze zwracaj uwagę na to, w którym miejscu kodu strony ma się znajdować skrypt PHP, a także na to, w jakiej formie ma zwracać wyniki, np. element listy lub wiersz tabeli.
:::


<CodeGroup>
  <CodeGroupItem title='Skrypt 1'>

```php
$pdo = new PDO('mysql:host=localhost;dbname=wedkowanie', 'root', '');
$sql = 'SELECT nazwa, akwen, wojewodztwo FROM Ryby INNER JOIN Lowisko ON Ryby.id = Lowisko.Ryby_id WHERE rodzaj = 3;';
$stmt = $pdo->prepare($sql);
$stmt->execute();

while($rekord = $stmt->fetch(PDO::FETCH_ASSOC)) {
    echo "<li>{$rekord['nazwa']} pływa w rzece {$rekord['akwen']}, {$rekord['wojewodztwo']}</li>";
}
```

  </CodeGroupItem>
  <CodeGroupItem title='Skrypt 2'>

```php
$sql = 'SELECT id, nazwa, wystepowanie FROM Ryby WHERE styl_zycia = 1;';
$stmt = $pdo->prepare($sql);
$stmt->execute();

while($rekord = $stmt->fetch(PDO::FETCH_ASSOC)) {
    echo "<tr> <td>{$rekord['id']}</td> <td>{$rekord['nazwa']}</td> <td>{$rekord[wystepowanie]}</td> </tr>";
}

unset($pdo);
```

  </CodeGroupItem>
</CodeGroup>

Opracował: **Wojciech Chrzan aka Worshox**
