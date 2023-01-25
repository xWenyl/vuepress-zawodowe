# 02 | Sesja zimowa 2023

::: details Arkusz

:::

## Aplikacja konsolowa

*coming soon*

## Aplikacja mobilna


W zadaniu należy utworzyć nowy layout o nazwie `list_item.xml`

![Tworzenie nowego layoutu](/inf04/2023-zima-wersja-2/tworzenielayoutu.png)


<CodeGroup>
  <CodeGroupItem title="MainActivity.kt">

```kotlin
package com.example.sesjazima2022mobilna

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.ArrayAdapter
import android.widget.EditText
import android.widget.ListView

class MainActivity : AppCompatActivity() {

    val list = arrayListOf<String>("Zakupy: chleb, masło, ser",
        "Do zrobienia: obiad, umyc podłogi",
        "weekend: kino, spacer z psem")
    lateinit var adapter: ArrayAdapter<String>
    lateinit var listView: ListView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        listView = findViewById(R.id.listviewTODO)
        adapter = ArrayAdapter(this, R.layout.list_item, list)
        listView.adapter = adapter
    }

    fun dodajTODO(view: View) {
        var userinput = findViewById<EditText>(R.id.userinput).text.toString()
        list.add(userinput)
        adapter.notifyDataSetChanged()
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
    android:orientation="vertical"
    tools:context=".MainActivity">

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content">

        <EditText
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_weight="1"
            android:id="@+id/userinput"/>

        <Button
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Dodaj"
            android:onClick="dodajTODO"
            android:backgroundTint="@color/crimson"/>
    </LinearLayout>

    <ListView
        android:id="@+id/listviewTODO"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:divider="@color/crimson"
        android:dividerHeight="1dp"/>
</LinearLayout>
```

  </CodeGroupItem>
  
  <CodeGroupItem title="colors.xml">

  ```xml
    <!--Należy dopisać do pliku-->
    <color name="crimson">#DC143C</color>
  ```

  </CodeGroupItem>
</CodeGroup>