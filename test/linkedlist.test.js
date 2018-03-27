const { expect } = chai;

describe('Linked List', function () {
    describe('constructor', function () {
        let ll;
        before(() => {
            ll = new LinkedList();
        });

        it('should have a head that points to itself', () => {
            expect(ll._dummy.next).to.equal(ll._dummy);
            expect(ll._dummy.prev).to.equal(ll._dummy);
            expect(ll._dummy.next.next).to.equal(ll._dummy);
            expect(ll._dummy.prev.prev).to.equal(ll._dummy);
        });
    });

    describe('add', function () {
        let ll;
        beforeEach(() => {
            ll = new LinkedList();
        });

        it('should add without crashing', () => {
            ll.add(5);
        });

        it('should add null without crashing', () => {
            ll.add(null);
        });

        it('should have a size of one', () => {
            ll.add(5);
            chai.expect(ll.size()).to.equal(1);
        });

        it('should put added element in list, at the end', () => {
            ll.add(5);
            chai.expect(ll._dummy.prev.data).to.equal(5);
        });

        it('should add 2 elements', () => {
            ll.add(5);
            ll.add(7);
            expect(ll._dummy.prev.data).to.equal(7);
            expect(ll._dummy.next.next.data).to.equal(7);
            expect(ll._dummy.next.data).to.equal(5);
            expect(ll._dummy.prev.prev.data).to.equal(5);
        });
    });

    describe('peek', () => {
        let ll;
        beforeEach(() => {
            ll = new LinkedList();
        });

        it('should peek at first element', () => {
            ll.add(5);
            ll.add(4);
            expect(ll.peek()).to.equal(5);
        });
    });

    describe('get', () => {
        let ll;
        beforeEach(() => {
            ll = new LinkedList();
        });

        it('should get correct element', () => {
            ll.add(5);
            ll.add(4);
            expect(ll.get(0)).to.equal(5);
            expect(ll.get(1)).to.equal(4);
        });
    });

    describe('indexOf', () => {
        let ll;
        beforeEach(() => {
            ll = new LinkedList();
            ll.add(5);
            ll.add(4);
            ll.add(6);
            ll.add(9);
        });

        it('should find element in list', () => {
            expect(ll.indexOf(5)).to.equal(0);
            expect(ll.indexOf(4)).to.equal(1);
            expect(ll.indexOf(6)).to.equal(2);
            expect(ll.indexOf(9)).to.equal(3);
        });

        it('should NOT find element in list', () => {
            expect(ll.indexOf(7)).to.equal(-1);
        });
    });

    describe('contains', () => {
        let ll;
        beforeEach(() => {
            ll = new LinkedList();
            ll.add(5);
            ll.add(4);
            ll.add(6);
            ll.add(9);
        });

        it('should contain elements in list', () => {
            expect(ll.contains(5)).to.equal(true);
            expect(ll.contains(4)).to.equal(true);
            expect(ll.contains(6)).to.equal(true);
            expect(ll.contains(9)).to.equal(true);
        });

        it('should NOT contain elements not in list', () => {
            expect(ll.contains(11)).to.equal(false);
            expect(ll.contains(null)).to.equal(false);
        });
    });

    describe('isEmpty', () => {
        let ll;
        beforeEach(() => {
            ll = new LinkedList();
        });

        it('should be empty after instantiating', () => {
            expect(ll.isEmpty()).to.equal(true);
        });

        it('should NOT be empty after adding', () => {
            ll.add('hello');
            expect(ll.isEmpty()).to.equal(false);
        });

        it('should be empty after removing the last element', () => {
            ll.add('hello');
            ll.remove('hello');
            expect(ll.isEmpty()).to.equal(true);
        });
    });

    describe('remove', () => {
        let ll;
        beforeEach(() => {
            ll = new LinkedList();
            ll.add(3);
            ll.add(-3);
            ll.add(5);
        });

        it('should remove an element that was in the list', () => {
            expect(ll.remove(-3)).to.equal(true);
        });

        it('should NOT remove an element that is NOT in the list', () => {
            expect(ll.remove(-9)).to.equal(false);
        });
    });

    describe('toArray', () => {
        let ll;
        beforeEach(() => {
            ll = new LinkedList();
            ll.add(5);
            ll.add(0);
            ll.add(null);
            ll.add(-5);
            ll.add(6);
        });

        it('should create an array', () => {
            expect(ll.toArray()).to.be.an('array');
        });

        it('should have as many elements as the list', () => {
            expect(ll.toArray()).to.have.lengthOf(5);
        });

        it('should have the correct elements in correct order', () => {
            expect(ll.toArray()).to.have.ordered.members([5, 0, null, -5, 6]);
        });
    });

    describe('clear', () => {
        let ll;
        beforeEach(() => {
            ll = new LinkedList();
            ll.add(5);
            ll.add(0);
            ll.add(null);
            ll.add(-5);
            ll.add(6);
        });

        it('should be in initial state after clear', () => {
            ll.clear();
            expect(ll.isEmpty()).to.equal(true);
            expect(ll._dummy.next).to.equal(ll._dummy);
            expect(ll._dummy.prev).to.equal(ll._dummy);
            expect(ll._dummy.next.next).to.equal(ll._dummy);
            expect(ll._dummy.prev.prev).to.equal(ll._dummy);
            expect(ll._dummy.data).to.equal(null);
        });
    });

    describe('addAll', () => {
        let ll;
        let ll2;
        beforeEach(() => {
            ll = new LinkedList();
            ll.add(5);
            ll.add(0);
            ll.add(null);
            ll.add(6);

            ll2 = new LinkedList();
            ll2.add(6);
            ll2.add(45);
            ll2.add(66);
            ll2.add(-46);
            ll2.add(6);
        });

        it('should contain number of elements === both lists number of elements', () => {
            ll.addAll(ll2);
            expect(ll.size()).to.equal(9);
        });
    });

    describe('clone', () => {
        let ll;
        beforeEach(() => {
            ll = new LinkedList();
            ll.add(5);
            ll.add(0);
            ll.add(null);
            ll.add(6);
        });

        it('needs to be implemented', () => {
            expect(true).to.equal(false);
        });
    });

    describe('set', () => {
        let ll;
        beforeEach(() => {
            ll = new LinkedList();
            ll.add(5);
            ll.add(0);
            ll.add(null);
            ll.add(6);
        });

        it('needs to be implemented', () => {
            chai.expect(true).to.equal(false);
        });
    });

    describe('removeAll', () => {
        let ll;
        beforeEach(() => {
            ll = new LinkedList();
            ll.add(5);
            ll.add(0);
            ll.add(null);
            ll.add(6);
        });

        it('needs to be implemented', () => {
            chai.expect(true).to.equal(false);
        });
    });

    describe('retainAll', () => {
        let ll;
        beforeEach(() => {
            ll = new LinkedList();
            ll.add(5);
            ll.add(0);
            ll.add(null);
            ll.add(6);
        });

        it('needs to be implemented', () => {
            expect(true).to.equal(false);
        });
    });

});

describe('Node', function () {
    it('should throw Error if not pointing to prev and next', () => {
        let error;
        let head = new Node(null);
        try {
            new Node(5, head);
        } catch (err) {
            error = err;
        }

        expect(error, 'node must point to prev and next nodes').to.not.equal(undefined);
    })
});