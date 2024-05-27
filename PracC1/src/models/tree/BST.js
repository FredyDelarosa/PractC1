import Node from "./Node.js";

class BST {
    #root;

    constructor() {
        this.#root = null;
    }

    add(value) {
        if (this.#root == null) {
            this.#root = new Node(value);
            return this.#root !== null;
        } else {
            return this.insertNode(this.#root, value);
        }
    }

    insertNode(node, value) {
        if (value.age < node.value.age) {
            if (node.left == null) {
                node.left = new Node(value);
                return node.left !== null;
            } else {
                return this.insertNode(node.left, value);
            }
        } else {
            if (node.right == null) {
                node.right = new Node(value);
                return node.right !== null;
            } else {
                return this.insertNode(node.right, value);
            }
        }
    }

    search(predicate) {
        function searchNode(node) {
            if (node === null) {
                return null;
            }
            if (predicate(node.value)) {
                return node.value;
            }
            let leftSearch = searchNode(node.left);
            if (leftSearch !== null) {
                return leftSearch;
            }
            return searchNode(node.right);
        }
        return searchNode(this.#root);
    }

    findMin() {
        function findMinNode(node) {
            return node.left === null ? node.value : findMinNode(node.left);
        }
        return this.#root ? findMinNode(this.#root) : null;
    }

    findMax() {
        function findMaxNode(node) {
            return node.right === null ? node.value : findMaxNode(node.right);
        }
        return this.#root ? findMaxNode(this.#root) : null;
    }

    inOrderTraversal() {
        let result = [];
        
        function traverse(node) {
            if (node !== null) {
                traverse(node.left);
                result.push(node.value);
                traverse(node.right);
            }
        }
        
        traverse(this.#root);
        return result;
    }
}

export default BST;
