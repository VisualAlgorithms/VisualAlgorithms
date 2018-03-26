// TODO: implement methods
class LinkedList {
    constructor() {
        // create dummy node (with null data and pointers to itself)
        this._dummy = new Node(null);
        this._size = 0;
    }

    // Adds a node at the end of the list
    add(object) {
        const node = new Node(object, this._dummy, this._dummy.prev);
        this._dummy.prev = node;
        ++this._size;
        if (this._size === 1)
            this._dummy.next = node;
        return true;
    }

    // TODO: implement
    addAll(linkedList) {
        return true;
    }

    // TODO: implement
    clear() {

    }

    // TODO: implement
    clone() {
        return new LinkedList();
    }

    // TODO: implement
    peek() {
        // first element
        return new Object();
    }

    // TODO: implement
    get(index) {
        return new Object();
    }

    // TODO: implement
    set(index, object) {
        return object;
    }

    // TODO: implement
    indexOf(object) {
        return 0;
    }

    // TODO: implement
    contains(object) {
        return true;
    }

    // TODO: implement
    isEmpty() {
        return true;
    }

    // TODO: implement
    remove(object) {
        return true;
    }

    // TODO: implement
    removeAll(linkedList) {
        return true;
    }

    // TODO: implement
    retainAll(linkedList) {
        return true;
    }

    // TODO: implement
    get size() {
        return this._size;
    }

    // TODO: implement
    toArray() {
        return [];
    }
}

// TODO: implement
class Node {
    constructor(data, next, prev) {
        this.data = data;

        if (next === undefined && prev === undefined) {
            this.next = this;
            this.prev = this;
        } else if (next === undefined || prev === undefined) {
            throw new Error('Node must point to next and prev Nodes');
        } else {
            this.next = next;
            this.prev = prev;
        }
    }
}