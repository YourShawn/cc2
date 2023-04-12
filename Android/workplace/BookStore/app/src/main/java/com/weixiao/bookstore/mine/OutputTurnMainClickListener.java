package com.weixiao.bookstore.mine;

import android.content.Context;
import android.content.Intent;
import android.view.View;

import com.weixiao.bookstore.MainActivity;

public class OutputTurnMainClickListener implements View.OnClickListener {

    private Context context;

    public OutputTurnMainClickListener(Context context) {
        this.context = context;
    }

    @Override
    public void onClick(View view) {
        Intent intent = new Intent(context, MainActivity.class);
        context.startActivity(intent);
    }
}
