class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    //Insert at first
    insertAtFirst(data) {
        //  console.log('head before', this.head);
        this.head = new Node(data, this.head);
        // console.log('Head after insertion', this.head);
        this.size++;
    }

    //Remove at start
    removeAtFirst() {
        let headNode = this.head;
        this.head = headNode.next;
        this.size--;
    }

    //Insert at Last
    insertAtLast = (data) => {
        let node = new Node(data);
        // console.log(node);
        let current;
        // console.log("This is cl", this)
        if (!this.head) {
            this.head = node;
        }
        else {
            current = this.head;

            while (current.next) {
                current = current.next
            }
            current.next = node;
            this.size++

        }
    }

    //Delete at last
    removeAtLast() {

        let current = this.head;
        if (current.next === null) {
            this.head = null;
            return;
        }
        let previous;
        let count = 0;

        while (current) {
            previous = current;
            current = current.next;
            count++;

        }
        //  console.log("Remove current", current);
        //  console.log("Remove previous", previous);
        previous.next = null;
        this.size--;
    }

    getElementAt(index) {
        let current = this.head;
        console.log(this.head)
        let count = 0;
        while (count < index) {
            current = current.next;
            count++;
        }
        console.log(`Element at ${index} is ${current.data}`)
    }

    //Insert at Index
    insetAt(data, index) {

        //To check outofbound
        if (index > 0 && index > this.size) {
            return
        }
        //At 0 Index
        if (index === 0) {
            this.head = new Node(data);
            this.size++
        }
        const node = new Node(data);
        let current, previous;
        let count = 0;
        current = this.head;
        while (count < index) {
            previous = current;
            count++;
            current = current.next
        }
        //  console.log("Current", current, "Previous", previous);
        previous.next = node;
        node.next = current;
        this.size++

    }

    //Remove at Index
    removeAt(index) {
        console.log(index);
        let current = this.head;
        let previous;
        let count = 0;
        if (index === 0) {
            this.head = current.next;
            return;
        }
        while (count < index) {
            previous = current;
            count++;
            current = current.next
        }
        previous.next = current.next;
        current.next = null;
        this.size--
    }


    //Print list Data
    printListData() {
        let current = this.head;
        if (this.head === null) {
            console.log("No Elements in Linked List")
        }
        while (current) {
            console.log('Node :', current.data);
            current = current.next
        }
        console.log(this.size)

    }
}

const ll = new LinkedList();
ll.insertAtFirst(300);
ll.insertAtFirst(200);
ll.insertAtFirst(100);
ll.insetAt(400, 3);
ll.insertAtLast(500);
ll.printListData();

