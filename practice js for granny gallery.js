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
    cockerel: ["cockerel", 7.50, "cockerel-price-text", "Print", 10, "cockerel-quant-text", "cockerel-type-text"],
    fruit: ["fruit", 6.00, "fruit-price-text", "Print", 10, "fruit-quant-text", "fruit-type-text"],
    redroofhouse: ["redroofhouse", 3.00, "redroofhouse-price-text", "Greetings Card", 10, "redroofhouse-quant-text", "redroofhouse-type-text"],
    thatchedroofhouse: ["thatchedroofhouse", 3.00, "thatchedroofhouse-price-text", "Greetings Card", 10, "thatchedroofhouse-quant-text", "thatchedroofhouse-type-text"],
    housewithwindow: ["housewithwindow", 60.00, "housewithwindow-price-text", "Original", 1, "housewithwindow-quant-text", "housewithwindow-type-text",],
    sleepingkitten: ["sleepingkitten", 5.00, "sleepingkitten-price-text", "Print", 10, "sleepingkitten-quant-text", "sleepingkitten-type-text"],
    paintedhorse: ["paintedhorse", 10.00, "paintedhorse-price-text", "Print", 10, "paintedhorse-quant-text", "paintedhorse-type-text"],
    sketchedhorse: ["sketchedhorse", 8.00, "sketchedhorse-price-text", "Print", 10, "sketchedhorse-quant-text", "sketchedhorse-type-text"], 
    popart: ["popart", 100.00, "popart-price-text", "Original", 1, "popart-quant-text", "popart-type-text"],
    pottery: ["pottery", 120.00, "pottery-price-text", "Original", 1, "pottery-quant-text", "pottery-type-text"],
    mouseonbike: ["mouseonbike", 4.00, "mouseonbike-price-text", "Greetings Card", 10, "mouseonbike-quant-text", "mouseonbike-type-text"],
    mousewithglasses: ["mousewithglasses", 4.50, "mousewithglasses-price-text", "Greetings Card", 10, "mousewithglasses-quant-text", "mousewithglasses-type-text"],
    ladiesinred: ["ladiesinred", 90.00, "ladiesinred-price-text", "Original", 1, "ladiesinred-quant-text", "ladiesinred-type-text"],
    twowhitehens: ["twowhitehens", 7.50, "twowhitehens-price-text", "Print", 10, "twowhitehens-quant-text", "twowhitehens-type-text"],
    treebylake: ["treebylake", 75.00, "treebylake-price-text", "Original", 1, "treebylake-quant-text", "treebylake-type-text"],
    flowerylady: ["flowerylady", 6.00, "flowerylady-price-text", "Print", 10, "flowerylady-quant-text", "flowerylady-type-text"],
    headbandlady: ["headbandlady", 6.00, "headbandlady-price-text", "Print", 10, "headbandlady-quant-text", "headbandlady-type-text"]
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


function createImgObject(imgname, imgprice, imgpriceid, imgtype, imgquant, imgquantid, imgtypeid) {
    let obj = {};
    obj.imgtypeid = imgtypeid;
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
    };
    obj.AllocateImgType = function () {
        let imagetype = `${this.imgtype}`;
        let SelectedImgTypeId;
        let typeidtext = '#'.concat(this.imgtypeid);
        SelectedImgTypeId = document.querySelector(typeidtext);
        SelectedImgTypeId.textContent += imagetype;
    };
    return obj;
}
let ImgObjectList = [];

for (let picture in DatabaseObject){
    let object = createImgObject(DatabaseObject[picture][0], DatabaseObject[picture][1], DatabaseObject[picture][2], DatabaseObject[picture][3], DatabaseObject[picture][4], DatabaseObject[picture][5], DatabaseObject[picture][6]);
    ImgObjectList.push(object);
}

for (let i = 0; i < ImgObjectList.length; i++) {
    ImgObjectList[i].AllocateImgPrice();
    ImgObjectList[i].AllocateImgType();
    ImgObjectList[i].AllocateImgQuant();
}


// shopping cart

/* 
if we have an array of items, that user bought, they length of the array can show how many p tags need to be created

user selects 4 items (as an example) [we detect this using event listeners]
-each item appending to a list that holds on user chose picture (accessed through the database object)
-a for loop creating p tags to amount of things in user chosen list
-another for loop appending text content for price, quantity, name, other info to relevant places 





if firstvalue occupied, then,
    select second value
    
*/


// if () {}


// this below is finding the id value of type text of any picture with a buy button such that when someone adds picture to cart, we can idenitify what was bought.
let buyButton = document.querySelectorAll('.buy-button')
buyButton.forEach(el => el.addEventListener('click', (event) => {
    let typetextidfinder = event.target.parentNode.parentNode.parentNode.firstElementChild.getAttribute('id');
    console.log(typetextidfinder);
    for (const picture in DatabaseObject) {
        if (typetextidfinder == DatabaseObject[picture][6]) {
            arraymatchedtobuybuttonpressed = DatabaseObject[picture];
            console.log(arraymatchedtobuybuttonpressed);
            break;
        } else {
            console.log("false");
        }
    }
}))

