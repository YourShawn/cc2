package com.weixiao.bookstore.mine;

import static android.app.Activity.RESULT_OK;

import android.content.Intent;
import android.graphics.Bitmap;
import android.os.Bundle;
import android.widget.ImageView;

import androidx.annotation.Nullable;

import com.weixiao.bookstore.BaseFragment;
import com.weixiao.bookstore.R;

public class MineFragment extends BaseFragment {
    ImageView imgCamera;


    @Override
    protected void initView() {
    }

    @Override
    protected int getLayoutId() {
        return R.layout.book_mine;
    }



    public void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {

        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == 1 && resultCode == RESULT_OK) {
            Bundle extras = data.getExtras();
            Bitmap imageBitmap = (Bitmap) extras.get("data");
            imgCamera.setImageBitmap(imageBitmap);
        }
    }
}
