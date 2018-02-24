
module.exports = function getZerosCount(number, base) {
   
    var prostyeChisla = new Array();
    var stInSystem = new Array();
    var stInNumber = new Array();

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

    for (var i = 2; i <= number; i++) {
        var tmp = i, n;
        for (var j = 0; j < prostyeChisla.length; j++) {
            if (stInNumber.length <= j) {
                n = 0;
            } else {
                n = stInNumber[j];
            }
            while (tmp % prostyeChisla[j] == 0) {
                tmp =tmp/prostyeChisla[j];
                n++;
            }
            if (stInNumber.length <= j) {
                stInNumber.push(n);
            } else {
                stInNumber[j]=n;
            }
        }

    }

    var num = 0;
    for (var i = 0; i < prostyeChisla.length; i++) {
        if (num != 0 && stInNumber[i]/prostyeChisla[i] < num)
            num = stInNumber[i]/stInSystem[i];
        if (num == 0) {
            num = stInNumber[i]/stInSystem[i];
        }
    }
   return Math.floor(num);
}

