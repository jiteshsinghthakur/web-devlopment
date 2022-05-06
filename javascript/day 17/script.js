var g = "Hello World";
var g = "Indore";

console.log(g);

// var x = "India"; // global variable
// function goa(){
//     var y = "Bye"; // local variable
//     console.log(y);
//     console.log(x);
// }
// goa();
// console.log(y); //giveserror, as its a local var and cant called global


// function indore(){
//     a = "hello hi"; // treated as global variable as var is not declared 
//     console.log(a);
//     var h ="goa";
//     console.log(h);
// }
// indore();
// console.log(a);


// var a = "hi this is a javascript";

// var time = 5;
// if (time > 4 ){
//     var a = "hello";
// }
// console.log(a);



//  let 

//    let cannot be redeclared
// blocked scope



// let d = "hi";
// let d = "bye";
// console.log(d);

let r = 10;
let s = 20;
// blocked scope
{
    let r = 100;
    console.log(r);
}

r = 40;
console.log(r);



let hello;
console.log(hello);

var hi;
console.log(hi);




// TV 
//     smart, bluetooth, hdmi, wifi

// Actual tv  --> product id ----> remote
// json - javascript object notation

// creating object
let jitesh = {
    name: "Jitesh",
    age: 24,
    college: 'Medicaps'
}
console.log(jitesh);
console.log(jitesh.name);
console.log(jitesh.age);
// also use this ,output will be same
console.log(jitesh['college']);
