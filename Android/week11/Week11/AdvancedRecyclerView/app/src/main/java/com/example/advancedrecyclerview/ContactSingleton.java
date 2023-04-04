package com.example.advancedrecyclerview;

import java.util.ArrayList;
import java.util.List;

public class ContactSingleton {


    private final List<Contact> mContactList = new ArrayList<>();
    private static ContactSingleton mContactSingleton;

    public static ContactSingleton getPersonSingleton(){

        if (mContactSingleton == null){
            mContactSingleton = new ContactSingleton();
        }
        return mContactSingleton;

    }


    private ContactSingleton(){

        Contact c1 = new Contact("Bill Gates", "bgates@microsoft.com", "billgates");
        Contact c2 = new Contact("Steve Jobs", "sjobs@apple.com", "stevejobs");

        mContactList.add(c1);
        mContactList.add(c2);

    }

    public List<Contact> getContactList() {
        return mContactList;
    }


}
