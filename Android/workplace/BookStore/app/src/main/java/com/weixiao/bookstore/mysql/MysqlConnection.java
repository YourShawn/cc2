package com.weixiao.bookstore.mysql;

import android.os.StrictMode;
import android.util.Log;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class MysqlConnection {

    public int getUserSize() {
        final String CLS = "com.mysql.cj.jdbc.Driver";
        final String URL = "jdbc:mysql://10.0.2.3:3306/xiao18";
        final String USER = "root";
        final String PASSWORD = "Aa111111";
        int count = 0;
        try {
            StrictMode.ThreadPolicy policy = new StrictMode.ThreadPolicy.Builder().permitAll().build();
            StrictMode.setThreadPolicy(policy);

            Class.forName(CLS);
            DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
            Connection connection = DriverManager.getConnection(URL, USER, PASSWORD);
            String sql = "select count(*) as sl from client;";
            Statement statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery(sql);
            while(resultSet.next()){
                count = resultSet.getInt("sl");
            }
        }catch (Exception e){
            Log.e("Mysql", "getUserSize: " , e);
        }
        return count;
    }
}
