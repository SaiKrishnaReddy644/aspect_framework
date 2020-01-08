// let Node = {
//     data:undefined,
//     left: null,
//     right: null,
//     setData(data){
//         this.data=data
//     },
// }

class BTree {
    constructor() {
        this.root = null;
    }
    append(data) {

         var newNode=new Node(data)
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
    remove(data) {
        this.root = this.removeNode(this.root, data);
    }
    removeNode(node, key) {

        if (node === null)
            return null;

        else if (key < node.data) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (key > node.data) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }

            var aux = this.findMinNode(node.right);
            node.data = aux.data;
            node.right = this.removeNode(node.right, aux.data);
            return node;
        }

    }
    displayInorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }
    displayPreorder(node) {
        if (node != null) {
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }
    search(node, data) {
        // if trees is empty return null
        if (node === null)
            return null;

        // if data is less than node's data
        // move left
        else if (data < node.data)
            return this.search(node.left, data);

        // if data is less than node's data
        // move left
        else if (data > node.data)
            return this.search(node.right, data);

        // if data is equal to the node data
        // return node
        else
            return node;
    }
    getRootNode() {
        return this.root;
    }
    findMinNode(node) {
        // if left of a node is null
        // then it must be minimum node
        if (node.left === null)
            return node;
        else
            return this.findMinNode(node.left);
    }

}


class Node
{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// var a=new BTree()

// a.append(1)
// a.append(2)
// a.append(3)
// console.log(a)

module.exports = {
    BTree
}