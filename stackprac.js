
class Stack {
    constructor(data = {}, count = 0) {
        this.data = data;
        this.count = count
    }

    //Push
    push = (value) => {
        this.data[this.count] = value;
        this.count++;
    }
    //Pop
    pop = () => {
        if (this.count === 0) return undefined;
        this.count--;
        delete this.data[this.count];

    }

    //Peek
    peek = () => {
        return this.data[this.count]
    }

    //Size
    size = () => {
        console.log(this.count)
    }

    //Print
    print = () => {
        console.log(this.data)
    }
}

const s1 = new Stack();
s1.push(100);
s1.push(200);
s1.push(300);
s1.push(400);
s1.print();
s1.pop();
s1.pop();
s1.peek();
s1.size();
s1.print();