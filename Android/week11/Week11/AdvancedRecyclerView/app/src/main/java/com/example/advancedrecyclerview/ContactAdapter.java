package com.example.advancedrecyclerview;

import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.recyclerview.widget.RecyclerView;

import java.util.List;

public class ContactAdapter extends RecyclerView.Adapter<ContactAdapter.MyViewHolder> {

    private List<Contact> mContacts;

    public ContactAdapter(List<Contact> contacts) {

        mContacts = contacts;

    }

    public MyViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {

        LayoutInflater layoutInflater = LayoutInflater.from(parent.getContext());
        return new MyViewHolder(layoutInflater, parent);

    }

    public void onBindViewHolder(MyViewHolder holder, int position) {

        Contact c = mContacts.get(position);


        Context myContext = holder.itemView.getContext();
        //Boilerplate code
        //if you name your file billgates.jpg
        //And you add a String image to your Contact object
        //Give the image the same name
        //Then you can search the drawable folder for "getImage()" value
        int resid = myContext.getResources().getIdentifier(c.getImage(), "drawable", myContext.getPackageName());
        holder.imgContact.setImageResource(resid);


        holder.txtName.setText(c.getName());

    }

    public int getItemCount(){

        return mContacts.size();

    }

    class MyViewHolder extends RecyclerView.ViewHolder implements View.OnClickListener{

        TextView txtName;
        ImageView imgContact;

        public MyViewHolder(LayoutInflater inflater, ViewGroup parent) {

            super(inflater.inflate(R.layout.row_layout, parent, false));

            txtName = itemView.findViewById(R.id.txtName);
            imgContact = itemView.findViewById(R.id.imgContact);

            itemView.setOnClickListener(this);

        }

        @Override
        public void onClick(View view) {

            Context c = view.getContext();

            //getAdapterPosition returns the current "contact" in the spot that we click
            Contact passContact = mContacts.get(getAdapterPosition());


            Intent i = new Intent(c, DisplayActivity.class);

            i.putExtra("clickedName", passContact.getName());
            i.putExtra("clickedEmail", passContact.getEmail());
            i.putExtra("clickedPic", passContact.getImage());

            c.startActivity(i);




        }
    }



}
