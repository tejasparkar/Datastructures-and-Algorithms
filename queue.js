
//Queue using arrays

const queue = [];

const enqueue = (data) =>{
    queue.push(data)
}

const dequeue = () =>{
    queue.shift()
}

enqueue(100);
enqueue(200);
enqueue(300);
dequeue()
console.log(queue)