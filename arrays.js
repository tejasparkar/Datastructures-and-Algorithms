const strings = ['a','b','c','d'];

for (let [index, data] of strings.entries()) {
    console.log(index, data)
}


//Push Insert at last index of array

strings.push('o'); //O(1)
console.log("Push operation :",strings)

//Pop operation Remove from last index of array

strings.pop();
console.log("Pop operation" ,strings) //O(1)

//Unshift operation Insert at first index of array

strings.unshift('g'); //O(N)

console.log("Unshift operation ", strings)

//Shift operation is to remove element at first index of array

strings.shift(); //O(N)
 
console.log("shift operation" , strings)

//Splice 

strings.splice(1,1)
console.log(strings)

class Myarray {
    constructor(){
        this.length = 0;
        this.data = {}
    }
    get(index){
        return this.data[index]
    }
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length
    }
    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem
    }
    shift(){
        const firstItem = this.data[0];
        if(this.data === undefined){
            return undefined
        }
        else{
            delete this.data[0];
            this.length--;
            for(let i=0;i<this.length ; i++){
                
                
                this.data[i] = this.data[i+1];
                
                console.log('Val',i,this.data[i]);
                
                
            }
            // for(let j=0; j<this.length+1;j++){
            //     if(this.data[j] === undefined) {
            //         delete this.data[j]
            //     }
            // }
            delete this.data[this.length]
            console.log("Data",this.data)
            return firstItem;
        }
    }
}

const a1 = new Myarray();
a1.push("A");
a1.push("B");
a1.push("C");
console.log(a1.shift());
console.log(a1)


//Iteration 

for(var i=0; i<strings.length;i++){
    console.log(strings[i])
}

//Gives us the values 
for (let [index , data] of strings.entries()) {
    console.log(index , data)
}

//Gives us the index 
for (let [index] in strings) {                   
    console.log(index,strings[index])
}

//Find maximum element from an array
const ar= [2,4,5,1,6,3]
var max = ar[0];
var secondMax = ar[0];
for(let i=0; i<ar.length;i++){
    
    if(max < ar[i]){
        console.log(max,'swapped with ',ar[i]);
        secondMax = max;
        max = ar[i];
    }
}
console.log('Second Max from array is',secondMax)
console.log('Maximum from array is ',max)

var name = ['s','h','l','o','k','s'];
console.log(name)
var i = 0
console.log(i);
var j = name.length-1
console.log(j);
var temp;

while(i<j){
temp = name[i];
console.log(temp)
name[i] = name[j];
name[j] = temp ;
i++;
j--;
}

console.log(name)

var fibboseries = [];
var i = 0;
var first = 1;
var second = 1;
var third;
fibboseries.push(first);
fibboseries.push(second);
while(fibboseries.length<10){
    
    third = first + second;
    fibboseries.push(third);
    first = second;
    second = third;
    i++
}

console.log(fibboseries)

var a = [1,2,3,4,5,6,7];
var b = [8,9];

const c = a.concat(b);
console.log(c)