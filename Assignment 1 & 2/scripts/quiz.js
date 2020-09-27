/**
* Author: Mihir
* Target: register.html
* Purpose: To validate data entered
*/ 

"use strict";

function validate(){
    var errMsg ="";
    var result = true;

    var givenname = document.getElementById("givenname").value;
    var familyname = document.getElementById("familyname").value;
    var studentID = document.getElementById("studentID").value;

    var google = document.getElementById("google").checked;
    var bing = document.getElementById("bing").checked;
    var yahoo = document.getElementById("yahoo").checked;

    var google_e = document.getElementById("google_e").checked;
    var yahoo_e = document.getElementById("yahoo_e").checked;
    var javaScript = document.getElementById("javaScript").checked;
    var aliexpress = document.getElementById("aliexpress").checked;
    var duckDuckGo = document.getElementById("duckDuckGo").checked;

    var define_search_engine = document.getElementById("define_search_engine").value;
    var percentage_of_usage_of_google = document.getElementById("percentage_of_usage_of_google").value;

    if (!studentID.match(/\d{7,10}/)){
        errMsg = errMsg + "Your student ID must be between 7 to 10 digits.\n"
        result = false;
    }

    if (!givenname.match(/^[a-zA-Z]+$/)){
        errMsg = errMsg + "Your first name must only contain alpha characters\n"
        result = false;
    }

    if (!familyname.match(/[a-zA-Z- ]/)){
    errMsg = errMsg + "Your last name must only contain alpha characters & hypens\n"
    result = false;
    }

    if(!(google||bing||yahoo)){
        errMsg = errMsg + "You must select the most famous search engine.\n"
        result = false;
    }

    if (document.getElementById("first_search_engine").value == ""){
        errMsg = errMsg + "Please select at least one search engine.\n"
        result = false;
    }

    if(!(google_e||yahoo_e||javaScript||aliexpress||duckDuckGo)){
        errMsg = errMsg + "Please select one option which is NOT a search engine.\n"
        result = false;
    }

    if(define_search_engine == ""){
        errMsg = errMsg + "Please write something for defining a search engine.\n"
        result = false;
    }

    if(!percentage_of_usage_of_google.match(/[0-9]/)){
        errMsg = errMsg + "Please use numbers only.\n"
        result = false;
    }


    if (errMsg != ""){
        alert(errMsg);
    }

    return result;
}

function init(){
    var myform = document.getElementById("myform");
    myform.onsubmit = validate;
    
} 

window.onload = init;

