const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
    }

    append(data) {
        if (this.length === 0) {
            this._head = new Node(data);
            this._tail = new Node(data);
        } else {
            this.insertAt(this.length, data);
        }
        this.length++;
    }

    head() {
        return this._head ? this._head.data : null;
    }

    tail() {
        return this._tail ? this._tail.data : null;
    }

    at(index) {
        var pos = 0,
            node = this._head;
        while(pos < index) {
            node = node.next;
            pos++;
        }
        return node.data;
    }

    insertAt(index, data) {
        var pos = 0,
            node;
        var newNode = new Node(data);
        while(pos < index) {
            if (pos === 0) {
                node = this._head;
            } else {
                node = node.next;
            }
            pos++;
        }
        var nextNode;
        if (pos === this.length) {
            nextNode = this._tail;
        } else {
            nextNode = node.next;
        }
        newNode.next = node.next;
        node.next = newNode;
        newNode.prev = node;
        nextNode.prev = newNode;
        if (index === this.length) {
            this._tail = nextNode;
        }
    }

    isEmpty() {
        return this.length == 0;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    deleteAt(index) {
        var pos = 0,
            node;
        while(pos < index) {
            if (pos === 0) {
                node = this._head;
            } else {
                node = node.next;
            }
            pos++;
        }
        node.prev.next = node.next;
    }

    reverse() {
    }

    indexOf(data) {
        var pos = 0;
        var node = this._head;
        while(pos < this.length) {
            if (node.data === data) {
                return pos;
            } else {
                node = node.next;
            }
            pos++;
        }
        return -1;
    }
}

module.exports = LinkedList;
