# 01 | Sesja letnia 2022

::: details Arkusz
![1](/inf04/2022-lato-wersja-1/1.png)
![2](/inf04/2022-lato-wersja-1/2.png))
![3](/inf04/2022-lato-wersja-1/3.png)
![4](/inf04/2022-lato-wersja-1/4.png)
:::

## Aplikacja konsolowa


```py
import random # Importowanie modułu "random"

tablica = [] # Zdefiniowanie pustej tablicy

print("Program dodaje do tablicy 50 losowych liczb w zakresie 1-100 i sprawdza czy liczba podana przez użytkownika znajduję się w tablicy")

def wypelnijTablice(): # Funkcja wypełniająca tablice losowymi wartościami
    for i in range(50):
        tablica.append(random.randint(1, 100)) # Dodanie do tablicy losowej wartości z przedziału 1-100


# **************
# nazwa funkcji: szukaj
# argumenty: szukana - int
# typ zwracany: int
# informacja: funkcja sprawdza czy podana liczba znajduje się w tablicy
# autor: <numer zdającego>
# **************
def szukaj(szukana): # Funkcja szukająca podanej liczby w tablicy
    tablica.append(szukana)

    for index, wartosc in enumerate(tablica): # Pętla przechodząca przez wartości tabllicy
        print(wartosc)
        if wartosc == szukana:
            print(tablica)
            if index == len(tablica)-1:
                print("Nie znaleziono szukanej liczby w wylosowanej tablicy")
            else:
                print(f"Szukana liczbę znaleziono na indexie: {index}")
            return index

szukana = int(input("Podaj szukaną liczbę: ")) # Pobieranie od użytkownika wartości i konwertowanie jej na inta

wypelnijTablice()

szukaj(szukana)
```

## Aplikacja mobilna

*coming soon*