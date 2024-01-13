const fibs = (n) => {
    if (n < 1) return 'Please provide a value greater than zero!';
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    const array = [0, 1];
    for (let i = 3; i <= n; i++) {
        array.push(array[array.length - 2] + array[array.length - 1]);
    }
    return array;
};

console.log(fibs(1)); // Expected Result: [0]
console.log(fibs(2)); // Expected Result: [0, 1]
console.log(fibs(3)); // Expected Result: [0, 1, 1]
console.log(fibs(8)); // Expected Result: [0, 1, 1, 2, 3, 5, 8, 13]