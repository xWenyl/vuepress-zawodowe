# 02 | Sesja letnia 2022

::: details Arkusz
![1](/inf04/2022-lato-wersja-2/1.png)
![2](/inf04/2022-lato-wersja-2/2.png))
![3](/inf04/2022-lato-wersja-2/3.png)
![4](/inf04/2022-lato-wersja-2/4.png)
![4](/inf04/2022-lato-wersja-2/5.png)
:::

## Aplikacja konsolowa

```py
class Osoba:
    licznik = 0 # pole statyczne

    def __init__(self, id = 0, imie = ""): # Konstruktor z dwoma parametrami
        self.__id = id
        self.__imie = imie
        Osoba.licznik += 1 # inkrementacja licznika w momencie wywołania konstruktora

    # Metoda kopiująca dane z jednego obiektu do drugiego
    def kopiuj(self, obiekt):
        self.__id = obiekt.__id
        self.__imie = obiekt.__imie

    # Metoda wypisująca
    def wypisz(self, argument):
        if self.__imie == "":
            print("Brak danych")
        else:
            print(f"Cześć {argument}, mam na imie {self.__imie}")
```

## Aplikacja webowa

Jeśli chcesz wiedzieć jak utworzyć aplikację React zajrzyj [tutaj](/inf04/rodzaje-zadan/aplikacjewebowe.md/#utworzenie-aplikacji).

<CodeGroup>
  <CodeGroupItem title="App.js">

```jsx
import "./App.css";
import { useState } from "react"; // Importujemy useState

function App() {
  const kursy = [
    "Programowanie w C#",
    "Angular dla początkujących",
    "Kurs Django",
  ]; // Tablica zawierająca 3 kursy

  const [imie, setImie] = useState(""); // State do inputu z imieniem
  const [kurs, setKurs] = useState(); // State do inputu z numerem kursu

  function handleSubmit(e) {
    // Funkcja wywołana po wysłaniu formularza
    e.preventDefault(); // Blokujemy odświeżenie strony po przesłaniu formularza

    console.log(imie);
    if (kursy[kurs - 1]) {
      console.log(kursy[kurs - 1]);
    } else {
      console.log("Nieprawidłowy numer kursu");
    }
  }

  return (
    <div className="App">
      <h2>Liczba kursów {kursy.length}</h2> {/* Wypisujemy listę kursów */}
      <ol>
        {kursy.map((kurs) => (
          <li key={kurs}>{kurs}</li> // Wypisanie elementów tablicy "kursy" za pomocą metody .map()
        ))}
      </ol>
      <form onSubmit={handleSubmit}>
        {" "}
        {/* Formularz, który po przesłaniu wywołuje funkcję handleSubmit() */}
        <div className="form-group">
          <label htmlFor="imieInput">Imię i nazwisko:</label>
          <input
            type="text"
            className="form-control"
            id="imieInput"
            value={imie} // Przypisanie state "imie" do wartosci inputu
            onChange={(e) => setImie(e.target.value)} // Zmiana wartości state "imie"
          />
        </div>
        <div className="form-group">
          <label htmlFor="kursInput">Numer kursu:</label>
          <input
            type="text"
            className="form-control"
            id="kursInput"
            value={kurs} // Przypisanie state "kurs" do wartości inputu
            onChange={(e) => setKurs(e.target.value)} // Zmiana wartości state "kurs"
          />
        </div>
        <button className="btn btn-primary">Zapisz do kursu</button>
      </form>
    </div>
  );
}

export default App;
```

  </CodeGroupItem>

  <CodeGroupItem title="App.css">

```css
.App {
  width: 60%; /* Ustawienie szerokości aplikacji na 60% body*/
  margin: 0 auto; /* Wyśrodkowanie aplikacji */
}
```

  </CodeGroupItem>
</CodeGroup>

::: warning Uwaga
Podany arkusz wykorzystuje bibliotekę Bootstrap, aby jej używać należy dodać linijkę `import "bootstrap/dist/css/bootstrap.css";` na górze pliku `index.js`. (Biblioteka będzie zainstalowana na egzaminie, na swoim komputerze musisz ją pobrać za pomocą komendy `npm i bootstrap`)
:::

## Testy

Zadanie 1

```py
print(f"Liczba zarejestrowanych osób to: {Osoba.licznik}")

osoba1 = Osoba()
osoba2 = Osoba(1, "Dawid")
osoba3 = Osoba()
osoba3.kopiuj(osoba2)

osoba1.wypisz("Jan")
osoba2.wypisz("Jan")
osoba3.wypisz("Jan")

print(f"Liczba zarejestrowanych osób to: {Osoba.licznik}")
```
