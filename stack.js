class Stack {
    constructor(data = {}, count = 0) {
        this.data = data;
        this.count = count;
    }

    push(value) {
        this.data[this.count] = value;
        this.count++;
    }

    pop() {
        if (this.count === 0) {
            return undefined
        }
        this.count--;
        var result = this.data[this.count];
        delete this.data[this.count];
        return result
    }
    size() {
        return this.count;
    }

    peek() {
        return this.data[this.count - 1]
    }
}

const s1 = new Stack();

s1.push(10);
s1.push(20)
s1.push(30)
s1.push(40)
console.log(s1)
console.log("Peek at top of stack", s1.peek())
console.log("Popped", s1.pop());
s1.push("Hello World is full of foos");
console.log(s1.peek())
console.log(s1)
s1.pop();
s1.pop();
s1.pop();
console.log(s1)