const fibsRec = (n) => {
    if (n < 1) return 'Please provide a value greater than zero!';

    // Base case
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    // Recursive case
    return [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]];
};

console.log(fibsRec(1)); // Expected Result: [0]
console.log(fibsRec(2)); // Expected Result: [0, 1]
console.log(fibsRec(3)); // Expected Result: [0, 1, 1]
console.log(fibsRec(8)); // Expected Result: [0, 1, 1, 2, 3, 5, 8, 13]