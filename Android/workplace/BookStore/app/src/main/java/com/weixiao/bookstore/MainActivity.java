package com.weixiao.bookstore;

import android.os.Bundle;
import android.util.Log;
import android.view.MenuItem;
import android.view.View;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentTransaction;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.google.android.material.bottomnavigation.BottomNavigationView;
import com.weixiao.bookstore.activities.BaseActivity;
import com.weixiao.bookstore.adapters.BookAdapter;
import com.weixiao.bookstore.home.HomeFragment;
import com.weixiao.bookstore.mine.MineFragment;
import com.weixiao.bookstore.mine.OutputFragment;
import com.weixiao.bookstore.model.Book;
import com.weixiao.bookstore.model.BookSingleton;
import com.weixiao.bookstore.shopping.ShoppingFragment;

import java.util.ArrayList;
import java.util.List;

public class MainActivity extends BaseActivity implements BottomNavigationView.OnNavigationItemSelectedListener {
    BookSingleton bookSingleton;
    List<Book> bookList = new ArrayList<>();
    BookAdapter bookAdapter;
    RecyclerView recyclerView;

    List<Fragment> fragmentList = new ArrayList<>();
    protected int lastFragmentIndex = 0;


    @Override
    protected int getLayoutId() {
        return R.layout.activity_main2;
    }

    @Override
    protected void initViews() {
        BottomNavigationView bottomNavigationView = findViewById(R.id.main_bottom_nav);
        bottomNavigationView.setOnNavigationItemSelectedListener(this);

        fragmentList.add(new HomeFragment());
        fragmentList.add(new ShoppingFragment());
        fragmentList.add(new MineFragment());

        getSupportFragmentManager().beginTransaction()
                .add(R.id.main_frame,fragmentList.get(0))
                .commit();
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
//        setContentView(R.layout.activity_main2);
//        setContentView(R.layout.book_shopping);

    }



    @Override
    public boolean onNavigationItemSelected(@NonNull MenuItem item) {
        Log.e("test", "onNavigationItemSelected: "+item.getItemId());
        switch (item.getItemId()){
            case R.id.bottom_home:
                switchFragment(0);
                break;
            case R.id.bottom_shopping:
                Log.e("test", "onNavigationItemSelected:bottom_shopping "+item.getItemId());
                switchFragment(1);
                break;
            case R.id.bottom_mine:
                switchFragment(2);
                break;
        }
        return false;
    }

    private void switchFragment(int to){
        if(lastFragmentIndex == to){
            return;
        }
        FragmentTransaction fragmentTransaction = getSupportFragmentManager().beginTransaction();
        if(!fragmentList.get(to).isAdded()){
            fragmentTransaction.add(R.id.main_frame,fragmentList.get(to));
        }else{
            fragmentTransaction.show(fragmentList.get(to));
        }
        fragmentTransaction.hide(fragmentList.get(lastFragmentIndex))
                .commitAllowingStateLoss();
        lastFragmentIndex = to;
    }

    @Override
    public void onPointerCaptureChanged(boolean hasCapture) {
        super.onPointerCaptureChanged(hasCapture);
    }



    public void loadShopping(View view){
        setContentView(R.layout.book_shopping);

        bookSingleton = BookSingleton.getBookSingleton();
        bookList = bookSingleton.getBookList();
        bookAdapter = new BookAdapter(bookList);

        recyclerView = findViewById(R.id.book_shopping);
        recyclerView.setLayoutManager(new GridLayoutManager(this,2));
        recyclerView.setAdapter(bookAdapter);


    }


    public void loadHomeFragment(View view){
        FragmentTransaction fragmentTransaction = getSupportFragmentManager().beginTransaction();
        fragmentTransaction.hide(new OutputFragment());
        fragmentTransaction.replace(R.id.main_frame,new HomeFragment())
                .commit();
//        FragmentManager fragmentManager = getFragmentManager();
//        android.app.FragmentTransaction transaction = fragmentManager.beginTransaction();
//        android.app.FragmentTransaction ft = getFragmentManager().beginTransaction();
//        ft.setReorderingAllowed(true);
////        MainActivity bdf = new MainActivity();
//        ft.replace(R.id.inputFrag, MineFragment.class,null);
//        ft.setTransition(android.app.FragmentTransaction.TRANSIT_FRAGMENT_OPEN);
//        ft.addToBackStack(null);
//        ft.commit();

//        FragmentActivity activity = getActivity();
//        new Intent(activity,)
    }

}