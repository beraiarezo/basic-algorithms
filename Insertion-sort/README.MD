# **Insertion Sort**

<p>
Insertion sort is a simple sorting algorithm that works by iteratively inserting each element of an unsorted list into its correct position in a sorted portion of the list. It is a stable sorting algorithm, meaning that elements with equal values maintain their relative order in the sorted output.
</p>

<br/>
<br/>
<br/>

## Insertion Sort Visualization

![Bubble sort gif](../public/gifs/insertion-sort.gif)

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

_To achieve insertion sort, follow these steps:_

- We have to start with second element of the array as first element in the array is assumed to be sorted.
- Compare second element with the first element and check if the second element is smaller then swap them.
- Move to the third element and compare it with the second element, then the first element and swap as necessary to put it in the correct position among the first three elements.
- Continue this process, comparing each element with the ones before it and swapping as needed to place it in the correct position among the sorted elements.
- Repeat until the entire array is sorted.

<br />

### Time Complexity

**Insertion Sort**: Best case O(n), average case O(n^2), worst case O(n^2). It performs well on small arrays or when the input array is nearly sorted.

<br />

### Space Complexity

O(1)
