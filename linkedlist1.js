class Node {
    constructor(data = {}, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //Insert At First
    insertAtFirst = (data) => {
        this.head = new Node(data, this.head);
        this.size++;
    }
    //Insert At Last
    insertAtLast = (data) => {
        let node = new Node(data);
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = node;
    }

    //Insert At Index
    insertAtIndex = (data, index) => {
        if (index === 1) {
            this.head = new Node(data, this.head);
            this.size++;
            return
        }
        let node = new Node(data);
        let current = this.head;
        let previous;
        let count = 1;
        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }
        previous.next = node;
        node.next = current;


    }

    //Remove At First
    removeAtFirst = () => {
        this.head = this.head.next;
        this.size--;
    }
    
    //Remove at Index
    removeAtIndex = (index) => {
        if(index === 1) {
            this.removeAtFirst();
            return
        }
        if(index > 0 && index < this.size){
            let current = this.head;
            let previous;
            let count = 1;
            while(count < index){
                previous = current;
                current = current.next;
                count++;
            }
            previous.next = current.next;
        } 
    }

    //Print List Data
    printList = () => {
        if (this.head === null) {
            console.log("Linked List is Empty");
            return
        }
        let current = this.head;
        while (current) {
            console.log(`Node : ${current.data}`);
            current = current.next;
        }
    }

}

const l1 = new LinkedList();
l1.insertAtFirst(100);
l1.insertAtFirst(200);
l1.insertAtFirst(300);
l1.insertAtLast(400);
l1.insertAtIndex(800, 1);
l1.insertAtIndex(700, 2);
l1.insertAtIndex(600, 3);
l1.insertAtIndex(500, 5);
l1.removeAtIndex(2);
l1.printList()