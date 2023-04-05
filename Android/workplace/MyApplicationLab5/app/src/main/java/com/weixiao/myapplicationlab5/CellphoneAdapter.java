package com.weixiao.myapplicationlab5;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.util.List;

public class CellphoneAdapter extends RecyclerView.Adapter<CellphoneAdapter.CellphoneViewHolder> {
    List<Cellphone> cellphoneList;
    Gson gson = new Gson();

    public CellphoneAdapter(List<Cellphone> cellphoneList) {
        this.cellphoneList = cellphoneList;
    }

    @NonNull
    @Override
    public CellphoneViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        LayoutInflater from = LayoutInflater.from(parent.getContext());
        return new CellphoneViewHolder(from,parent);
    }

    @Override
    public void onBindViewHolder(@NonNull CellphoneViewHolder holder, int position) {
        Cellphone cellphone = cellphoneList.get(position);
        System.out.println("***** : "+gson.toJson(cellphone));
        Context context = holder.itemView.getContext();
        int drawable = context.getResources().getIdentifier(cellphone.getImage(), "drawable", context.getPackageName());
        holder.imgPhone.setImageResource(drawable);
        holder.brand.setText(cellphone.getModel());
        String priceStr = String.valueOf(cellphone.getPrice());
        holder.price.setText(priceStr);
    }

    @Override
    public int getItemCount() {
        return cellphoneList.size();
    }

    public class CellphoneViewHolder extends RecyclerView.ViewHolder {
        ImageView imgPhone;
        TextView brand;
        TextView price;

        /**
         * Notice:Here paramters are LayoutInflater and ViewGroup.
         * @param from
         * @param parent
         */
        public CellphoneViewHolder(LayoutInflater from, ViewGroup parent) {
            super(from.inflate(R.layout.pager_layout,parent,false));
            brand = itemView.findViewById(R.id.textBrand);
            price = itemView.findViewById(R.id.textPrice);
            imgPhone = itemView.findViewById(R.id.imgPhone);

        }

    }
}
