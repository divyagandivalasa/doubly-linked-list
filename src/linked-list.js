const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        if (this.isEmpty()) {
            this._head = new Node(data);
            this._tail = new Node(data);
        } else {
            this.insertAt(this.length, data);
        }
        this.length++;
        return this;
    }

    head() {
        return this._head ? this._head.data : null;
    }

    tail() {
        return this._tail ? this._tail.data : null;
    }

    at(index) {
        var node = this._head;
        var count = 1;
        while (count <= index) {
            node = node.next;
            count ++;
        }
        return node.data;
    }

    insertAt(index, data) {
        var node = this._head;
        var count = 1;
        
        if (index > this.length) {
            throw new Error('Cannot insert at ' + index + ' as it is more than the length of LL');
        } else {
            if (this.length === 0) {
                return this.append(data);
            }
        }
        
        while (count < index) {
            node = node.next;
            count ++;
        }
        var newNode = new Node(data);
        newNode.prev = node;
        if(index === this.length) {
            this._tail = newNode;
        } else {
            newNode.next = node.next;
        }
        node.next = newNode;
    }

    isEmpty() {
        return this.length === 0;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        if (this.length > 1) {
            var node = this._head;
            var count = 1;
            while (count < index) {
                node = node.next;
                count ++;
            }
            node.prev.next = node.next;
        } else {
            this.clear();
        }
        return this;
    }

    reverse() {
        if(this.length > 1) {
            var node = this._tail;
            while(node.prev !== null) {
                node.next = node.prev;
                node = node.next;
            }
            this._head = this._tail;
            this._tail = node;
        }
        return this;
    }

    indexOf(data) {
        var node = this._head;
        var count = 0;
        while (count < this.length) {
            if (node.data === data) {
                return count;
            }
            node = node.next;
            count ++;
        }
        return -1;
    }
}

module.exports = LinkedList;
