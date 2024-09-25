class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value)
        if(this.root === null) {
            this.root = node;
            return;
        }

        let tmp = this.root

        while(true) {
            if(tmp.value === node.value) {
                return false;
            }
            if(node.value > tmp.value && tmp.right !== null) {
                tmp = tmp.right
            } else if(node.value > tmp.value && tmp.right == null) {
                tmp.right = node;
                return this;
            } else if(node.value < tmp.value && tmp.left !== null) {
                tmp = tmp.left
            } else {
                tmp.left = node;
                return this;
            }
        }
    }

    find(value) {
        if(this.root.value === null) {
            return "Does not exists";
        }


        let tmp = this.root,
            found = false;

        while(tmp && !found) {
            if(value > tmp.value) {
                tmp = tmp.right
            } else if(value < tmp.value) {
                tmp = tmp.left
            } else {
                found = true
            }
        }

        return tmp === null ? undefined : tmp

    }
}

let tree = new BinarySearchTree()
tree.root = new Node(10)


tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16);
tree.insert(7);
tree.insert(12);
console.log(tree.find(100));