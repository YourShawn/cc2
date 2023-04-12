package com.weixiao.bookstore.shopping;

import android.content.res.Configuration;
import android.util.Log;

import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.weixiao.bookstore.BaseFragment;
import com.weixiao.bookstore.R;
import com.weixiao.bookstore.adapters.BookAdapter;
import com.weixiao.bookstore.model.Book;
import com.weixiao.bookstore.model.BookSingleton;

import java.util.ArrayList;
import java.util.List;

public class ShoppingFragment extends BaseFragment {
    BookSingleton bookSingleton;
    List<Book> bookList = new ArrayList<>();
    BookAdapter bookAdapter;
    RecyclerView recyclerView;

    @Override
    protected void initView() {
        Log.e("TAG", "initView: ShoppingFragment");
//        setContentView(R.layout.book_shopping);

        bookSingleton = BookSingleton.getBookSingleton();
        bookList = bookSingleton.getBookList();
        bookAdapter = new BookAdapter(bookList);

        recyclerView = find(R.id.book_shopping);
        int orientation = getResources().getConfiguration().orientation;
        int spanCount = orientation == Configuration.ORIENTATION_LANDSCAPE ? 4 : 2;
        recyclerView.setLayoutManager(new GridLayoutManager(getContext(), spanCount));
        recyclerView.setAdapter(bookAdapter);

    }

    @Override
    protected int getLayoutId() {
        return R.layout.book_shopping;
    }
}
