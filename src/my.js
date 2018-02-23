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
    var i = 2;
    while(i<=base){
       if(base%i==0 && prime(base)===false){
           base=base/i;
           if(base%i!=0){
               i++;
           }
       }
       else {
            pow=base;
            break;
       }
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
  }
// getZerosCount(47);
console.log(getZerosCount(71398757, 12));
// console.log(prime(3));