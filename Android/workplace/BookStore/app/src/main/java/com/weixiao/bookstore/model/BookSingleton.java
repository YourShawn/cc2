package com.weixiao.bookstore.model;

import java.util.ArrayList;
import java.util.List;

public class BookSingleton {


    private final List<Book> bookList = new ArrayList<>();
    private static BookSingleton bookSingleton;

    public static BookSingleton getBookSingleton(){

        if (bookSingleton == null){
            bookSingleton = new BookSingleton();
        }
        return bookSingleton;

    }


    private BookSingleton(){
        // String name, String price, String publisher, String image, String author, String publishYear
        Book b1 = new Book("Wings of Fire", "9.99", "Moon Rising","image_wings_of_fire","Jeremy","2002");
        Book b2 = new Book("Cat likes You", "15.99", "Sun Rising","image_cat_likes_you","Om Dev","2012");
        Book b3 = new Book("Invaders", "97.99", "Sunsetting","image_invaders","Shawn","2012");
        Book b4 = new Book("Ducks", "28.39", "Moon Rising","image_ducks","Gina","2022");
        Book b5 = new Book("Dog Man", "11.99", "Sun Rising","image_dog_man","Bain","2006");
        Book b6 = new Book("Press Start", "7.99", "Sun Rising","image_press_start","Bain","2008");
        Book b7 = new Book("Solo Leveling", "26.00", "Moon Rising","image_solo_leveling","Jeremy","2012");
        Book b8 = new Book("The Boy", "19.35", "Sunsetting","image_the_boy","Jeremy","2014");
        Book b9 = new Book("The Last Ronin", "29.37", "Sunsetting","image_the_last_ronin","Bain","2018");
        Book b10 = new Book("Blank Comic", "9.99", "Moon Rising","image_blank_comic","Jeremy","2017");
        Book b11 = new Book("Halo Jones", "57.45", "Sunsetting","image_halo_jones","Shawn","2017");
        Book b12 = new Book("Gray Son", "8.30", "Sun Rising","image_gray_son","Bain","2016");
        Book b13 = new Book("The Mysteries", "26.99", "Sunsetting","image_mysteries","Om Dev","2015");

        bookList.add(b1);
        bookList.add(b2);
        bookList.add(b3);
        bookList.add(b4);
        bookList.add(b5);
        bookList.add(b6);
        bookList.add(b7);
        bookList.add(b8);
        bookList.add(b9);
        bookList.add(b10);
        bookList.add(b11);
        bookList.add(b12);
        bookList.add(b13);
        bookList.add(b5);
        bookList.add(b8);
        bookList.add(b11);

    }

    public List<Book> getBookList() {
        return bookList;
    }


}
