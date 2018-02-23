function prime(number_p){
    var isPrime=true;
        var temp = 0;
        for (var i=2; i<=number_p/2; i++) {
            temp = number_p % i;
            if (temp == 0) {
                isPrime = false;
                break;
            }
        }
    return isPrime;
}

function getZerosCount(number,base) {
    var count = 0, a=0, pow=0;
    
    for(var i=2;i<base;i++){
       if(base%i==0 && prime(base)==false){
           base=base/i;
           if(base%i==0){
               i--;
           }
       }
       else pow=base;
    }
    console.log(pow);


    for(var i=1; i<=number;i++){
          a=i;
          while(a%pow==0){
              count++;
              a=a/pow;
          }
      }
      return count;
    // if(prime(base)==false) console.log("false");
  }
// getZerosCount(47);
console.log(getZerosCount(14423541,193));