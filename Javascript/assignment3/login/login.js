"use strict";

const getCookieByName = name => {
    return document.cookie;
};

const setCookie = (name, value, days) => {
    var expireDateTime = new Date().getTime() + 24 * 60 * 60 * days;
    var expireDate = new Date(expireDateTime);
    document.cookie = `${name}=${value};expires=${expireDate}`;
};


const deleteCookie = name => {
    setCookie(name,"",-1);
    window.location.href = "index.html";
};

const goToPage = url => {
    window.location.href = url;
};