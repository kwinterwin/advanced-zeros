module.exports = function getZerosCount(number, base) {
  var count = 0, a=0, pow=0;
    
  for(var i=0;i<base;i++){
    //   var j=2;
    //   while(j<base){
        if(base%2==0){
            base=base/2;
        }
        else pow=base;
    }
  
  
  for(var i=1; i<=number;i++){
        a=i;
        while(a%pow==0){
            count++;
            a=a/pow;
        }
    }
    return count;
}