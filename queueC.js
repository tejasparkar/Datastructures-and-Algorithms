class Queue {
    constructor(data={},count=0){
        this.data = data;
        this.count= count;
    }

    enqueue(value){
        this.data[this.count] = value;
        this.count++;
    }
    dequeue(){
        if(this.count === 0) return undefined;
        this.count--;
        const res = this.data[0];
        delete this.data[0];
        return res
    }

}

const q = new Queue();
q.enqueue(100);
q.enqueue(200);
q.enqueue(300);
q.enqueue(400);
q.enqueue(500);
q.enqueue(600)
console.log(q.data)
