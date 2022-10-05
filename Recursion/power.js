function pow(m, n) {
    if(n === 0) return 1;

    return pow(m,n-1)*m;
}

function pow2(m, n) {
    if (n === 0) return 1;

    if (n % 2 === 0) {
        return pow2(m * m, n / 2);
    }

    return m * pow2(m * m, (n - 1) / 2);
}

console.log(pow2(2,9))