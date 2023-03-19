package com.weixiao.myapplicationlab4;

import android.view.LayoutInflater;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.List;

public class MyAdapter extends RecyclerView.Adapter<MyAdapter.MyViewHello>{
    List<String> dataList;

    public MyAdapter(List<String> dataList){
        this.dataList = dataList;
    }

    @NonNull
    @Override
    public MyViewHello onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        LayoutInflater layoutInflater = LayoutInflater.from(parent.getContext());
        return new MyViewHello(layoutInflater,parent);
    }


    @Override
    public void onBindViewHolder(MyViewHello holder, int position) {
            holder.textView.setText(dataList.get(position));
    }

    @Override
    public int getItemCount() {
        return dataList.size();
    }

    static class MyViewHello extends RecyclerView.ViewHolder{
        TextView textView;
        public MyViewHello(LayoutInflater layoutInflater,ViewGroup viewGroup) {
            super(layoutInflater.inflate(R.layout.list_layout,viewGroup,false));
            textView = itemView.findViewById(R.id.textList);
        }
    }
}
