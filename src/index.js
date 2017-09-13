"use strict";
const $ = require("jquery");

const sayHello = () => console.log("Hi there");
sayHello();

const add = (a,b) => {
    let res = a + b;
    return res;
}

add(5, 8);

$("body").css("background-color", "cyan");