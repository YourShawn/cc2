package com.weixiao.myapplication;

import android.app.AlertDialog;
import android.app.Dialog;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.DialogFragment;


public class DialogShowNote extends DialogFragment {
    private Note note;

    @NonNull
    @Override
    public Dialog onCreateDialog(@Nullable Bundle savedInstanceState) {
        // All the other code goes here
        AlertDialog.Builder builder =
                new AlertDialog.Builder(getActivity());

        LayoutInflater inflater =
                getActivity().getLayoutInflater();

        View dialogView =
                inflater.inflate(R.layout.dialog_show_note, null);

        TextView txtTitle =
                (TextView) dialogView.findViewById(R.id.txtTitle);

        TextView txtDescription =
                (TextView) dialogView.findViewById(R.id.txtDescription);

        txtTitle.setText(note.getMsgTitle());
        txtDescription.setText(note.getMsgDescription());

        TextView txtImportant =
                (TextView) dialogView.findViewById(R.id.textViewImportant);

        TextView txtTodo =
                (TextView) dialogView.findViewById(R.id.textViewTodo);

        TextView txtIdea =
                (TextView) dialogView.findViewById(R.id.textViewIdea);

        if (!note.isMsgImportant()){
            txtImportant.setVisibility(View.GONE);
        }

        if (!note.isMsgTodo()){
            txtTodo.setVisibility(View.GONE);
        }

        if (!note.isMsgIdea()){
            txtIdea.setVisibility(View.GONE);
        }
        Button btnOK = (Button) dialogView.findViewById(R.id.btnOK);

        builder.setView(dialogView).setMessage("Shawn Message");

        btnOK.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                dismiss();
            }
        });
        return builder.create();
    }


    // Receive a note from the MainActivity
    public void sendNoteSelected(Note noteSelected) {
        note = noteSelected;
    }
}
