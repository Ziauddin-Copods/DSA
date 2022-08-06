let result = 0, power = 1, factorial = 1;

const taylorSeries = (integer, exponent)=> {
    if(exponent === 0) {
        return 1
    } else {
        result = taylorSeries(integer, exponent-1);
        power = power*integer;
        factorial = factorial*exponent

        return result+(power/factorial);
    }
}

console.log(taylorSeries(3,10))