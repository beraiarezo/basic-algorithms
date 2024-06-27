import { generateUniqueRandomArray } from "../helper/index.js";

const unsortedArray = generateUniqueRandomArray(10, 1, 1000);

function BubbleSort(elements) {
  let length = elements.length;

  for (let i = 0; i < length - 1; i++) {
    let swaped = false;

    for (let j = 0; j < length - i - 1; j++) {
      if (elements[j] > elements[j + 1]) {
        [elements[i], elements[j]] = [elements[j], elements[i]];
        swaped = true;
      }
    }
    if (!swaped) break;
  }

  return elements;
}

console.debug(BubbleSort(unsortedArray));
