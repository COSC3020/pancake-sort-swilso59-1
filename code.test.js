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
    let expected1 = [5, 4, 3, 2, 1];
    console.assert(resultCheck(array1, expected1), "Test Case 1 Failed");

    // Test Case 2: Flip the first two elements in the array
    let array2 = [1, 2, 3, 4, 5];
    flip(array2, 2);  
    let expected2 = [2, 1, 3, 4, 5];
    console.assert(resultCheck(array2, expected2), "Test Case 2 Failed");

    // Test Case 3: Flip the first three elements in an empty array (no change expected)
    let array3 = [];
    flip(array3, 3);  
    let expected3 = [];
    console.assert(resultCheck(array3, expected3), "Test Case 3 Failed");

    // Test Case 4: Flip the first element only (no change expected)
    let array4 = [2, 4, 6, 8, 10];
    flip(array4, 1);  
    let expected4 = [2, 4, 6, 8, 10];
    console.assert(resultCheck(array4, expected4), "Test Case 4 Failed");

    // Test Case 5: Flip 0 elements (no change expected)
    let array5 = [10, 20, 30, 40, 50];
    flip(array5, 0);  
    let expected5 = [10, 20, 30, 40, 50];
    console.assert(resultCheck(array5, expected5), "Test Case 5 Failed");

    // Test Case 6: Flip all elements when n is greater than array length
    let array6 = [1, 2, 3, 4, 5];
    flip(array6, 8);
    let expected6 = [5, 4, 3, 2, 1];
    console.assert(resultCheck(array6, expected6), "Test Case 6 Failed");

    // Test Case 7: Flip a single-element array
    let array7 = [7];
    flip(array7, 1);
    let expected7 = [7];
    console.assert(resultCheck(array7, expected7), "Test Case 7 Failed");

    // Test Case 8: Flip an array with duplicate values
    let array8 = [3, 3, 3, 3, 3];
    flip(array8, 5);
    let expected8 = [3, 3, 3, 3, 3];
    console.assert(resultCheck(array8, expected8), "Test Case 8 Failed");

    // Test Case 9: Flip halfway through the array
    let array9 = [1, 2, 3, 4, 5, 6];
    flip(array9, 3);
    let expected9 = [3, 2, 1, 4, 5, 6];
    console.assert(resultCheck(array9, expected9), "Test Case 9 Failed");

    // Test Case 10: Flip an array with negative numbers
    let array10 = [-1, -2, -3, -4, -5];
    flip(array10, 3);
    let expected10 = [-3, -2, -1, -4, -5];
    console.assert(resultCheck(array10, expected10), "Test Case 10 Failed");

    console.log("All test cases completed.");
}

// Run the testFlip function
testFlip();

//  Funtion to Check if arrays are equal
function resultCheck(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }       
    }
    return true;
}
