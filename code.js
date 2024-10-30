function pancakeSort(array) {
    for (var i = array.length; i > 1; i--) {
        var maxIndex = findMax(array, i);
        
        if (maxIndex != i - 1) {
            flip(array, maxIndex);
            flip(array, i - 1);
        }
    }
    return array; // Return sorted array.
}

function flip(array, n) {
    var start = 0;
    while (start < n) {
        var temp = array[start];
        array[start] = array[n];
        array[n] = temp;
        start++;
        n--;
    }
    return array; // Return modified array.
}

function findMax(array, n) {
    var maxIndex = 0;
    for (var i = 0; i < n; i++) {
        if (array[i] > array[maxIndex]) {
            maxIndex = i;
        }
    }
    return maxIndex; // Return index of max element.
}
