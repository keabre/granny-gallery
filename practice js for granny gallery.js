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

/* 
    'database'

    collection of arrays in an object
*/

const DatabaseObject = {
    cockerel: ["cockerel", 7.50, "cockerel-price-text", ""],
    fruit: ["fruit", 6.00, "fruit-price-text", ""],
    redroofhouse: ["redroofhouse", 3.00, "redroofhouse-price-text", ""],
    thatchedroofhouse: ["thatchedroofhouse", 3.00, "thatchedroofhouse-price-text", ""],
    housewithwindow: ["housewithwindow", 60.00, "housewithwindow-price-text", ""],
    sleepingkitten: ["sleepingkitten", 5.00, "sleepingkitten-price-text", ""],
    paintedhorse: ["paintedhorse", 10.00, "paintedhorse-price-text", ""],
    sketchedhorse: ["sketchedhorse", 8.00, "sketchedhorse-price-text", ""],
    popart: ["popart", 100.00, "popart-price-text", ""],
    pottery: ["pottery", 120.00, "pottery-price-text", ""],
    mouseonbike: ["mouseonbike", 4.00, "mouseonbike-price-text", ""],
    mousewithglasses: ["mousewithglasses", 4.50, "mousewithglasses-price-text", ""],
    ladiesinred: ["ladiesinred", 90.00, "ladiesinred-price-text", ""],
    twowhitehens: ["twowhitehens", 7.50, "twowhitehens-price-text", ""],
    treebylake: ["treebylake", 75.00, "treebylake-price-text", ""],
    flowerylady: ["flowerylady", 6.00, "flowerylady-price-text", ""],
    headbandlady: ["headbandlady", 6.00, "headbandlady-price-text", ""]
}

/* 
    object for instances of objects for images and their respective information (name, price, id, type)

    let ImgObject = {
        this.imgname: imgname,
        this.imgprice: imgprice,
        this.imgid: imgid,
        this.imgtype: imgtype

    }
*/

/* 
    list of instances of objects for images 

    some kind of loop using a constructor to append objects to an array

    constructor:

    function createImgObject(imgname, imgprice, imgid, imgtype) {
        const obj = {};
        obj.imgname = imgname;
        obj.imgprice = imgprice;
        obj.imgid = imgid;
        obj.imgtype = imgtype;
        obj.AllocateImgPrice = function () {
            let `${this.imgname}+_img_price` = this.imgprice;
            const `${this.imgname}+Price` = document.querySelector('#this.imgid');
            `${this.imgname}+Price`.textContent += `${this.imgname}+_img_price`;
        };
        return obj;
    }




*/



/* 

    prospective function for js img price allocation

    function AllocateImgPrices(nameofimg, imgprice, imgpricetextid) {
        let `${nameofimg}+_img_price` = imgprice;
        const `${nameofimg}+Price` = document.querySelector('#imgpricetextid');
        `${nameofimg}+Price`.textContent += `${nameofimg}+_img_price`;
    }

    this function is used alongside a list of objects

*/

let cockerelimg_price = 7.50;
const cockerelImgPrice = document.querySelector('#cockerel-img-price');
cockerelImgPrice.textContent += cockerelimg_price;

let fruitimg_price = 6.00;
const fruitImgPrice = document.querySelector('#fruit-img-price');
fruitImgPrice.textContent += fruitimg_price;

let redroofhouseimg_price = 3.00;
const redRoofHouseImgPrice = document.querySelector('#house-with-point-img-price');
redRoofHouseImgPrice.textContent += redroofhouseimg_price;

let thatchedroofhouseimg_price = 3.00;
const thatchedRoofHouseImgPrice = document.querySelector('#house-with-thatched-roof-img-price');
thatchedRoofHouseImgPrice.textContent += thatchedroofhouseimg_price;

let housewithwindowimg_price = 60.00;
const houseWithWindowImgPrice = document.querySelector('#house-with-window-img-price');
houseWithWindowImgPrice.textContent += housewithwindowimg_price;

let sleepingkittenimg_price = 5.00;
const sleepingKittenImgPrice = document.querySelector('#kitten-with-white-crop-img-price');
sleepingKittenImgPrice.textContent += sleepingkittenimg_price;

let paintedhorseimg_price = 10.00;
const paintedHorseImgPrice = document.querySelector('#painted-horse-img-price');
paintedHorseImgPrice.textContent += paintedhorseimg_price;

let sketchedhorseimg_price = 8.00;
const sketchedHorseImgPrice = document.querySelector('#pencil-drawn-horse-img-price');
sketchedHorseImgPrice.textContent += sketchedhorseimg_price;

let popartimg_price = 100.00;
const popartImgPrice = document.querySelector('#popart-img-price');
popartImgPrice.textContent += popartimg_price;

let potteryimg_price = 120.00;
const potteryImgPrice = document.querySelector('#pottery-img-price');
potteryImgPrice.textContent += potteryimg_price;

let mouseonbikeimg_price = 4.00;
const mouseOnBikeImgPrice = document.querySelector('#rat-on-bike-img-price');
mouseOnBikeImgPrice.textContent += mouseonbikeimg_price;

let mousewithglassesimg_price = 4.50;
const mouseWithGlassesImgPrice = document.querySelector('#rat-with-glasses-img-price')
mouseWithGlassesImgPrice.textContent += mousewithglassesimg_price;

let ladiesinredimg_price = 90.00;
const ladiesInRedImgPrice = document.querySelector('#two-ladies-dressed-in-red-img-price')
ladiesInRedImgPrice.textContent += ladiesinredimg_price;

let twowhitehensimg_price = 7.50;
const twoWhiteHensImgPrice = document.querySelector('#two-white-hens-img-price');
twoWhiteHensImgPrice.textContent += twowhitehensimg_price;

let treebylakeimg_price = 75.00;
const treeByLakeImgPrice = document.querySelector('#whispy-tree-img-price');
treeByLakeImgPrice.textContent += treebylakeimg_price;

let floweryladyimg_price = 6.00;
const floweryLadyImgPrice = document.querySelector('#woman-with-flowers-in-hair-img-price');
floweryLadyImgPrice.textContent += floweryladyimg_price;

let headbandladyimg_price = 6.00;
const headbandLadyImgPrice = document.querySelector('#woman-with-headband-img-price');
headbandLadyImgPrice.textContent += headbandladyimg_price;


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


