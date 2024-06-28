import { generateUniqueRandomArray } from "../helper/index.js";

const unsortedArray = generateUniqueRandomArray(10, 1, 20);

function CountingSort(elements) {
  const max = Math.max(...elements);

  let countArray = new Array(max + 1).fill(0);

  for (let i = 0; i < elements.length; i++) {
    countArray[elements[i]]++;
  }

  let output = [];

  for (let i = 0; i < max; i++) {
    while (countArray[i] > 0) {
      output.push(i);
      countArray[i]--;
    }
  }

  return output;
}

console.debug(CountingSort(unsortedArray));
