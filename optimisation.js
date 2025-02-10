function containsDuplicate(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                return true;
            }
        }
    }
    return false;
}

function containsDuplicateSmart(array) {
    const set = new Set();
    for (const value of array) {
        if (set.has(value)) {
            return true;
        }
        set.add(value);
    }
    return false;
}

function findCommonElements(array1, array2) {
    let commonElements = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                commonElements.push(array1[i]);
            }
        }
    }
    return commonElements;
}

function findCommonElementsSmart(array1, array2) {
    const set1 = new Set(array1);
    const commonElements = array2.filter(value => set1.has(value));
    return commonElements;
}

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciSmart(n, memo = {}) {
    if (n <= 1) return n;
    if (memo[n]) return memo[n];
    memo[n] = fibonacciSmart(n - 1, memo) + fibonacciSmart(n - 2, memo);
    return memo[n];
}

function runTestSuite() {
    const algorithms = [
        { name: 'containsDuplicate', func: containsDuplicate, params: [[1, 2, 3, 4, 5, 1]] },
        { name: 'containsDuplicateSmart', func: containsDuplicateSmart, params: [[1, 2, 3, 4, 5, 1]] },
        { name: 'findCommonElements', func: findCommonElements, params: [[1, 2, 3], [3, 4, 5]] },
        { name: 'findCommonElementsSmart', func: findCommonElementsSmart, params: [[1, 2, 3], [3, 4, 5]] },
        { name: 'fibonacci', func: fibonacci, params: [20] },
        { name: 'fibonacciSmart', func: fibonacciSmart, params: [20] }
    ];

    const iterations = 1000;
    const results = [];

    algorithms.forEach(algorithm => {
        let totalTime = 0;

        for (let i = 0; i < iterations; i++) {
            const start = performance.now();
            algorithm.func(...algorithm.params);
            const end = performance.now();
            totalTime += (end - start);
        }

        const averageTime = totalTime / iterations;
        results.push({ name: algorithm.name, averageTime });
        console.log(`Average time for ${algorithm.name}: ${averageTime.toFixed(4)} ms`);
    });

}

runTestSuite();