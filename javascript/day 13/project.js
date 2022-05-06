// captcha generator
function captchaGenerator(){
    var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h');
    //                     0    1    2    3 .....
    //  alpha[0] ---> 'A'
    // console.log(alpha.length);
    // console.log(alpha[15])

    //  console.log(Math.random());
 var A,B,C,D,E,F,x
     (Math.floor(Math.random() * alpha.length));
  A =  c
  B =  (alpha[Math.floor(Math.random() * alpha.length)]);
  C =  (alpha[Math.floor(Math.random() * alpha.length)]);
  D =  (alpha[Math.floor(Math.random() * alpha.length)]);
  E = (alpha[Math.floor(Math.random() * alpha.length)]);
  F =  (alpha[Math.floor(Math.random() * alpha.length)]);
    x = A+B+C+D+E+F;
    document.getElementById("mainCaptcha").value = x;
}
captchaGenerator();



// isvalid




// remove