/**
 * BinarySearch performs a binary search on a sorted array to find the target value.
 * @param {number[]} arr - A sorted array of numbers to search through.
 * @param {number} target - The target number to find in the array.
 * @returns {number} - The index of the target in the array, or -1 if the target is not found.
 */

function BinarySeach(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // Return -1 if the target is not found
  return -1;
}
