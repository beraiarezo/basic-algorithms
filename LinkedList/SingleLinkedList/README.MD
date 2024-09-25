# **Single Linked List**

<p>
A single linked list is a fundamental data structure used in computer science to store a collection of elements. Unlike arrays, which store elements in contiguous memory locations, a linked list consists of nodes where each node contains a data element and a reference (or link) to the next node in the sequence.
</p>

<br/>
<br/>
<br/>

## Single Linked List Visualization

![single-list](../public/gifs/single-list.gif)

<br/>
<br/>

## Single Linked List Description

> A single linked list is a data structure that allows for efficient insertion and deletion of elements. It starts with a head node, which points to the first element of the list. Each node in the list contains two parts: the data and a pointer (or link) to the next node. The last node in the list has a pointer that points to null, indicating the end of the list.

<br/>
<br/>

## Single Linked List Implementation

```
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
  }

  // Add a new node at the end of the list
  append(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Remove the first occurrence of a node with the specified data
  remove(data) {
    if (this.head === null) return;

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.data !== data) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }

  // Print all elements in the list
  print() {
    let current = this.head;
    while (current) {
      process.stdout.write(current.data + " ");
      current = current.next;
    }
    console.log();
  }
}
```

_To implement basic operations for a single linked list, follow these steps:_

- Appending: To add a new element to the list, create a new node and set its next pointer to null. If the list is empty, set the head to this new node. Otherwise, traverse to the end of the list and update the last node's next pointer to point to the new node.
- Removing: To remove an element, find the node with the specified data and update the next pointer of the previous node to bypass the node to be removed.
- Printing: Traverse through the list from the head, printing each node's data until the end of the list is reached.

<br />

### Time and Space Complexity

**Bubble Sort**: It performs well on small arrays or when the input array is nearly sorted.

| OPERATION           | Time Complexity | Space Complexity |
| ------------------- | --------------- | ---------------- |
| Insertion (at end)  | O(n)            | O(1)             |
| Deletion (by value) | O(n)            | O(1)             |
| Access (by index)   | O(n)            | O(1)             |
| Space Complexity    | O(n)            | O(1)             |

<br />
