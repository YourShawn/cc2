package com.weixiao.myapplicationlab4;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;
import android.view.View;

import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity {

    RecyclerView recyclerView;
    RecyclerView.Adapter mAdapter;
    RecyclerView.LayoutManager layoutManager;
    List<String> myDataset = new ArrayList<String>();
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        recyclerView = findViewById(R.id.rView);
        layoutManager = new LinearLayoutManager(this);
        recyclerView.setLayoutManager(layoutManager);
        myDataset.add("Bill Gates");
        myDataset.add("Jeremy");
        myDataset.add("Om");
        myDataset.add("Shawn");
        myDataset.add("Wei Xiao");
        mAdapter = new MyAdapter(myDataset);
        recyclerView.setAdapter(mAdapter);
        System.out.println("This is lab 4 of Wei Xiao's");

    }
}