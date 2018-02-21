"use strict";
const proxies = require('./proxies.js');
const $ = require("jquery");

const sayHello = () => console.log("Hi there");
sayHello();

const add = (a,b) => {
    let res = a + b;
    return res;
}

add(5, 8);

$("body").css("background-color", "cyan");

// Proxies
proxies.proxyObj.age;
proxies.proxyObj.height;
