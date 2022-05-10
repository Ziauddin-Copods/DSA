function factorialOfANumber(n) {
    if(n===1) {
        return 1;
    }

    return factorialOfANumber(n-1)*n
}

console.log(factorialOfANumber(5))