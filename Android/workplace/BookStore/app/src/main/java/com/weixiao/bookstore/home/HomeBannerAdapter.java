package com.weixiao.bookstore.home;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.ViewGroup;
import android.widget.ImageView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.weixiao.bookstore.R;

import java.util.List;

public class HomeBannerAdapter extends RecyclerView.Adapter<HomeBannerAdapter.CellphoneViewHolder> {
    List<HomeBanner> homeBannerList;

    public HomeBannerAdapter(List<HomeBanner> homeBannerList) {
        this.homeBannerList = homeBannerList;
    }

    @NonNull
    @Override
    public CellphoneViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        LayoutInflater from = LayoutInflater.from(parent.getContext());
        return new CellphoneViewHolder(from, parent);
    }

    @Override
    public void onBindViewHolder(@NonNull CellphoneViewHolder holder, int position) {
        HomeBanner homeBanner = homeBannerList.get(position);
        Context context = holder.itemView.getContext();
        int drawable = context.getResources().getIdentifier(homeBanner.getImage(), "drawable", context.getPackageName());
        holder.imgPhone.setImageResource(drawable);
    }

    @Override
    public int getItemCount() {
        return homeBannerList.size();
    }

    public class CellphoneViewHolder extends RecyclerView.ViewHolder {
        ImageView imgPhone;

        /**
         * Notice:Here paramters are LayoutInflater and ViewGroup.
         *
         * @param from
         * @param parent
         */
        public CellphoneViewHolder(LayoutInflater from, ViewGroup parent) {
            super(from.inflate(R.layout.home_banner_layout, parent, false));
            imgPhone = itemView.findViewById(R.id.imgPhone);

        }

    }
}
