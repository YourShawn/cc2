package com.weixiao.myapplication;

public class Note {
    private String msgTitle;
    private String msgDescription;
    private boolean msgIdea;
    private boolean msgTodo;
    private boolean msgImportant;

    public String getMsgTitle() {
        return msgTitle;
    }

    public void setMsgTitle(String msgTitle) {
        this.msgTitle = msgTitle;
    }

    public String getMsgDescription() {
        return msgDescription;
    }

    public void setMsgDescription(String msgDescription) {
        this.msgDescription = msgDescription;
    }

    public boolean isMsgIdea() {
        return msgIdea;
    }

    public void setMsgIdea(boolean msgIdea) {
        this.msgIdea = msgIdea;
    }

    public boolean isMsgTodo() {
        return msgTodo;
    }

    public void setMsgTodo(boolean msgTodo) {
        this.msgTodo = msgTodo;
    }

    public boolean isMsgImportant() {
        return msgImportant;
    }

    public void setMsgImportant(boolean msgImportant) {
        this.msgImportant = msgImportant;
    }
}
