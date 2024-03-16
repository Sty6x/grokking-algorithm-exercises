#!/usr/bin/env node
"use strict";
// find the smallest value, keep track of it.
// put it in the front, swapping it with the first value.
// start scanning from the second card find the minimum value. and swap
const arr = [45, 6, 1, 20, 1, 100, 44];
function selection_sort(Arr) {
    const length = Arr.length;
    for (let i = 0; i < length - 1; i++) {
        let min_index = i;
        for (let j = min_index + 1; j < length; j++) {
            if (arr[j] < arr[min_index]) {
                min_index = j;
            }
        }
        const tmp = arr[i];
        arr[i] = arr[min_index];
        arr[min_index] = tmp;
    }
    console.log(arr);
}
selection_sort(arr);
