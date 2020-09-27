/**
* Author: Mihir
* Target: register.html
* Purpose: Send data to the server
*/

"use strict";

const params = (new URL(document.location)).searchParams;
    const StudentID = params.get('StudentID');
    const givenname = params.get('givenname');
    const familyname = params.get('familyname');


window.addEventListener('load', () => {

    document.getElementById('StudentID').innerHTML = StudentID;
    document.getElementById('givenname').innerHTML = givenname;
    document.getElementById('familyname').innerHTML = familyname;

})


// Got help from this video https://www.youtube.com/watch?v=0eV-tf-W2rQ&list=WL&index=1&t=603s