const fibonacciFunc = (terms) => {
    if (terms <= 1) return terms
    
    return fibonacciFunc(terms-1)+fibonacciFunc(terms-2)
}

let arr = []
const fib = n => {
    arr = new Array(n).fill(-1);

    return fib2(n);
}

const fib2 = n => {
    if (n <= 1) {
        arr[n] = n
        return n;
    } else {
        if (arr[n - 2] === -1) arr[n - 2] = fib2(n - 2);
        if (arr[n - 1] === -1) arr[n - 1] = fib2(n - 1);

        return arr[n-2]+arr[n-1]
    }
}

console.log(fibonacciFunc(4))
console.log(fib(4))