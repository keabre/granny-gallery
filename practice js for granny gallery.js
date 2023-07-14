/* 
functions of the website:
track what user chooses to but and calculates final costs (pieces + postage and packaging)
tells user if paintings are available and their amounts

-set variable for every painting? in place for a database? or use SQL?
-calculation function that takes user inputs and adds up into a final cost for piece variable and a postage and packaging variable

assume using variables for everything
const for all artwork

variable names for artwork:
-let cockerelimg-price
-let fruitimg-price
-let redroofhouseimg-price
-let thatchedroofhouseimg-price
-let housewithwindowimg-price
-let sleepingkittenimg-price
-let paintedhorseimg-price
-let sketchedhorseimg-price
-let popartimg-price
-let potteryimg-price
-let mouseonbikeimg-price
-let mousewithglassesimg-price
-let ladiesinredimg-price
-let twowhitehensimg-price
-let treebylakeimg-price
-let floweryladyimg-price
-let headbangladyimg-price

*/

let cockerelimg_price = 7.50;
const theCockerelPrice = document.querySelector('#cockerel-img-price');
theCockerelPrice.textContent += cockerelimg_price;

let fruitimg_price = 6.00;
const theFruitImgPrice = document.querySelector('#fruit-img-price');
theFruitImgPrice.textContent += fruitimg_price;

let redroofhouseimg_price = 3.00;
let thatchedroofhouseimg_price = 3.00;
let housewithwindowimg_price = 60.00;
let sleepingkittenimg_price = 5.00;
let paintedhorseimg_price = 10.00;
let sketchedhorseimg_price = 8.00;
let popartimg_price = 100.00;
let potteryimg_price = 120.00;
let mouseonbikeimg_price = 4.00;
let mousewithglassesimg_price = 4.50;
let ladiesinredimg_price = 90.00;
let twowhitehensimg_price = 7.50;
let treebylakeimg_price = 75.00;
let floweryladyimg_price = 6.00;
let headbandladyimg_price = 6.00;


let jscockerelimg_quant = 10;
let cockerelimg_quant = document.getElementById("cockerelimg_quant");
cockerelimg_quant.textContent = jscockerelimg_quant;

let jsfruitimg_quant = 10;
let fruitimg_quant = document.getElementById("fruitimg_quant");
fruitimg_quant.textContent = jsfruitimg_quant;

let jsredroofhouseimg_quant = 10;
let redroofhouseimg_quant = document.getElementById("redroofhouseimg_quant");
redroofhouseimg_quant.textContent = jsredroofhouseimg_quant;

let jsthatchedroofhouseimg_quant = 10;
let thatchedroofhouseimg_quant = document.getElementById("thatchedroofhouseimg_quant");
thatchedroofhouseimg_quant.textContent = jsthatchedroofhouseimg_quant;

let jssleepingkittenimg_quant = 10;
let sleepingkittenimg_quant = document.getElementById("sleepingkittenimg_quant");
sleepingkittenimg_quant.textContent = jssleepingkittenimg_quant;

let jspaintedhorseimg_quant = 10;
let paintedhorseimg_quant = document.getElementById("paintedhorseimg_quant");
paintedhorseimg_quant.textContent = jspaintedhorseimg_quant;

let jssketchedhorseimg_quant = 10;
let sketchedhorseimg_quant = document.getElementById("sketchedhorseimg_quant");
sketchedhorseimg_quant.textContent = jssketchedhorseimg_quant;

let jsmouseonbikeimg_quant = 10;
let mouseonbikeimg_quant = document.getElementById("mouseonbikeimg_quant");
mouseonbikeimg_quant.textContent = jsmouseonbikeimg_quant;

let jsmousewithglassesimg_quant = 10;
let mousewithglassesimg_quant = document.getElementById("mousewithglassesimg_quant");
mousewithglassesimg_quant.textContent = jsmousewithglassesimg_quant;

let jstwowhitehensimg_quant = 10;
let twowhitehensimg_quant = document.getElementById("twowhitehensimg_quant");
twowhitehensimg_quant.textContent = jstwowhitehensimg_quant;

let jsfloweryladyimg_quant = 10;
let floweryladyimg_quant = document.getElementById("floweryladyimg_quant");
floweryladyimg_quant.textContent = jsfloweryladyimg_quant;

let jsheadbandladyimg_quant = 10;
let headbandladyimg_quant = document.getElementById("headbandladyimg_quant");
headbandladyimg_quant.textContent = jsheadbandladyimg_quant;


