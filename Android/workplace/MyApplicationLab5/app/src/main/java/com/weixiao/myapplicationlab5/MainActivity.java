package com.weixiao.myapplicationlab5;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.RecyclerView;
import androidx.viewpager2.widget.ViewPager2;

import android.os.Bundle;
import android.view.View;

import java.sql.Array;
import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity {
    ViewPager2 viewPager2;
    RecyclerView.Adapter adapter;
    List<Cellphone> cellphoneList = new ArrayList<>();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Cellphone cellphone1 = new Cellphone("iphone","Cheep",12.00);
        Cellphone cellphone2 = new Cellphone("iphone","Iphone",13.00);
        Cellphone cellphone3 = new Cellphone("iphone","RedMi",14.00);
        cellphoneList.add(cellphone1);
        cellphoneList.add(cellphone2);
        cellphoneList.add(cellphone3);

        viewPager2 = findViewById(R.id.vPager);
        adapter = new CellphoneAdapter(cellphoneList);
        viewPager2.setAdapter(adapter);

    }
}