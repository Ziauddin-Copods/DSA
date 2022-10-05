let result = 0, power = 1, factorial = 1, s=1;

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

const taylorSeriesByHornerRule = (integer, exponent) => {
    if (exponent === 0) return s
    
    s = 1 + (integer / exponent) * s;

    return taylorSeriesByHornerRule(integer, exponent-1)
}

console.log(taylorSeries(1,10))
console.log(taylorSeriesByHornerRule(1,10))