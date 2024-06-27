# **Quick Sort**

<p>
Quicksort is a divide-and-conquer algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot.
</p>

<br/>
<br/>
<br/>

## Quick Sort Visualization

![Quick sort gif](../public/gifs/quick-sort.gif)

<br/>
<br/>

## Quick Sort Implementation

```
function Pivot(elements, start = 0, end = elements.length) {
  function swap(elements, i, j) {
    let tmp = elements[i];
    elements[i] = elements[j];
    elements[j] = tmp;
  }

  let currentElement = elements[start];
  let pivotIndex = start;
  for (let i = start + 1; i < end; i++) {
    if (currentElement > elements[i]) {
      pivotIndex++;
      swap(elements, pivotIndex, i);
    }
  }
  swap(elements, start, pivotIndex);
  return pivotIndex;
}

function QuickSort(elements, left = 0, right = elements.length) {
  if (left < right - 1) {
    let pivotIndex = Pivot(elements, left, right);

    QuickSort(elements, left, pivotIndex);
    QuickSort(elements, pivotIndex + 1, right);
  }

  return elements;
}
```

_To achieve quick sort, follow these steps:_

- Choose a value in the array to be the pivot element.
- Order the rest of the array so that lower values than the pivot element are on the left, and higher values are on the right.
- Swap the pivot element with the first element of the higher values so that the pivot element lands in between the lower and higher values.
- Do the same operations (recursively) for the sub-arrays on the left and right side of the pivot element.

<br />

### Time and Space Complexity

**Quick Sort**

| COMPLEXITY       | Base case                | Average                  | Worst            |
| ---------------- | ------------------------ | ------------------------ | ---------------- |
| Time Complexity  | O(n log<sub>10</sub>(n)) | O(n log<sub>10</sub>(n)) | O(N<sup>2</sup>) |
| Space Complexity | O(1)                     | O(1)                     | O(1)             |

<br />

#### Advantages

- It is a divide-and-conquer algorithm that makes it easier to solve problems.
- It is efficient on large data sets.
- It has a low overhead, as it only requires a small amount of memory to function.

#### Disadvantages

- It has a worst-case time complexity of O(n^2), which occurs when the pivot is chosen poorly.
- It is not a good choice for small data sets.
- It is not a stable sort, meaning that if two elements have the same key, their relative order will not be preserved in the sorted output in case of quick sort, because here we are swapping elements according to the pivot’s position (without considering their original positions).
