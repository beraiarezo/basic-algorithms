# **Bubble Sort**

<p>
Bubble sort is a basic algorithm for arranging a string of numbers or other elements in the correct order. The method works by examining each set of adjacent elements in the string, from left to right, switching their positions if they are out of order.
</p>

<br/>
<br/>
<br/>

## Bubble Sort Visualization

![Bubble sort gif](../public/gifs/bubble-sort.gif)

<br/>
<br/>

## Bubble Sort Description

> Bubble sort is a sorting algorithm that starts from the first element of an array and compares it with the second element. If the first element is greater than the second, we swap them. It continues this process until the end of the array, with the largest elements “bubbling” to the top.

<br/>
<br/>

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

<br />

### Time Complexity

**Bubble Sort**: Best case O(n), average case O(n^2), worst case O(n^2). It performs well on small arrays or when the input array is nearly sorted.

<br />

### Space Complexity

O(1)
