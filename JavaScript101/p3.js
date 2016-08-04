var largestPrimeFactor = function(number){ 

for (i = 2; i <= number; i++) {
            if (number % i == 0) {
                number /= i;
                i--;
            }
        }
        return i;
}

console.log(largestPrimeFactor(600851475143));