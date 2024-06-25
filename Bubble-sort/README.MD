# ** Bubble Sort **

## Bubble Sort Visualization

![Bubble sort gif](../public/gifs/bubble-sort.gif)

## Bubble Sort Description

> Bubble sort is a sorting algorithm that starts from the first element of an array and compares it with the second element. If the first element is greater than the second, we swap them. It continues this process until the end of the array, with the largest elements “bubbling” to the top.

## Bubble Sort Implementation

```
function BubbleSort(elements) {
  let length = elements.length;

  let c = 0;
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
```
