package com.example.lab1;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;

/**
 * Quotation: All image from https://unsplash.com
 */
public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
//        setContentView(R.layout.checkout_form);
//        setContentView(R.layout.product_list);
    }

    public void loadCheckOutLayout(View view){
        setContentView(R.layout.checkout_form);
    }
    public void loadProductLayout(View view){
        setContentView(R.layout.product_list);
    }
    public void loadMainLayout(View view){
        setContentView(R.layout.activity_main);
    }
}