package com.example.notification;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.os.Bundle;

import com.google.android.material.snackbar.Snackbar;

import androidx.appcompat.app.AppCompatActivity;

import android.util.Log;
import android.view.View;

import androidx.core.app.NotificationCompat;
import androidx.navigation.NavController;
import androidx.navigation.Navigation;
import androidx.navigation.ui.AppBarConfiguration;
import androidx.navigation.ui.NavigationUI;

import com.example.notification.databinding.ActivityMainBinding;

import android.view.Menu;
import android.view.MenuItem;
import android.widget.Button;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    private AppBarConfiguration appBarConfiguration;
    private ActivityMainBinding binding;
    private NotificationManager notificationManager;
    private Notification notification;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = ActivityMainBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());
        setSupportActionBar(binding.toolbar);

        notificationManager = (NotificationManager)getSystemService(NOTIFICATION_SERVICE);
        NotificationChannel notificationChannel = new NotificationChannel("1", "Test Notification", NotificationManager.IMPORTANCE_HIGH);
        notificationManager.createNotificationChannel(notificationChannel);

        notification = new NotificationCompat.Builder(this, "1")
                .setContentTitle("Notification title")
                .setContentText("Notification Context")
                .setSmallIcon(R.drawable.ic_baseline_airplanemode_active_24)
                .build();

        NavController navController = Navigation.findNavController(this, R.id.nav_host_fragment_content_main);
        appBarConfiguration = new AppBarConfiguration.Builder(navController.getGraph()).build();
        NavigationUI.setupActionBarWithNavController(this, navController, appBarConfiguration);

        binding.fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
                        .setAction("Action", null).show();
            }
        });

    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }

    @Override
    public boolean onSupportNavigateUp() {
        NavController navController = Navigation.findNavController(this, R.id.nav_host_fragment_content_main);
        return NavigationUI.navigateUp(navController, appBarConfiguration)
                || super.onSupportNavigateUp();
    }


    public void sendNotification(View view) {
        Log.e("message","sendNotification");
//        notificationManager.notify(1, notification);
    }

    @Override
    public void onClick(View view) {
        Button buttonSendNotification = view.findViewById(R.id.button_send);
        buttonSendNotification.setOnClickListener(new View.OnClickListener(){

            @Override
            public void onClick(View view) {
                Log.e("debugger", "test onClick: ");
                notificationManager.notify(1, notification);
            }
        });
    }
}