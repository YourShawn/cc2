//package com.weixiao.bookstore.mysql;
//
//import android.util.Log;
//
//import org.chromium.net.CronetEngine;
//import org.chromium.net.CronetException;
//import org.chromium.net.UrlRequest;
//import org.chromium.net.UrlResponseInfo;
//
//import java.nio.ByteBuffer;
//import java.util.concurrent.Executor;
//import java.util.concurrent.Executors;
//
//public class Clients extends UrlRequest.Callback{
//    private static final String TAG = "Clients";
//
//    public void callApiText(){
////        CronetEngine.Builder myBuilder = new CronetEngine.Builder(this);
////        CronetEngine cronetEngine = myBuilder.build();
////        Executor executor = Executors.newSingleThreadExecutor();
////        UrlRequest.Builder requestBuilder = cronetEngine.newUrlRequestBuilder(
////                "https://www.example.com", new Clients(), executor);
////        UrlRequest request = requestBuilder.build();
////
////        request.start();
//    }
//
//    @Override
//    public void onRedirectReceived(UrlRequest request, UrlResponseInfo info, String newLocationUrl) throws Exception {
//        request.followRedirect();
//    }
//
//    @Override
//    public void onResponseStarted(UrlRequest request, UrlResponseInfo info) throws Exception {
//        request.read(ByteBuffer.allocateDirect(102400));
//    }
//
//    @Override
//    public void onReadCompleted(UrlRequest request, UrlResponseInfo info, ByteBuffer byteBuffer) throws Exception {
//        byteBuffer.clear();
//        request.read(byteBuffer);
//    }
//
//    @Override
//    public void onSucceeded(UrlRequest request, UrlResponseInfo info) {
//        Log.i(TAG, "onSucceeded method called.");
//    }
//
//    @Override
//    public void onFailed(UrlRequest request, UrlResponseInfo info, CronetException error) {
//
//    }
//}
