package com.weixiao.bookstore.home;

import android.content.res.Configuration;
import android.util.Log;

import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import androidx.viewpager2.widget.ViewPager2;

import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;
import com.weixiao.bookstore.BaseFragment;
import com.weixiao.bookstore.R;
import com.weixiao.bookstore.adapters.BookAdapter;
import com.weixiao.bookstore.core.Constants;
import com.weixiao.bookstore.model.Book;
import com.weixiao.bookstore.model.BookSingleton;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

public class HomeFragment extends BaseFragment {
    String TAG = "HomeFragment";
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
        refreshData();
    }

    @Override
    protected int getLayoutId() {
        return R.layout.activity_main3;
    }

    @Override
    public void refreshData(){
        Log.e(TAG, "refreshData: " );
        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest(Constants.DATA_URL, null, new Response.Listener<JSONObject>() {
            @Override
            public void onResponse(JSONObject response) {
                Log.i(TAG, "onResponse: "+response.toString());
                try {
                    JSONArray data = response.getJSONArray("data");
                    Log.e(TAG, "onResponse *******: "+data );
//                    List<Book> bookList1 = (List<Book>) response.getJSONArray("data");
                    List<Book>list=new ArrayList<>();
                    for (int i = 0;i < data.length();i++){
                        JSONObject jsonObject = data.getJSONObject(i);
                        Book book = new Book(jsonObject.getString("name"),jsonObject.getString("price"),jsonObject.getString("publisher"),jsonObject.getString("image"),jsonObject.getString("author"),jsonObject.getString("publishYear"));
                        list.add(book);
                    }
                    Log.e(TAG, "onResponse ******* list: "+list.toString() );

                    bookAdapter = new BookAdapter(list);
                    recyclerView = find(R.id.home_recycle);
                    int orientation = getResources().getConfiguration().orientation;
                    int spanCount = orientation == Configuration.ORIENTATION_LANDSCAPE ? 4 : 2;
                    recyclerView.setLayoutManager(new GridLayoutManager(getContext(),spanCount));
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
        RequestQueue requestQueue = Volley.newRequestQueue(getContext());
        requestQueue.add(jsonObjectRequest);

    }
}
