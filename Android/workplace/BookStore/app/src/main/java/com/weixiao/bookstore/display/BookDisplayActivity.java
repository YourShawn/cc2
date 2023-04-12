package com.weixiao.bookstore.display;

import android.content.Intent;
import android.os.Bundle;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import com.weixiao.bookstore.R;

public class BookDisplayActivity extends AppCompatActivity {

    ImageView imageView;
    TextView nameView;
    TextView authorView;
    TextView publisherView;
    TextView priceView;
    TextView publishYearView;
    @Override
    public void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.book_detail_display);

         imageView = findViewById(R.id.bookImage);
         nameView = findViewById(R.id.name);
         authorView = findViewById(R.id.author);
         publisherView = findViewById(R.id.publisher);
         priceView = findViewById(R.id.price);
         publishYearView = findViewById(R.id.publishYear);

        Intent intent = getIntent();
        String name = intent.getStringExtra("name");
        String author = intent.getStringExtra("author");
        String publisher = intent.getStringExtra("publisher");
        String price = intent.getStringExtra("price");
        String publishYear = intent.getStringExtra("publishYear");
        String bookImage = intent.getStringExtra("image");

        nameView.setText(name);
        authorView.setText(author);
        publisherView.setText(publisher);
        priceView.setText(price);
        publishYearView.setText(publishYear);

        System.out.println(getPackageName());
        int drawable = getResources().getIdentifier(bookImage, "drawable", getPackageName());
        imageView.setImageResource(drawable);

    }
}
