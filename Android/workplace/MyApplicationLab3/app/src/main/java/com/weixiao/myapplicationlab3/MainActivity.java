package com.weixiao.myapplicationlab3;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {
    EditText editName;
    EditText editEmail;
    CheckBox checkBox;
    Button button;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        editName = findViewById(R.id.editName);
        editEmail = findViewById(R.id.editEmail);
        checkBox = findViewById(R.id.checkBox);
        button = findViewById(R.id.button);
        button.setOnClickListener(view -> {

            Account account = new Account();
            account.setName(editName.getText().toString());
            account.setEmail(editEmail.getText().toString());
            account.setSubscribed(checkBox.isClickable());

            Intent intent = new Intent(this, Display.class);
            intent.putExtra("editName",account.getName());
            intent.putExtra("editEmail",account.getEmail());
            intent.putExtra("checkBox",account.isSubscribed());
            startActivity(intent);
        });
    }

}