import { generateUniqueRandomArray } from "../helper/index.js";

const unsortedArray = generateUniqueRandomArray(10, 1, 1000);

function InsertionSort(elements) {
  for (let i = 1; i < elements.length; i++) {
    let currentElement = elements[i];
    let j = i - 1;

    while (j >= 0 && currentElement < elements[j]) {
      elements[j + 1] = elements[j];
      j--;
    }
    elements[j + 1] = currentElement;
  }
  return elements;
}

console.debug(InsertionSort(unsortedArray));
