import { generateUniqueRandomArray } from "../helper/index.js";

const unsortedArray = generateUniqueRandomArray(10, 1, 1000);

function merge(arr1, arr2) {
  let left = 0,
    right = 0,
    newArr = [];

  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] < arr2[right]) {
      newArr.push(arr1[left]);
      left++;
    } else {
      newArr.push(arr2[right]);
      right++;
    }
  }

  while (left < arr1.length) {
    newArr.push(arr1[left]);
    left++;
  }

  while (right < arr2.length) {
    newArr.push(arr2[right]);
    right++;
  }

  return newArr;
}

function MergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  let mid = Math.floor(array.length / 2);
  let left = MergeSort(array.slice(0, mid));
  let right = MergeSort(array.slice(mid));

  return merge(left, right);
}

console.debug(MergeSort(unsortedArray));
