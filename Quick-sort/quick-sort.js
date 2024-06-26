import { generateUniqueRandomArray } from "../helper/index.js";

const unsortedArray = generateUniqueRandomArray(10, 1, 1000);

function Pivot(elements, start = 0, end = elements.length) {
  function swap(elements, i, j) {
    let tmp = elements[i];
    elements[i] = elements[j];
    elements[j] = tmp;
  }

  let currentElement = elements[start];
  let pivotIndex = start;
  for (let i = start + 1; i < end; i++) {
    if (currentElement > elements[i]) {
      pivotIndex++;
      swap(elements, pivotIndex, i);
    }
  }
  swap(elements, start, pivotIndex);
  return pivotIndex;
}

function QuickSort(elements, left = 0, right = elements.length) {
  if (left < right - 1) {
    let pivotIndex = Pivot(elements, left, right);

    QuickSort(elements, left, pivotIndex);
    QuickSort(elements, pivotIndex + 1, right);
  }

  return elements;
}

console.debug(QuickSort(unsortedArray));
