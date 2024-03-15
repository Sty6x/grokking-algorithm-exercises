const Arr = [
  4, 5, 1, 6, 40, 210, 20, 10, 100, 200, 20, 81920, 40, 7052, 6012, 2405,
];

let currentIndex = 1;
let max_index = 0;
function findMax(arr: Array<number>, currentIndex: number) {
  if (arr[currentIndex] === undefined) {
    return arr[max_index];
  } else {
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
function selection_sort(unsortedArr: Array<number>): Array<number> {
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

function quickSort(unsortedArr: Array<number>): Array<number> {
  if (unsortedArr.length < 2) {
    return unsortedArr;
  } else {
    let pivot = unsortedArr[0];
    let less: Array<number> = unsortedArr.filter(
      (item: number) => item < pivot,
    );
    let greater: Array<number> = unsortedArr.filter(
      (item: number) => item > pivot,
    );
    return [...quickSort(less), pivot, ...quickSort(greater)];
  }
}

const sortedArr = selection_sort(unsortedArr);
const quickSortedArr = quickSort(unsortedArr);
console.log(quickSortedArr);
let low = 0;
let high = sortedArr.length - 1;
function binary_search(low: number, high: number, item: number) {
  if (low > high) {
    return -1;
  }

  let mid = Math.round((low + high) / 2);
  if (sortedArr[mid] === item) {
    return sortedArr[mid];
  } else {
    if (sortedArr[mid] > item) {
      high = mid - 1;
      return binary_search(low, high, item);
    } else if (sortedArr[mid] < item) {
      low = mid + 1;
      return binary_search(low, high, item);
    }
  }
}
console.log(binary_search(low, high, 200));
