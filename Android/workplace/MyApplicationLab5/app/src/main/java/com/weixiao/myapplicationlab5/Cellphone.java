package com.weixiao.myapplicationlab5;

public class Cellphone {

    private String image;
    private String model;
    private double price;

    public Cellphone(String image, String model, double price) {
        this.image = image;
        this.model = model;
        this.price = price;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
