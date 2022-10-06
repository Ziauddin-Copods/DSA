/**
 * We can solve this from using this formula nCr = n!/r!*(n-r)!
 * we can use factorial function either iterative or recursive
 * Order will be O(n) even we use factorial recursion.
 * 
 * Let's try using something new, Pascal's triangle.
 */

const C = (n, r) => {
    if (r === 0 || n === r) {
        return 1;
    }

    return C(n - 1, r - 1) + C(n - 1, r);
    
}

console.log(C(4,2))