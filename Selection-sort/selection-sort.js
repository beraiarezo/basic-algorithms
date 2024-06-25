const generateRandomArray = require("../helper");

const unsortedArray = generateRandomArray(10, 1, 1000);

function SelectionSort(elements) {
  let length = elements.length;
  for (let i = 0; i < length; i++) {
    let swaped = false;
    for (let j = i + 1; j < length; j++) {
      if (elements[i] > elements[j]) {
        const temporary = elements[i];
        elements[i] = elements[j];
        elements[j] = temporary;
        swaped = true;
      }
    }
    if (!swaped) break;
  }
  return elements;
}

console.debug(SelectionSort(unsortedArray));
