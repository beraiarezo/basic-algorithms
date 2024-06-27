import { generateUniqueRandomArray } from "../helper/index.js";

const unsortedArray = generateUniqueRandomArray(10, 1, 1000);

function swap(elements, i, j) {
  [elements[i], elements[j]] = [elements[j], elements[i]];
}

function SelectionSort(elements) {
  for (let i = 0; i < elements.length - 1; i++) {
    let min_element_index = i;
    for (let j = i + 1; j < elements.length; j++) {
      if (elements[j] < elements[min_element_index]) {
        min_element_index = j;
      }
    }
    if (min_element_index !== i) {
      swap(elements, i, min_element_index);
    }
  }
  return elements;
}

console.log(SelectionSort(unsortedArray));
