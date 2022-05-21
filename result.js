"use strict";


function getData()
{
    if(typeof(Storage) != undefined)
    {
        document.getElementById("firstname").innerHTML = window.localStorage.getItem("firstname");

    }

}

function init()
{
    var d = window.localStorage.getItem("firstname");

    if(d != null)
    {
        getdata();
    }
    else
    {
        alert("error");
        document.getElementById("firstname").innerHTML = "error";
    }

}

window.onload = init;