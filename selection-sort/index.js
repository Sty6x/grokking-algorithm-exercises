#!/usr/bin/env node
// find the smallest value, keep track of it.
// put it in the front, swapping it with the first value.
// start scanning from the second card find the minimum value. and swap
var arr = [45, 6, 1, 20, 1, 100, 44];
function selection_sort(Arr) {
    var length = Arr.length;
    for (var i = 0; i < length; i++) {
        var min_index = i;
        for (var j = min_index + 1; j < length; j++) {
            if (arr[j] < arr[min_index]) {
                min_index = j;
            }
        }
        var tmp = arr[i];
        arr[i] = arr[min_index];
        arr[min_index] = tmp;
    }
    console.log(arr);
}
selection_sort(arr);
