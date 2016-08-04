var evenFiboSum = 2;
var currentTerm = 1;
var nextTerm = 2;
var termHolder = 0;

while (evenFiboSum < 4000000){
    termHolder = nextTerm;
    nextTerm = currentTerm+nextTerm;
    currentTerm = termHolder;
    if (nextTerm%2 === 0){
    evenFiboSum += nextTerm;
    }
}

console.log(evenFiboSum);