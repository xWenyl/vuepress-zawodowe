# 01 | Sesja zimowa 2023

::: details Arkusz

:::

## Aplikacja konsolowa

```py
def NWD(a, b):
    while a != b:
        if a > b:
            a -= b
        else:
            b -= a
    return a
```

## Aplikacja desktopowa

*coming soon*

## Testy

Zadanie 1

```py
a = 0
b = 0

while a<=0:
    a = int(input("Podaj dodatnią liczbę całkowitą a: "))
while b<=0:
    b = int(input("Podaj dodatnią liczbę całkowitą a: "))

print(f"Największy wspólny dzielnik liczb {a} i {b} to {NWD(a, b)}")
```