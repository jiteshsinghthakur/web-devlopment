var i = 0

while (i < 5){
    console.log(i);
    i++;  // i = i + 1
}



var x = "";
i = 0;
while (i < 5){
    x = i + x + "<br>"; // concatination
    i++;
}
document.getElementById("four").innerHTML = x;


// wap to enter a no. from user and print its reverse


// user input
//n = prompt("Enter a number");
//alert(n);

//n = prompt("Enter your name");
//alert("hello " +n);

// floor division only keep int values ignore decimal values

// 153 % 10 - 3
// 153 // 10 - 15
// 15 % 10 - 5
// 15 // 10 - 1
// 1% 10 - 1
// 1 // 10 - 0

//x = Math.floor(153 / 10)
//console.log(x);


// wap to enter a no. from user and print its reverse
// var c = prompt("enter a no. :");
// var r;
// var s = " ";
// while(c > 0){
//     r = c % 10;
//     s = s + r;
//     c = Math.floor(c / 10);
// }
// console.log(s);

//wap to enter a no. from user and print sum of its individual digits

// wap to enter a no. from user and print factorial of it


//typeof
// console.log(typeof 10); // number
// console.log(typeof "10"); // string

// console.log(typeof 10.5); // number
// console.log(typeof 'A'); // string
// console.log(typeof 'india'); // string
// console.log(typeof 0); // number
// console.log(typeof 1); // number
// console.log(typeof 'A'); //string
// console.log(typeof true); //boolean
// console.log(typeof false); //boolean


// 2520 --> 1-10    is divisible by every no. lies 1-10
// ?  ---> 1-20     is divisible by every no. lies 1-20