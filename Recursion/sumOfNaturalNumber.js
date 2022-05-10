function sumOfNaturalNumber(n) {
    if(n === 0) {
        return 0;
    }

    return sumOfNaturalNumber(n-1)+n;
}

console.log(sumOfNaturalNumber(4))
console.log(sumOfNaturalNumber(15))