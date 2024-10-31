function pancakeSort(array) {
    // Iterate from the end of the array to the start
    for (var i = array.length; i > 1; i--) {
        var maxIndex = findMax(array, i);
        // if the maxIndex is not at the end of the array
        if (maxIndex != i - 1) {
            // Flips maxIndex tot the front then to the end 
            flip(array, maxIndex);
            flip(array, i - 1);
        }
    }
    return array; 
}

// Flips the order the the elements from the start to n in the array 
function flip(array, n) {
    var start = 0;
    
    while (start < n) {
        // store element at start position
        var temp = array[start];
        // move element from n position to start 
        array[start] = array[n];
        //place temp element in n position
        array[n] = temp;
        // Move start and n index
        start++;
        n--;
    }
    return array; 
}

// Find the index of the largest element within the first n elements
function findMax(array, n) {
    var maxIndex = 0;
    // loop through the first n elements to find maxIndex
    for (var i = 0; i < n; i++) {
        // if the element in array[i] is greater than the element in array[maxIndex]
        if (array[i] > array[maxIndex]) {
            // assign element in position i to maxIndex 
            maxIndex = i;
        }
    }
    return maxIndex; 
}
