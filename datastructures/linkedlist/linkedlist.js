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
        this._dummy.prev.next = node;
        this._dummy.prev = node;
        ++this._size;
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

    // return first element without removing
    peek() {
        return this.get(0);
    }

    // returns element at index without removing
    get(index) {
        if (index > this._size - 1)
            throw new Error('Invalid index');

        let n = this._dummy.next;

        for (let i = 0; i < index; ++i)
            n = n.next;

        return n.data;
    }

    // TODO: implement
    set(index, object) {
        return object;
    }

    // Returns the index of the first occurence of object in the list
    indexOf(object) {
        let n = this._dummy.next;
        let index = 0;

        while (n !== this._dummy) {
            if (n.data === object)
                return index;
            ++index;
            n = n.next;
        }

        return -1;
    }

    // Returns true if object is in the list
    contains(object) {
        return this.indexOf(object) !== -1;
    }

    // Returns true if there are no elements in the list
    isEmpty() {
        return this._size === 0;
    }

    // TODO: implement
    remove(object) {
        let n = this._dummy.next;

        while (n !== this._dummy) {
            if (n.data === object) {
                n.next.prev = n.prev;
                n.prev.next = n.next;
                --this._size;
                return true;
            }
            n = n.next;
        }

        return false;
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
