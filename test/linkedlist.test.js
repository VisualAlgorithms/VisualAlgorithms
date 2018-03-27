describe('Linked List', function () {
    describe('constructor', function () {
        let ll;
        before(() => {
            ll = new LinkedList();
        });

        it('should have head that points to itself', () => {
            expect(ll._dummy.next).to.equal(ll._dummy);
            expect(ll._dummy.prev).to.equal(ll._dummy);
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

        it('should add null with out crashing', () => {
            ll.add(null);
        });

        it('should have a size of one', () => {
            ll.add(5);
            expect(ll.size).to.equal(1);
        });

        it('should put added element in list, at the end', () => {
            ll.add(5);
            expect(ll._dummy.prev.data).to.equal(5);
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
            expect(ll.contains(5)).to.be(true);
            expect(ll.contains(4)).to.be(true);
            expect(ll.contains(6)).to.be(true);
            expect(ll.contains(9)).to.be(true);
        });

        it('should NOT contain elements not in list', () => {
            expect(ll.contains(11)).to.be(false);
            expect(ll.contains(null)).to.be(false);
        });
    });

    describe('isEmpty', () => {
        let ll;
        beforeEach(() => {
            ll = new LinkedList();
        });

        it('should be empty after instantiating', () => {
            expect(ll.isEmpty()).to.be(true);
        });

        it('should NOT be empty after adding', () => {
            ll.add('hello');
            expect(ll.isEmpty()).to.be(false);
        });

        it('should be empty after removing the last element', () => {
            ll.add('hello');
            ll.remove('hello');
            expect(ll.isEmpty()).to.be(true);
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
            expect(ll.remove(-3)).to.be(true);
        });

        it('should NOT remove an element that is NOT in the list', () => {
            expect(ll.remove(-9)).to.be(false);
        });
    });
});

describe('Node', function () {
    it('should point to next and prev Nodes', () => {
        let head = new Node(null);
        let n = new Node(5, head, head);
    })

    it('should throw Error', () => {
        let error;
        let head = new Node(null);
        try {
            new Node(5, head);
        } catch (err) {
            error = err;
        }

        expect(error).to.not.be(undefined);
    })
});