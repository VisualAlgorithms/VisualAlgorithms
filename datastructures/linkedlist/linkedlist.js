// TODO: implement methods
class LinkedList {
    constructor() {
        // create dummy node with null data and pointers to itself
        this.head = new Node(null);
        this.head.next = this.head;
        this.head.prev = this.head;

        this.size = 0;
    }

    test() {
        let n = new Node('test');
    }

    // TODO: implement
    add(object) {
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
    size() {
        return 0;
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
        this.next = next;
        this.prev = prev;
        console.log('new node created');
    }
}