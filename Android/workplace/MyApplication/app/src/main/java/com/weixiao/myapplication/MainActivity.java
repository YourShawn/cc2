package com.weixiao.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Log.i("Log","Lab2: This is Wei Xiao Lab2");
        checkOddly();
        Double max = max(1.1, 2.2);
        Log.i("MAX", "The max number is: " + max);

    }


    public static void checkOddly(){
        Integer myNumber = 5;
        Integer oddSign = myNumber % 2;
        if(oddSign==1)
            Log.i("check odd", myNumber+ " is odd. ");
        else
            Log.i("check odd", myNumber+ " is not odd. ");


        for(int numberRows = 10; numberRows >0; numberRows--){
            String printStr = "assignment:";
            for(int i = 0; i < numberRows; i++){
                printStr +="*";
            }
            Log.i("Print: ", printStr);
        }
    }

    public Double max(Double value1, Double value2){
        if(value1 >= value2)
            return value1;
        return value2;
    }

}