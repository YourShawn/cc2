package com.weixiao.bookstore.mine;

import static android.app.Activity.RESULT_OK;

import android.Manifest;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.content.res.Configuration;
import android.graphics.Bitmap;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.ImageView;

import androidx.annotation.Nullable;
import androidx.core.app.ActivityCompat;

import com.weixiao.bookstore.BaseFragment;
import com.weixiao.bookstore.R;

public class InputFragment extends BaseFragment {
    ImageView imgCamera;

    @Override
    protected void initView() {
        if (ActivityCompat.checkSelfPermission(getContext(), Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED){
            ActivityCompat.requestPermissions(getActivity(), new String[]{Manifest.permission.CAMERA}, 200);
        }
        imgCamera = find(R.id.user_image);
        imgCamera.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent i = new Intent(android.provider.MediaStore.ACTION_IMAGE_CAPTURE);
                startActivityForResult(i, 1);
            }
        });

        EditText nameText = contentView.findViewById(R.id.text_name);
        EditText emailText = contentView.findViewById(R.id.text_email);
        EditText addressText = contentView.findViewById(R.id.text_address);
        EditText phoneText = contentView.findViewById(R.id.text_phone);
        Button btnInput = contentView.findViewById(R.id.input_button);
        CheckBox checkBox = contentView.findViewById(R.id.checkBox);


        btnInput.setOnClickListener(view -> {
            Log.e("Test", "initView: MineFragment.InputFragment");
            Bundle result = new Bundle();
            String name = nameText.getText().toString();
            String email = emailText.getText().toString();
            String address = addressText.getText().toString();
            String phone = phoneText.getText().toString();
            boolean clickable = checkBox.isClickable();
            result.putString("name", name);
            result.putString("email", email);
            result.putString("address", address);
            result.putString("phone", phone);
            result.putBoolean("clickable",clickable);

            int orientation = getResources().getConfiguration().orientation;
            if (orientation == Configuration.ORIENTATION_LANDSCAPE) {
                getParentFragmentManager()
                        .setFragmentResult("request", result);
            }
            else {
                getParentFragmentManager()
                        .beginTransaction()
                        .replace(R.id.inputFrag, OutputFragment.class, result)
                        .commit();
            }
        });


    }

    @Override
    protected int getLayoutId() {
        return R.layout.book_mine_in;
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
