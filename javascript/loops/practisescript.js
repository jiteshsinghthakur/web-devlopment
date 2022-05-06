// 2520 --> 1-10    is divisible by every no. lies 1-10


    var i = n;
  
    // if not 0 then i++
    var j;
    var i;
    var n;
      for (var j = 1; j <= n; j++) {
        // loop 20 % i   where i goes from 1 to 20  must % = 0
        if( i % j !== 0 ){ return false; }
      };
      return true;
    
    // break loop when n all are 0
    while( !(checkI(i)) ){ i+=n; }
    console.log(i);
    