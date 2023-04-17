//package com.weixiao.bookstore;
//
//import android.content.Context;
//import android.content.Intent;
//import android.view.LayoutInflater;
//import android.view.View;
//import android.view.ViewGroup;
//import android.widget.ImageView;
//import android.widget.TextView;
//
//import androidx.annotation.NonNull;
//import androidx.fragment.app.FragmentManager;
//import androidx.fragment.app.FragmentTransaction;
//import androidx.recyclerview.widget.LinearLayoutManager;
//import androidx.recyclerview.widget.RecyclerView;
//
//import com.weixiao.bookstore.display.BookDisplayActivity;
//import com.weixiao.bookstore.model.Book;
//
//import java.util.List;
//
//public class ProductsListFragment extends BaseFragment{
//    private RecyclerView mRecyclerView;
//    private MyAdapter mAdapter;
//    @Override
//    protected void initView() {
//        mRecyclerView = find(R.id.book_shopping);
//        mRecyclerView.setLayoutManager(new LinearLayoutManager(getActivity()));
//        mAdapter = new MyAdapter(getActivity(), getMyData());
//        mRecyclerView.setAdapter(mAdapter);
//    }
//
//    @Override
//    protected int getLayoutId() {
//        return R.layout.book_shopping;
//    }
//
//    @Override
//    protected void refreshData() {
//
//    }
//
//    private class MyAdapter extends RecyclerView.Adapter<MyAdapter.ViewHolder> {
//
//        private Context mContext;
//        private List<Book> mData;
//
//        public MyAdapter(Context context, List<Book> data) {
//            mContext = context;
//            mData = data;
//        }
//
//        @NonNull
//        @Override
//        public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
//            View view = LayoutInflater.from(mContext).inflate(R.layout.activity_main2, parent, false);
//            return new ViewHolder(view);
//        }
//
//        @Override
//        public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
//            Book book = mData.get(position);
//
//            Context context = holder.itemView.getContext();
//            int drawable = context.getResources().getIdentifier(book.getImage(), "drawable", context.getPackageName());
//            holder.imageView.setImageResource(drawable);
//            holder.nameView.setText(book.getName());
//            holder.authorView.setText(book.getAuthor());
//            holder.priceView.setText(book.getPrice());
//
//            holder.itemView.setOnClickListener(new View.OnClickListener() {
//                @Override
//                public void onClick(View v) {
//                    FragmentManager fragmentManager = getActivity().getSupportFragmentManager();
//                    FragmentTransaction fragmentTransaction = fragmentManager.beginTransaction();
//                    fragmentTransaction.replace(R.id.main_frame, new MyDetailFragment());
//                    fragmentTransaction.addToBackStack(null);
//                    fragmentTransaction.commit();
//                }
//            });
//        }
//
//        @Override
//        public int getItemCount() {
//            return mData.size();
//        }
//
//
//
//        public class ViewHolder extends RecyclerView.ViewHolder implements View.OnClickListener  {
//
//            protected ImageView imageView;
//            protected TextView nameView;
//            protected TextView priceView;
//            protected TextView publisherView;
//            protected TextView authorView;
//            protected TextView publishYearView;
//
//            public ViewHolder(@NonNull View itemView) {
//                super(itemView);
//                imageView = itemView.findViewById(R.id.bookImage);
//                nameView = itemView.findViewById(R.id.name);
//                priceView = itemView.findViewById(R.id.price);
//                publisherView = itemView.findViewById(R.id.publisher);
//                authorView = itemView.findViewById(R.id.author);
//                publishYearView = itemView.findViewById(R.id.publishYear);
//
//                itemView.setOnClickListener(this);
//            }
//
//            @Override
//            public void onClick(View view) {
//                Context context = view.getContext();
//                Book book = booksList.get(getAdapterPosition());
//                System.out.println("************:"+ booksList.size());
//                Intent intent = new Intent(context, BookDisplayActivity.class);
//                intent.putExtra("name",book.getName());
//                intent.putExtra("author",book.getAuthor());
//                intent.putExtra("price",book.getPrice());
//                intent.putExtra("publisher",book.getPublisher());
//                intent.putExtra("publishYear",book.getPublishYear());
//                intent.putExtra("image",book.getImage());
//
//                context.startActivity(intent);
//            }
//        }
//    }
//}
