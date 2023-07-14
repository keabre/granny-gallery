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

let DatabaseObject = {
    cockerel: ["cockerel", 7.50, "cockerel-price-text", "print", 10, "cockerel-quant-text"],
    fruit: ["fruit", 6.00, "fruit-price-text", "print", 10, "fruit-quant-text"],
    redroofhouse: ["redroofhouse", 3.00, "redroofhouse-price-text", "greetings card", 10, "redroofhouse-quant-text"],
    thatchedroofhouse: ["thatchedroofhouse", 3.00, "thatchedroofhouse-price-text", "greetings card", 10, "thatchedroofhouse-quant-text"],
    housewithwindow: ["housewithwindow", 60.00, "housewithwindow-price-text", "original", 1, "housewithwindow-quant-text"],
    sleepingkitten: ["sleepingkitten", 5.00, "sleepingkitten-price-text", "print", 10, "sleepingkitten-quant-text"],
    paintedhorse: ["paintedhorse", 10.00, "paintedhorse-price-text", "print", 10, "paintedhorse-quant-text"],
    sketchedhorse: ["sketchedhorse", 8.00, "sketchedhorse-price-text", "print", 10, "sketchedhorse-quant-text"], 
    popart: ["popart", 100.00, "popart-price-text", "original", 1, "popart-quant-text"],
    pottery: ["pottery", 120.00, "pottery-price-text", "original", 1, "pottery-quant-text"],
    mouseonbike: ["mouseonbike", 4.00, "mouseonbike-price-text", "greetings card", 10, "mouseonbike-quant-text"],
    mousewithglasses: ["mousewithglasses", 4.50, "mousewithglasses-price-text", "greetings card", 10, "mousewithglasses-quant-text"],
    ladiesinred: ["ladiesinred", 90.00, "ladiesinred-price-text", "original", 1, "ladiesinred-quant-text"],
    twowhitehens: ["twowhitehens", 7.50, "twowhitehens-price-text", "print", 10, "twowhitehens-quant-text"],
    treebylake: ["treebylake", 75.00, "treebylake-price-text", "original", 1, "treebylake-quant-text"],
    flowerylady: ["flowerylady", 6.00, "flowerylady-price-text", "print", 10, "flowerylady-quant-text"],
    headbandlady: ["headbandlady", 6.00, "headbandlady-price-text", "print", 10, "headbandlady-quant-text"]
}

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


function createImgObject(imgname, imgprice, imgpriceid, imgtype, imgquant, imgquantid) {
    let obj = {};
    obj.imgquant = imgquant;
    obj.imgquantid = imgquantid;
    obj.imgname = imgname;
    obj.imgprice = imgprice;
    obj.imgpriceid = imgpriceid;
    obj.imgtype = imgtype;
    obj.AllocateImgPrice = function () {
        let imageprice = `${this.imgprice}`;
        let SelectedImgPriceId;
        let priceidtext = '#'.concat(this.imgpriceid);
        SelectedImgPriceId = document.querySelector(priceidtext);
        SelectedImgPriceId.textContent += imageprice;
        
    };
    obj.AllocateImgQuant = function () {
        let imagequant = `${this.imgquant}`;
        let SelectedImgQuantId;
        let quantidtext = '#'.concat(this.imgquantid);
        SelectedImgQuantId = document.querySelector(quantidtext);
        SelectedImgQuantId.textContent += imagequant;
    }
    return obj;
}
let ImgObjectList = [];

for (let picture in DatabaseObject){
    let object = createImgObject(DatabaseObject[picture][0], DatabaseObject[picture][1], DatabaseObject[picture][2], DatabaseObject[picture][3], DatabaseObject[picture][4], DatabaseObject[picture][5]);
    ImgObjectList.push(object);
}

for (let i = 0; i < ImgObjectList.length; i++) {
    ImgObjectList[i].AllocateImgPrice();
    ImgObjectList[i].AllocateImgQuant();
}



