package com.example.advancedrecyclerview;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;
import android.view.View;

import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity {

    RecyclerView rView;
    RecyclerView.Adapter adapter;

    List<Contact> myContactList = new ArrayList<>();
    ContactSingleton cSingleton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        cSingleton = ContactSingleton.getPersonSingleton();
        myContactList = cSingleton.getContactList();



        rView = findViewById(R.id.rView);
        adapter = new ContactAdapter(myContactList);
        rView.setLayoutManager(new GridLayoutManager(this, 2));
        rView.setAdapter(adapter);
    }

}