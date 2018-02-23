
module.exports = function getZerosCount(number, base) {
   
        var count = 0, a=0;
          for(var i=1; i<=number;i++){
              a=i;
              while(a%base==0){
                  count++;
                  a=a/base;
              }
          }
          return count;
      
   
}

