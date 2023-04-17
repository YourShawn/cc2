package com.weixiao.bookstore.shopping;

import android.os.Bundle;
import android.util.Log;
import android.view.View;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.weixiao.bookstore.BaseFragment;
import com.weixiao.bookstore.R;

public class ShoppingDetailsFragment extends BaseFragment {
    String TAG = "ShoppingDetailsFragment";

    @Override
    protected void initView() {
        Log.e("TAG", "initView: ShoppingDetailsFragment");
        refreshData();
    }

    @Override
    protected int getLayoutId() {
        return R.layout.book_detail_display;
    }

    @Override
    protected void refreshData() {
        Log.e(TAG, "refreshData: " );
    }

    @Override
    public void onResume() {
        Log.e(TAG, "onResume: " );
        super.onResume();
    }

    @Override
    public void onStart() {
        Log.e(TAG, "onStart: " );
        super.onStart();
    }

    @Override
    public void onCreate(@Nullable Bundle savedInstanceState) {
        Log.e(TAG, "onCreate: " );
        super.onCreate(savedInstanceState);
    }

    @Override
    public void onViewStateRestored(@Nullable Bundle savedInstanceState) {
        Log.e(TAG, "onViewStateRestored: " );
        super.onViewStateRestored(savedInstanceState);
    }

    @Override
    public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {
        Log.e(TAG, "onViewCreated: " );
        super.onViewCreated(view, savedInstanceState);
    }
}
