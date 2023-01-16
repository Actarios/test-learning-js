function min(a, b) {
    return (a > b) ? b : a
}

function pow(x, n) {
    let res =1
    for (let i = 1; i <= n; i++) {
        res *= x
    }

    return res
}

console.log( pow(1,100) )