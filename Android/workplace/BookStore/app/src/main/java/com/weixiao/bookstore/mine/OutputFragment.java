package com.weixiao.bookstore.mine;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import com.weixiao.bookstore.BaseFragment;
import com.weixiao.bookstore.R;

public class OutputFragment extends BaseFragment implements View.OnClickListener {

    TextView name;
    TextView email;
    TextView address;
    TextView phone;
    ImageView image;
    TextView subscription;

    @Override
    protected void initView() {
        Log.e("Test", "initView: OutputFragment");
         name = contentView.findViewById(R.id.text_name_out);
         email = contentView.findViewById(R.id.text_email_out);
         address = contentView.findViewById(R.id.text_address_out);
         phone = contentView.findViewById(R.id.text_phone_out);
         image = contentView.findViewById(R.id.user_image_out);
         subscription = contentView.findViewById(R.id.subscription_out);

        if (getArguments() != null) {
            setValue();
        }

        getParentFragmentManager().setFragmentResultListener("request", this,
                (requestKey, result) -> {
                    setValue(result);
                });
        Button confirmButton = find(R.id.button);
        OutputTurnMainClickListener outputTurnMainClickListener = new OutputTurnMainClickListener(getContext());
        confirmButton.setOnClickListener(outputTurnMainClickListener);
    }

    @Override
    protected int getLayoutId() {
        return R.layout.book_mine_out;
    }

    private void setValue(){
        name.setText(getArguments().getString("name"));
        email.setText(getArguments().getString("email"));
        address.setText(getArguments().getString("address"));
        phone.setText(getArguments().getString("phone"));
        Boolean clickable = getArguments().getBoolean("clickable");
        subscription.setText(clickable?"Yes":"No");
    }
    private void setValue(Bundle result){
        name.setText(result.getString("name"));
        email.setText(result.getString("email"));
        address.setText(result.getString("address"));
        phone.setText(result.getString("phone"));
        Boolean clickable = result.getBoolean("clickable");
        subscription.setText(clickable?"Yes":"No");
    }


    @Override
    public void onClick(View view) {

    }
}
