package com.weixiao.bookstore.order;

import android.view.View;
import android.widget.Button;

import com.weixiao.bookstore.BaseFragment;
import com.weixiao.bookstore.R;

public class OrderFormFragment extends BaseFragment {

    @Override
    protected void initView() {
        Button orderButton = find(R.id.order_form_input_button2);
        orderButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

            }
        });
    }

    @Override
    protected int getLayoutId() {
        return R.layout.book_order_form;
    }

    @Override
    protected void refreshData() {

    }
}
