function fibsRec(n) {
    if (n <= 2) return n == 2 ? [0, 1] : [0]
    const seq = fibsRec(n - 1)
    return seq.concat([seq[seq.length - 1] + seq[seq.length - 2]])
}

console.log(fibsRec(8))
