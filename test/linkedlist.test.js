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