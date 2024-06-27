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

_To achieve quick sort, follow these steps:_

- Go through the array, one value at a time.
- For each value, compare the value with the next value.
- If the value is higher than the next one, swap the values so that the highest value comes last.
- Go through the array as many times as there are values in the array.

<br />

### Time and Space Complexity

**Bubble Sort**: It performs well on small arrays or when the input array is nearly sorted.
| COMPLEXITY | Base case | Average | Worst |
|---------------|--------|-------------| --------------|
| Time Complexity | O(n) | O(n<sup>2<sup>) | O(n<sup>2<sup>) |
| Space Complexity | O(1) | O(1) | O(1) |

<br />
