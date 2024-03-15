var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Arr = [
    4, 5, 1, 6, 40, 210, 20, 10, 100, 200, 20, 81920, 40, 7052, 6012, 2405,
];
var currentIndex = 1;
var max_index = 0;
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
var unsortedArr = [5, 1, 2, 10, 50, 200];
function selection_sort(unsortedArr) {
    for (var i = 0; i < unsortedArr.length - 1; i++) {
        var min_index = i;
        for (var j = i + 1; j < unsortedArr.length; j++) {
            if (unsortedArr[j] < unsortedArr[min_index]) {
                min_index = j;
            }
        }
        var tmp = unsortedArr[i];
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
        var pivot_1 = unsortedArr[0];
        var less = unsortedArr.filter(function (item) { return item < pivot_1; });
        var greater = unsortedArr.filter(function (item) { return item > pivot_1; });
        return __spreadArray(__spreadArray(__spreadArray([], quickSort(less), true), [pivot_1], false), quickSort(greater), true);
    }
}
var sortedArr = selection_sort(unsortedArr);
var quickSortedArr = quickSort(unsortedArr);
console.log(quickSortedArr);
var low = 0;
var high = sortedArr.length - 1;
function binary_search(low, high, item) {
    if (low > high) {
        return -1;
    }
    var mid = Math.round((low + high) / 2);
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
