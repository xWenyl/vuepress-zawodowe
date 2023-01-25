# 01 | Sesja letnia 2021

::: details Arkusz
![1](/inf04/2021-lato-wersja-1/1.png)
![2](/inf04/2021-lato-wersja-1/2.png))
![3](/inf04/2021-lato-wersja-1/3.png)
![4](/inf04/2021-lato-wersja-1/4.png)
:::

## Aplikacja konsolowa


```py
class Sortowanie:

    def wczytaj_tablice(self):
        """Pyta użytkownika o 10 liczb całkowitych i zapisuje je do tablicy"""
        print("Wprowadz 10 liczb calkowitych:")
        self.tablica = [int(input()) for _ in range(10)]

    def szukaj_maksimum(self, start):
        """Znajduje indeks maksymalnej liczby w tablicy od pozycji 'start' do końca tablicy"""
        max_val = self.tablica[start]
        max_index = start
        for i in range(start + 1, len(self.tablica)):
            if self.tablica[i] > max_val:
                max_val = self.tablica[i]
                max_index = i
        return max_index

    def sortuj(self):
        """Sortuje tablicę metodą przez wybieranie. Dla każdego indeksu 'i' od 0 do 9, znajduje maksymalną liczbę w reszcie tablicy i zamienia ją z liczbą na pozycji 'i'"""
        for i in range(len(self.tablica) - 1):
            max_index = self.szukaj_maksimum(i)
            self.tablica[i], self.tablica[max_index] = self.tablica[max_index], self.tablica[i]

# tworzenie obiektu klasy Sortowanie
sort = Sortowanie()
# wczytanie tablicy od uzytkownika
sort.wczytaj_tablice()
# sortowanie tablicy
sort.sortuj()
# wyswietlenie posortowanej tablicy
print("Posortowana tablica: ", sort.tablica)
```

## Aplikacja mobilna

<CodeGroup>
  <CodeGroupItem title="MainActivity.kt">

```kotlin
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