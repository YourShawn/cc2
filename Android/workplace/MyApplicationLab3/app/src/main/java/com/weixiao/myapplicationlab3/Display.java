package com.weixiao.myapplicationlab3;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class Display extends AppCompatActivity {
    EditText editEmail;
    CheckBox checkBox;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_display);
        TextView txtName = findViewById(R.id.txtName);
        Button btnReturn = findViewById(R.id.btnReturn);
        btnReturn.setOnClickListener(view->{
            setContentView(R.layout.activity_main);
        });
        Intent i = getIntent();

        String editEmail = i.getStringExtra("editEmail");
        Boolean showBoolean = i.getBooleanExtra("checkBox",false);
        if(showBoolean && editEmail != ""){
            txtName.setText(editEmail);
        }

    }

    public void goBack(View view){

    }
}