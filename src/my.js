function getZerosCount(number,base) {
    var prostyeChisla = [];
    var stInSystem = [];
    var stInNumber = [];

    for (var i = 2; i <= base; i++) {
        if (base % i == 0) {
            var prime = true;
            for (var j = 2; j < i; j++) {
                if (i % j == 0)
                    prime = false;
            }
            var k = i, t = 0;
            if (prime) {
                while (base % k == 0) {
                    k *= i;
                    t++;
                }
                prostyeChisla.push(i);
                stInSystem.push(t);
            }
        }
    }

    console.log(prostyeChisla);
    console.log(stInSystem);
    
    for (var i = 0; i < prostyeChisla.length; i++) {
        var k = 0, t = prostyeChisla[i];
        while (number / t != 0) {
            k += Math.floor(number / t);
            t *= prostyeChisla[i];
        }
        stInNumber.push(Math.floor(k));
    }

    console.log(stInNumber);

    var num = 0;
    for (var i = 0; i < prostyeChisla.length; i++) {
        if (num != 0 && stInNumber[i] / prostyeChisla[i] < num)
            num = stInNumber[i] / stInSystem[i];
        if (num == 0) {
            num = stInNumber[i] / stInSystem[i];
        }
    }

    // num=num-1;
        console.log(Math.floor(num));
  }
// getZerosCount(47);
getZerosCount(46899647, 232);
// console.log(prime(3));