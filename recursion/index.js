"use strict";
const Arr = [
    4, 5, 1, 6, 40, 210, 20, 10, 100, 200, 20, 81920, 40, 7052, 6012, 2405,
];
let currentIndex = 1;
let max_index = 0;
function findMax(arr, currentIndex) {
    if (arr[currentIndex] === undefined) {
        return arr[max_index];
    }
    else {
        if (arr[currentIndex] > arr[max_index]) {
            max_index = currentIndex;
            return findMax(arr, currentIndex + 1);
        }
        return findMax(arr, currentIndex + 1);
    }
}
// Binary search
// get the middle low and high
// every iteration get middle and update low OR high
const unsortedArr = [5, 1, 2, 10, 50, 200];
function selection_sort(unsortedArr) {
    for (let i = 0; i < unsortedArr.length - 1; i++) {
        let min_index = i;
        for (let j = i + 1; j < unsortedArr.length; j++) {
            if (unsortedArr[j] < unsortedArr[min_index]) {
                min_index = j;
            }
        }
        const tmp = unsortedArr[i];
        unsortedArr[i] = unsortedArr[min_index];
        unsortedArr[min_index] = tmp;
    }
    return unsortedArr;
}
function quickSort(unsortedArr) {
    if (unsortedArr.length < 2) {
        return unsortedArr;
    }
    else {
        let pivot = unsortedArr[0];
        let less = unsortedArr.filter((item) => item < pivot);
        let greater = unsortedArr.filter((item) => item > pivot);
        return [...quickSort(less), pivot, ...quickSort(greater)];
    }
}
const sortedArr = selection_sort(unsortedArr);
const quickSortedArr = quickSort(unsortedArr);
console.log(quickSortedArr);
let low = 0;
let high = sortedArr.length - 1;
function binary_search(low, high, item) {
    if (low > high) {
        return -1;
    }
    let mid = Math.round((low + high) / 2);
    if (sortedArr[mid] === item) {
        return sortedArr[mid];
    }
    else {
        if (sortedArr[mid] > item) {
            high = mid - 1;
            return binary_search(low, high, item);
        }
        else if (sortedArr[mid] < item) {
            low = mid + 1;
            return binary_search(low, high, item);
        }
    }
}
console.log(binary_search(low, high, 200));
