const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const testSort =
    jsc.forall("array nat", function(arr) {
        var a1 = JSON.parse(JSON.stringify(arr));
        var a2 = JSON.parse(JSON.stringify(arr));
        return JSON.stringify(pancakeSort(a1)) ==
            JSON.stringify(a2.sort(function(a, b)
                { return a - b; }));
    });

jsc.assert(testSort);

// test flip
function testFlip() {
    // Test Case 1: Flip all elements in the array
    let array1 = [1, 2, 3, 4, 5];
    flip(array1, 5);  
    console.log(array1);  // Expected output: [5, 4, 3, 2, 1]
    
    // Test Case 2: Flip the first two elements in the array
    let array2 = [1, 2, 3, 4, 5];
    flip(array2, 2);  
    console.log(array2);  // Expected output: [2, 1, 3, 4, 5]
    
    // Test Case 3: Flip the first three elements in the empty array
    let array3 = [];
    flip(array3, 3);  
    console.log(array3);  // Expected output: []
    
    // Test Case 4: Flip the first element only (no change expected)
    let array4 = [2, 4, 6, 8, 10];
    flip(array4, 1);  
    console.log(array4);  // Expected output: [2, 4, 6, 8, 10]
    
    // Test Case 5: Flip 0 elements (no change expected)
    let array5 = [10, 20, 30, 40, 50];
    flip(array5, 0);  
    console.log(array5);  // Expected output: [10, 20, 30, 40, 50]

    // Test Case 6: Flip all elements when n is greater than array length
    let array6 = [1, 2, 3, 4, 5];
    flip(array6, 8);
    console.log(array6); // Expected output: [5, 4, 3, 2, 1]
}

testFlip();
