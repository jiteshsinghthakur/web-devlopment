alert("Hello from external javascript");

// variables

var a = 10;
console.log(a);

a = 20;
console.log(a);

console.log(a+5);

console.log(a);

// display values in HTML

var x = 100;

document.getElementById('one').innerHTML = x;
document.getElementById('two').innerHTML ="Hello Jitesh";


// operators

// unary operators
// ++   --

var c = 10;
c++;
console.log(c);

// 1. Arithmatic Operators
//  +  -  *  /  %

// Relational Operators
// > < >=  <=  ==  !=  === 

// boolean operators
// true false

// logical operators
//  && || ^

//bitwise operators


// Algorithm Based Questions
//1. 

// 1 - 10  --> 3 5 6 9  - sum -> 23

// 1 - 1000 --> 3 or 5 -->
// 15 x
function result(N)
{
   
    for (let num = 1; num < N; num++)
    {
        
        if (num % 3 == 0)
            document.write( num+ " ");
            if (num % 5 == 0)
            document.write( num+ " ");
    }
}
let N = 1000;
result(N);

