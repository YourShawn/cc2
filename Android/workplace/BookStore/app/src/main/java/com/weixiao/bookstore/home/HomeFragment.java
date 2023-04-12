package com.weixiao.bookstore.home;

import android.content.res.Configuration;

import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import androidx.viewpager2.widget.ViewPager2;

import com.weixiao.bookstore.BaseFragment;
import com.weixiao.bookstore.R;
import com.weixiao.bookstore.adapters.BookAdapter;
import com.weixiao.bookstore.model.Book;
import com.weixiao.bookstore.model.BookSingleton;

import java.util.ArrayList;
import java.util.List;

public class HomeFragment extends BaseFragment {
    ViewPager2 viewPager2;
    RecyclerView.Adapter adapter;
    List<HomeBanner> bannerList = new ArrayList<>();
    BookSingleton bookSingleton;
    List<Book> bookList = new ArrayList<>();
    BookAdapter bookAdapter;
    RecyclerView recyclerView;

    @Override
    protected void initView() {
        HomeBanner homeBanner1 = new HomeBanner("banner1");
        HomeBanner homeBanner2 = new HomeBanner("banner2");
        HomeBanner homeBanner3 = new HomeBanner("banner3");
        bannerList.add(homeBanner1);
        bannerList.add(homeBanner2);
        bannerList.add(homeBanner3);

        viewPager2 = find(R.id.vPager);
        adapter = new HomeBannerAdapter(bannerList);
        viewPager2.setAdapter(adapter);


        bookSingleton = BookSingleton.getBookSingleton();
        bookList = bookSingleton.getBookList();
        bookAdapter = new BookAdapter(bookList);

        recyclerView = find(R.id.home_recycle);
        int orientation = getResources().getConfiguration().orientation;
        int spanCount = orientation == Configuration.ORIENTATION_LANDSCAPE ? 4 : 2;
        recyclerView.setLayoutManager(new GridLayoutManager(getContext(),spanCount));
        recyclerView.setAdapter(bookAdapter);
    }

    @Override
    protected int getLayoutId() {
        return R.layout.activity_main3;
    }
}
