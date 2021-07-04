class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //Insert at first
    insertAtFirst = (data) => {
        this.head = new Node(data,this.head); 
        this.size++;
    }
}

const l1 = new LinkedList();
l1.insertAtFirst(100);
console.log(l1)
l1.insertAtFirst(200)
console.log(l1.head)