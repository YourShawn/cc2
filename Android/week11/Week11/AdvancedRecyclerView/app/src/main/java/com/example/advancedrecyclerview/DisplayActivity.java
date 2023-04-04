package com.example.advancedrecyclerview;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.widget.ImageView;
import android.widget.TextView;

public class DisplayActivity extends AppCompatActivity {


    TextView txtClickName;
    TextView txtClickEmail;
    ImageView imgContactFull;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_display);


        txtClickEmail = findViewById(R.id.txtEmail);
        txtClickName = findViewById(R.id.txtFullName);
        imgContactFull = findViewById(R.id.imgLarger);

        Intent i = getIntent();
        String name = i.getStringExtra("clickedName");
        String email = i.getStringExtra("clickedEmail");
        String photo = i.getStringExtra("clickedPic");

        txtClickName.setText(name);
        txtClickEmail.setText(email);




        int resid = getResources().getIdentifier(photo, "drawable", getPackageName());
        imgContactFull.setImageResource(resid);

    }
}