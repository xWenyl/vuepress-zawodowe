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

<CodeGroup>
  <CodeGroupItem title="MainActivity.kt">

```kt
package com.example.a01sl2022 // W miejsce a01sl2022 wstaw nazwę Twojego projektu

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.EditText
import android.widget.TextView

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }

    fun zatwierdz(view: View) {
        // Definicja zmiennych i pobranie potrzebnych wartości
        val email = findViewById<EditText>(R.id.emailinput).text.toString()
        val haslo = findViewById<EditText>(R.id.hasloinput).text.toString()
        val powtorzhaslo = findViewById<EditText>(R.id.powtorzhasloinput).text.toString()
        var zadanieoutput = findViewById<TextView>(R.id.zadanieoutput)

        if (!email.contains("@")) // Sprawdzamy czy email nie zawiera "@"
        { 
            zadanieoutput.text = "Nieprawidlowy adres e-mail"
        } 
        else if (haslo != powtorzhaslo) // Sprawdzamy czy hasła nie są równe
        {
            zadanieoutput.text = "Hasła się różnią"
        } 
        else 
        {
            zadanieoutput.text = "Witaj ${email}" 
        }
    }
}
```

  </CodeGroupItem>

  <CodeGroupItem title="activity_main.xml">

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity"
    android:orientation="vertical">

    <TextView
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="Rejestruj konto"
        android:textSize="32dp"
        android:background="#008080"
        android:textColor="@color/white"/>
    <TextView
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="Podaj e-mail:"
        android:textSize="20dp"
        />
    <EditText
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:hint="email"
        android:id="@+id/emailinput"/>
    <TextView
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="Podaj hasło:"
        android:textSize="20dp"
        />
    <EditText
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:inputType="textPassword"
        android:id="@+id/hasloinput"/>
    <TextView
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="Powtórz hasło:"
        android:textSize="20dp"
        />
    <EditText
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:inputType="textPassword"
        android:id="@+id/powtorzhasloinput"/>
    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Zatwierdź"
        android:layout_gravity="center"
        android:onClick="zatwierdz"
        />
    <TextView
        android:id="@+id/zadanieoutput"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="Autor: pesel"
        android:textSize="20dp"
        android:textAlignment="center"/>
</LinearLayout>
```

  </CodeGroupItem>
</CodeGroup>