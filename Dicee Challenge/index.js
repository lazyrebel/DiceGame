//alert("Welcome!");

var randomNumber = Math.floor(Math.random() * 6) + 1;

var randomDImage = "dice" + randomNumber + ".png";

var randomImgSource = "images/" + randomDImage;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImgSource);


//img2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDImage2 = "dice" + randomNumber2 + ".png";

var randomImgSource2 = "images/" + randomDImage2;

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randomImgSource2);
