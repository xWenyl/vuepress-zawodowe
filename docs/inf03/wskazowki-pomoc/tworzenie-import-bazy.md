# Tworzenie i import bazy danych

Za pomocą pakietu XAMPP, bazy danych możemy tworzyć importować na dwa sposoby: z użyciem narzędzia **phpMyAdmin** i poprzez powłokę - **shell**. Poniżej zostały zaprezentowane oba sposoby z użyciem tych programów.

## Przez phpMyAdmin

Praca z phpMyAdmin jest bardzo łatwa i intuicyjna, mamy dostępny bardzo rozbudowany panel pozwalający nam na wygodną pracę z SZBD i umożliwiające dowolne operacje na bazach danych.

Zaczynamy od uruchomienia naszego *XAMPP Control Panel* i włączamy moduły: **Apache** i **MySQL**.

![1](/inf03/tworzenie-import-bazy/xampp.webp)

Uruchamiamy naszą ulubioną przeglądarkę internetową i w pasku adresu wpisujemy: `localhost\phpmyadmin`.

Teraz znajdujesz się na stronie głównej narzędzia phpMyAdmin. W celu utworzenia bazy przejdź na górnym pasku nawigacyjnym do sekcji 'Bazy danych' ('Databases') lub kliknij przycisk 'Nowa' ('New')
na liście baz danych po lewej stronie okna.

![1](/inf03/tworzenie-import-bazy/phpmyadmin.webp)

Twoim oczom powinna się ukazać lista baz danych znajdująca się na serwerze i mały formularz do stworzenia bazy danych. Wpisz pożądaną nazwę bazy danych, wybierz system kodowania znaków wedle swoich preferencji i naciśnij przycisk 'Create'.

::: tip System kodowania znaków
Domyślnie ustawionym systemem kodowania znaków jest `utf8mb_general_ci`, który jest stary i mało aktualny. Ja polecam co najmniej `utf8mb_unicode_ci`, który jest lepszy. Na potrzeby egzaminu zalecam jednak zostawić domyślny system, chyba że polecenie wymaga jego zmiany.
:::

![1](/inf03/tworzenie-import-bazy/stworz-baze.webp)

Teraz pojawiło się okno proszące o dodanie nowej tabeli, gdyż baza jest pusta. Ignorujemy to i na górnym pasku nawigacyjnym przechodzimy do sekcji 'Import'

![1](/inf03/tworzenie-import-bazy/do-importu.webp)

Teraz widzimy formularz importu do utworzonej bazy danych. Klikamy na przycisk 'Choose file' i wybieramy interesujący nas plik `.sql` (chyba, że twój plik jest skompresowany to możliwe są inne rozszerzenia). Pomijamy pozostałe opcje, scrollujemy na dół strony i klikamy przycisk 'Import'.

MIEJSCE NA OBRAZEK

Jeżeli import przebiegł pomyślnie to otrzymujemy informację o sukcesie wykonania wszystkich poleceń SQL znajdujących się w importowanym pliku na naszej bazie danych.

MIEJSCE NA OBRAZEK
