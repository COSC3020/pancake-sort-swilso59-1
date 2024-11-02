function pancakeSort(array) {
    // define maxIndex to find the index of the maximum element
    const maxIndex = (arr, n) => {
        let maxIdx = 0;
        for (let j = 0; j < n; j++) {
            if (arr[j] > arr[maxIdx]) {
                maxIdx = j;
            }
        }
        return maxIdx;
    };
    
    // iterate from the end of the array down to the start
    for (let i = array.length; i > 1; i--) {
        // use the maxIndex to find the max element's index in the unsorted portion
        let maxIdx = maxIndex(array, i);

        // if the maximum element is not already in the correct position
        if (maxIdx !== i - 1) {
            // flip maxIndex to the front if it's not already there
            if (maxIdx !== 0) {
                flip(array, maxIdx);
            }
            // flip the maximum element to its correct position in the unsorted section
            flip(array, i - 1);
        }
    }
    return array; 
}

// reverses the order of elements in the array from index 0 to index n
function flip(array, n) {
    let start = 0;
    // swap elements from the start and end moving towards the middle
    while (start < n) {
        let temp = array[start];
        array[start] = array[n];
        array[n] = temp;
        start++;
        n--;
    }
    return array; 
}
