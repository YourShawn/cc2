package com.weixiao.bookstore;

import android.content.Context;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.IdRes;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

public abstract class BaseFragment extends Fragment {
    protected View contentView;
    protected abstract void initView();
    protected abstract int getLayoutId();
    protected abstract void refreshData();

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        contentView = inflater.inflate(getLayoutId(), container, false);
        initView();
        return contentView;
    }

    protected <T extends View> T find(@IdRes int id){
        return contentView.findViewById(id);
    }
}
