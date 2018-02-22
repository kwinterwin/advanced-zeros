function getZerosCount(number, base) {
    var count = 0, a=0, pow=0;
    
    // for(var i=0;i<base;i++){
    //    if(base%2==0){
    //        base=base/2;
    //    }
    //    else pow=base;
    // }
    // console.log(pow);
    for(var i=1; i<=number;i++){
          a=i;
          while(a%19==0){
              count++;
              a=a/19;
          }
      }
      return count;
  }
  
console.log(getZerosCount(15553283,84));