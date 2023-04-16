package com.weixiao.bookstore;

import android.content.Context;
import android.os.Bundle;
import android.util.Log;
import android.view.MenuItem;
import android.view.View;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentTransaction;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;
import com.google.android.material.bottomnavigation.BottomNavigationView;
import com.weixiao.bookstore.activities.BaseActivity;
import com.weixiao.bookstore.adapters.BookAdapter;
import com.weixiao.bookstore.home.HomeFragment;
import com.weixiao.bookstore.mine.MineFragment;
import com.weixiao.bookstore.mine.OutputFragment;
import com.weixiao.bookstore.model.Book;
import com.weixiao.bookstore.model.BookSingleton;
import com.weixiao.bookstore.mysql.MysqlConnection;
import com.weixiao.bookstore.shopping.ShoppingFragment;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

public class MainActivity extends BaseActivity implements BottomNavigationView.OnNavigationItemSelectedListener {
    String TAG = "Api test";
    BookSingleton bookSingleton;
    Context context ;
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
        String url = "http://10.0.2.2:4000/testProducts";
        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest(url, null, new Response.Listener<JSONObject>() {
            @Override
            public void onResponse(JSONObject response) {
                Log.i(TAG, "onResponse: "+response.toString());
            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                Log.e(TAG, "onErrorResponse: "+error.toString());
            }
        });
        RequestQueue requestQueue = Volley.newRequestQueue(this);
        requestQueue.add(jsonObjectRequest);

//        MysqlConnection mysqlConnection = new MysqlConnection();
//        int userSize = mysqlConnection.getUserSize();
//        Log.e(TAG, "initViews: "+userSize);
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
        BaseFragment fragmentById = (BaseFragment)getSupportFragmentManager().findFragmentById(R.id.main_frame);
        fragmentById.refreshData();
    }

    @Override
    public void onPointerCaptureChanged(boolean hasCapture) {
        super.onPointerCaptureChanged(hasCapture);
    }



    public void loadShopping(View view){
        context = this;
//        setContentView(R.layout.book_shopping);
//        BookSingleton bookSingleton = new BookSingleton(this);
//        bookSingleton = BookSingleton.getBookSingleton(this);
//        bookList = bookSingleton.getBookList();
//        bookAdapter = new BookAdapter(bookList);
//
//        recyclerView = findViewById(R.id.book_shopping);
//        recyclerView.setLayoutManager(new GridLayoutManager(this,2));
//        recyclerView.setAdapter(bookAdapter);


        String url = "http://10.0.2.2:4000/testProducts";
        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest(url, null, new Response.Listener<JSONObject>() {
            @Override
            public void onResponse(JSONObject response) {
                Log.i(TAG, "onResponse: "+response.toString());
                try {
                    setContentView(R.layout.book_shopping);
                    List<Book> bookList1 = (List<Book>) response.getJSONArray("data");
                    bookAdapter = new BookAdapter(bookList1);

                    recyclerView = findViewById(R.id.book_shopping);
                    recyclerView.setLayoutManager(new GridLayoutManager(context,2));
                    recyclerView.setAdapter(bookAdapter);
                } catch (JSONException e) {
                    e.printStackTrace();
                }
            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                Log.e(TAG, "onErrorResponse: "+error);
            }
        });
        RequestQueue requestQueue = Volley.newRequestQueue(context);
        requestQueue.add(jsonObjectRequest);


    }

}