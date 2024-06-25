const generateRandomArray = require("../helper");

const unsortedArray = generateRandomArray(10, 1, 1000);

[29, 10, 14, 37, 14];

function BubbleSort(elements) {
  let length = elements.length;

  for (let i = 0; i < length - 1; i++) {
    let swaped = false;
    for (let j = 0; j < length - i - 1; j++) {
      if (elements[j] > elements[j + 1]) {
        const temporary = elements[j];
        elements[j] = elements[j + 1];
        elements[j + 1] = temporary;
        swaped = true;
      }
    }
    if (!swaped) break;
  }

  return elements;
}

console.debug(BubbleSort(unsortedArray));
