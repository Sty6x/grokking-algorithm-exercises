#!/usr/bin/env node
"use strict";
const SORTED_ARR = [0, 1, 2, 3, 4];
function binary_search(arr, item) {
    let low = 0; // starting of the array;
    let high = SORTED_ARR.length - 1; // end of the array;
    while (low <= high) {
        let mid = (low + high) / 2; // middle of the array;
        let guess = arr[mid];
        if (mid < item) {
            low = mid + 1;
        }
        else if (mid > item) {
            high = mid - 1;
        }
        else {
            return mid;
        }
    }
}
const value = binary_search(SORTED_ARR, 5);
console.log(value);
