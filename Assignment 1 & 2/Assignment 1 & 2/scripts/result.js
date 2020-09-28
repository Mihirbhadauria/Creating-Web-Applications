/**
* Author: Mihir
* Target: register.html
* Purpose: Send data to the server
*/

"use strict";

// const params = (new URL(document.location)).searchParams;
//     const studentID = params.get('studentID');
//     const givenname = params.get('givenname');
//     const familyname = params.get('familyname');
//     const score = params.get('score');

window.addEventListener('load', () => {

    const studentID = localStorage.getItem("studentID");
    const givenname = localStorage.getItem("givenname");
    const familyname = localStorage.getItem("familyname");
    const score = localStorage.getItem("score");

    document.getElementById('studentID').innerHTML = studentID;
    document.getElementById('givenname').innerHTML = givenname;
    document.getElementById('familyname').innerHTML = familyname;
    document.getElementById('score').innerHTML = score;

}) 

// Got help from this video https://www.youtube.com/watch?v=0eV-tf-W2rQ&list=WL&index=1&t=603s