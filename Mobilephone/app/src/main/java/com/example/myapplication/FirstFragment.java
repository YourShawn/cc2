package com.example.myapplication;

import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;
import androidx.navigation.fragment.NavHostFragment;

import com.example.myapplication.databinding.FragmentFirstBinding;

public class FirstFragment extends Fragment {

    private FragmentFirstBinding binding;

    private TextView showCountTextView;
    @Override
    public View onCreateView(
            LayoutInflater inflater, ViewGroup container,
            Bundle savedInstanceState
    ) {
        View inflate = inflater.inflate(R.layout.fragment_first, container, false);
        showCountTextView=inflate.findViewById(R.id.textview_first);

        binding = FragmentFirstBinding.inflate(inflater, container, false);
//        return binding.getRoot();
        return inflate;

    }

    public void onViewCreated(@NonNull View view, Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);

        //Bind click action on the random fragment,but now I don.t know what happen if click it.
//        view.findViewById(R.id.random_button).setOnClickListener(
//                new View.OnClickListener() {
//                    @Override
//                    public void onClick(View view) {
//                        NavHostFragment.findNavController(FirstFragment.this)
//                                .navigate(R.id.action_FirstFragment_to_SecondFragment);
//                    }
//                }
//        );
        //Now the button named toast_button is band a click action.
        view.findViewById(R.id.toast_button).setOnClickListener(new View.OnClickListener(){

            @Override
            public void onClick(View view) {
                Log.d("TAG", "onClick: ");
                Toast toast = Toast.makeText(getActivity(), "show_content", Toast.LENGTH_SHORT);
                toast.show();
            }
        });

        view.findViewById(R.id.random_button).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
               Integer currentCount = Integer.parseInt(showCountTextView.getText().toString());
                FirstFragmentDirections.ActionFirstFragmentToSecondFragment action = FirstFragmentDirections.actionFirstFragmentToSecondFragment(currentCount);

                NavHostFragment.findNavController(FirstFragment.this)
                        .navigate(action);
//                NavHostFragment.findNavController(FirstFragment.this)
//                        .navigate(R.id.action_FirstFragment_to_SecondFragment);
            }
        });

        //Create a click action of count button.
        view.findViewById(R.id.count_button).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                countMe(view);
            }
        });
    }

    @Override
    public void onDestroyView() {
        super.onDestroyView();
        binding = null;
    }

    //There are some private method below

    /**
     * when click the count button, then find the text view, and get the value of the text view,
     * and plus one with the value, set the value to text view in the end.
     * @param view
     */
    private void countMe(View view){

        String countButton = showCountTextView.getText().toString();
        Integer countInt = Integer.parseInt(countButton);
        countInt++;
        showCountTextView.setText(countInt.toString());
    }



}