// TODO: implement clone(), set(), removeAll(), and retainAll()

// Circular doubly-linked exogenous list with a dummy Node
export class LinkedList {
    constructor() {
        // Dummy Node has null data and prev / next pointers that point to itself
        this._dummy = new Node(null);
        this._size = 0;
        this.head = null;
    }

    // Adds a node containing 'obj' to the end of the list
    // O(n) time
    add(obj) {
        const d = this._dummy;
        const n = new Node(obj, d, d.prev);

        d.prev.next = n;
        d.prev = n;
        ++this._size;

        return true;
    }

    // Appends all of the elements in linkedList to the end of this list
    addAll(linkedList) {
        let n = linkedList._dummy.next;

        while (n !== linkedList._dummy) {
            this.add(n.data);
            n = n.next;
        }

        return true;
    }

    // Removes all elements from the list, returning it to the initial state.
    clear() {
        this._dummy.next = this._dummy;
        this._dummy.prev = this._dummy;
        this._size = 0;
    }

    // Returns a shallow copy of this LinkedList.
    clone() {
        let ll = new LinkedList();
        ll.addAll(this);
        return ll;
    }

    // Return first element without removing
    peek() {
        return this.get(0);
    }

    // Returns element at index without removing
    get(index) {
        if (index > this._size - 1)
            throw new Error('Invalid index');

        let n = this._dummy.next;

        for (let i = 0; i < index; ++i)
            n = n.next;

        return n.data;
    }

    // TODO: implement
    // Replaces the element at the specified position in this list with the specified element.
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

    //Returns and removes the first element of the linked list. 
    removeFirst() {
        if (this.size < 1)
            throw new Error('Invalid Operation: LinkedList is empty');

        let n = this._dummy.next;
        n.next.prev = n.prev;
        n.prev.next = n.next;
        --this._size;
        return this._dummy.next;
    }

    // Removes the element containing object, and returns true if successful, false if object was not found.
    remove(obj) {
        let n = this._dummy.next;

        while (n !== this._dummy) {
            if (n.data === obj) {
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
        let n = linkedList._dummy.next;

        while (n !== linkedList._dummy) {
            this.remove(n.data);
            n = n.next;
        }

        return true;
    }

    // TODO: implement
    retainAll(linkedList) {
        return true;
    }

    // Returns the number of elements in the list
    size() {
        return this._size;
    }

    // Returns an array with elements equal to those in the list in the same order.
    toArray() {
        let arr = [];
        let n = this._dummy.next;

        while (n !== this._dummy) {
            arr.push(n.data);
            n = n.next;
        }

        return arr;
    }
}

export class Node {
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