function captchaGenerator(){
    var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h');
    var a = (alpha[Math.floor(Math.random() * alpha.length)]);
var b = (alpha[Math.floor(Math.random() * alpha.length)]);
var c = (alpha[Math.floor(Math.random() * alpha.length)]);
var d = (alpha[Math.floor(Math.random() * alpha.length)]);
var e = (alpha[Math.floor(Math.random() * alpha.length)]);
var f = (alpha[Math.floor(Math.random() * alpha.length)]);
// var a = (alpha[Math.floor(Math.random() * alpha.length)]);

var result = a +" "+ b +" "+ c +" "+ d + " "+ e +" "+ f ;
document.getElementById('mainCaptcha').value = result;
}

// isvalid

function isvalid(){
    var one = removeSpaces(document.getElementById('mainCaptcha').value);
    var two = removeSpaces(document.getElementById('inputCaptcha').value);
    if (one == two){
    return true;
    }else{
    return false;
    }
}

// remove spaces

function removeSpaces(string){
    var x = string.split(" ");
    var s = x.join("");
    return s;
    // console.log( string.split(" ").join("") );
}