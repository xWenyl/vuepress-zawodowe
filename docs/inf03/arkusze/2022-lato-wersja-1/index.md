# 01 | Sesja letnia 2022

::: details Arkusz
![1](/inf03/2022-lato-wersja-1/strona-1.png)
![2](/inf03/2022-lato-wersja-1/strona-2.png)
![3](/inf03/2022-lato-wersja-1/strona-3.png)
![4](/inf03/2022-lato-wersja-1/strona-4.png)
![5](/inf03/2022-lato-wersja-1/strona-5.png)
:::

## Operacje na bazie danych

Jeżeli nie wiesz jak utworzyć i zaimportować bazę danych, przejdź [tutaj](/inf03/wskazowki-pomoc/tworzenie-import-bazy)

::: warning Uwaga
Zwróć uwagę na informacje zamieszczone powyżej schematu bazy danych, dowiesz się tam co oznaczają wartości pól numerycznych w danych polach
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

::: tip Typy numeryczne w MySQL
W języku SQL wyróżnia się wiele numerycznych typów danych. Jednym z nich jest `TINYINT`, mogący przyjąć tylko 256 wartości. Dodanie atrybutu `UNSIGNED` pozwala przyjmować tylko wartości nieujemne (0-255).
:::

## Kod HTML i CSS
