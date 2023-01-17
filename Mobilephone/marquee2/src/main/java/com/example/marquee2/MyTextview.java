package com.example.marquee2;

import android.content.Context;
import android.util.AttributeSet;
import androidx.appcompat.widget.AppCompatTextView;

import androidx.annotation.Nullable;

public class MyTextview extends AppCompatTextView {

    public MyTextview(Context context) {
        super(context);
    }

    public MyTextview(Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);
    }

    public MyTextview(Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
    }

    @Override
    public boolean isFocused() {
        return true;
    }
}
