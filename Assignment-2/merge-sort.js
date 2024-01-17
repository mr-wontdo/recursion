const mergeSort = (array) => {
    if (array.length === 0) return 'Please provide a non-empty array!';

    // Base case
    if (array.length === 1) return array;
    
    // Recursive case
    const leftArray = array.splice(0, Math.floor(array.length / 2));
    return merge(mergeSort(leftArray), mergeSort(array));
};

const merge = (leftArray, rightArray) => {
    const mergedArray = [];
    while (leftArray.length > 0 && rightArray.length > 0) {
        if (leftArray[0] < rightArray[0]) {
            mergedArray.push(leftArray.shift());
        } else if (leftArray[0] > rightArray[0]) {
            mergedArray.push(rightArray.shift());
        } else if (leftArray[0] === rightArray[0]) {
            mergedArray.push(leftArray.shift());
        }
    }
    mergedArray.concat(leftArray, rightArray);
    return mergedArray.concat(leftArray, rightArray);
};

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([105, 79, 100, 110])); // [79, 100, 105, 110]