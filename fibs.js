function fibs(n) {
    const arr = []
    while (arr.length < n) {
        if (arr.length < 2) {
            arr.push(arr.length)
        } else {
            arr.push(arr[arr.length -1] + arr[arr.length -2])
        }
    }
    return arr
}

console.log(fibs(8))
