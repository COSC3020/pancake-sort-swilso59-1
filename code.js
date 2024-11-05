function pancakeSort(array) {
    // Define maxIndex to find the index of the maximum element in the first n elements
    const maxIndex = (arr, n) => {
        let maxIdx = 0;
        for (let j = 0; j < n; j++) {
            if (arr[j] > arr[maxIdx]) {
                maxIdx = j;
            }
        }
        return maxIdx;
    };
    
    // Iterate from the end of the array down to the start
    for (let i = array.length; i > 1; i--) {
        // Use maxIndex to find the max element's index in the unsorted portion
        let maxIdx = maxIndex(array, i);

        // If the maximum element is not already in the correct position
        if (maxIdx !== i - 1) {
            // Flip maxIdx to the front if it's not already there
            if (maxIdx !== 0) {
                flip(array, maxIdx + 1);  // Flip the first maxIdx + 1 elements
            }
            // Flip the maximum element to its correct position in the unsorted section
            flip(array, i);
        }
    }
    return array; 
}

// Reverses the order of elements in the array from index 0 up to index n - 1
function flip(array, n) {
    // Ensure n does not exceed the length of the array
    if (n > array.length) {
        n = array.length;
    }

    let start = 0;
    // Swap elements from start to n - 1
    while (start < n - 1) {
        let temp = array[start];
        array[start] = array[n - 1];
        array[n - 1] = temp;
        start++;
        n--;
    }
    return array;
}
