
const string = "racecar";

const reverse = [...string].reverse().join('');

const rev1 = string.split('').reverse().join('');

console.log(rev1)


console.log(reverse)

//Merge arrays

const array1 = [1,2,3,4,5,6];
const array2 = [7,8,9,0];

const mergeAndSort =(a1,a2) =>{
   
    a1.forEach((data)=>{
        array2.push(data)
    })

    return a2.sort((a,b)=>a-b);

} 

console.log(mergeAndSort(array1,array2))

var str = 'naresh';
var character = [...str];
console.log(character)
var temp;
var j = character.length-1;
var i = 0;
while(i<j){
        temp = character[i];
        console.log(temp)
        character[i] = character[j];
        console.log(character[i],character[j])
        character[j]= temp;
        console.log(character[j])
        i++;
        j--; 
}

console.log(character.join())

