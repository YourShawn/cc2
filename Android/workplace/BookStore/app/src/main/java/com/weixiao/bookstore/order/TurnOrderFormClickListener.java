package com.weixiao.bookstore.order;

import android.content.Context;
import android.content.Intent;
import android.view.View;

import com.weixiao.bookstore.BaseFragment;
import com.weixiao.bookstore.MainActivity;
import com.weixiao.bookstore.R;
import com.weixiao.bookstore.mine.OutputFragment;

public class TurnOrderFormClickListener extends BaseFragment implements View.OnClickListener {

    private Context context;

    public TurnOrderFormClickListener(Context context) {
        this.context = context;
    }

    @Override
    public void onClick(View view) {
        Intent intent = new Intent(context, MainActivity.class);
        context.startActivity(intent);
    }

    @Override
    protected void initView() {
        getParentFragmentManager()
                .beginTransaction()
                .replace(R.id.inputFrag, new OutputFragment())
                .commit();
    }

    @Override
    protected int getLayoutId() {
        return 0;
    }

    @Override
    protected void refreshData() {

    }
}
