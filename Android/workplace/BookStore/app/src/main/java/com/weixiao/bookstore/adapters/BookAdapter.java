package com.weixiao.bookstore.adapters;

import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.weixiao.bookstore.R;
import com.weixiao.bookstore.display.BookDisplayActivity;
import com.weixiao.bookstore.model.Book;

import java.util.List;

public class BookAdapter extends RecyclerView.Adapter<BookAdapter.BookHolder> {

    List<Book> booksList;

    public BookAdapter(List<Book> booksList) {
        this.booksList = booksList;
    }

    @NonNull
    @Override
    public BookHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        LayoutInflater layoutInflater = LayoutInflater.from(parent.getContext());
        return new BookHolder(layoutInflater,parent);
    }

    @Override
    public void onBindViewHolder(@NonNull BookHolder holder, int position) {
        Book book = booksList.get(position);
        Context context = holder.itemView.getContext();
        int drawable = context.getResources().getIdentifier(book.getImage(), "drawable", context.getPackageName());
        holder.imageView.setImageResource(drawable);
        holder.nameView.setText(book.getName());
        holder.authorView.setText(book.getAuthor());
        holder.priceView.setText(book.getPrice());
//        holder.publisherView.setText(book.getPublisher());
//        holder.publishYearView.setText(book.getPublishYear());
    }

    @Override
    public int getItemCount() {
        return booksList.size();
    }

    public class BookHolder extends RecyclerView.ViewHolder implements View.OnClickListener {
        protected ImageView imageView;
        protected TextView nameView;
        protected TextView priceView;
        protected TextView publisherView;
        protected TextView authorView;
        protected TextView publishYearView;


        public BookHolder(LayoutInflater inflater, ViewGroup parent) {
            super(inflater.inflate(R.layout.row_book_shopping,parent,false));
            imageView = itemView.findViewById(R.id.bookImage);
            nameView = itemView.findViewById(R.id.name);
            priceView = itemView.findViewById(R.id.price);
            publisherView = itemView.findViewById(R.id.publisher);
            authorView = itemView.findViewById(R.id.author);
            publishYearView = itemView.findViewById(R.id.publishYear);

            itemView.setOnClickListener(this);
        }

        @Override
        public void onClick(View view) {
            Context context = view.getContext();
            Book book = booksList.get(getAdapterPosition());
            System.out.println("************:"+ booksList.size());
            Intent intent = new Intent(context, BookDisplayActivity.class);
            intent.putExtra("name",book.getName());
            intent.putExtra("author",book.getAuthor());
            intent.putExtra("price",book.getPrice());
            intent.putExtra("publisher",book.getPublisher());
            intent.putExtra("publishYear",book.getPublishYear());
            intent.putExtra("image",book.getImage());

            context.startActivity(intent);

        }
    }
}
