function mergeSort(arr) {
    if (arr.length == 1) return arr;
    const leftHalve = mergeSort(arr.slice(0, arr.length / 2))
    const rightHalve = mergeSort(arr.slice(arr.length / 2, arr.length))
    const mergedArr = []
    while (mergedArr.length < arr.length) {
        if (leftHalve[0] < rightHalve[0] || rightHalve[0] == undefined) mergedArr.push(leftHalve.shift())
        else mergedArr.push(rightHalve.shift())
    }
    return mergedArr
}

console.log(mergeSort([105, 79, 100, 110]))
