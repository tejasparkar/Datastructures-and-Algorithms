//Shuffle String
const shuffle = (s, indices) => {
    let resArray = [];
    for (let i = 0; i < s.length; i++) {
        resArray[indices[i]] = s.charAt(i)
    }
    return resArray.join('').toString()


}
console.log(shuffle("aiohn", [3, 1, 4, 2, 0])) 


//Shuffle Array

const suffleArray = (array , n) => {
    const resArray = [];
    for (let i = 0, j = n; i < n, j < 2 *n; i++, j++) {
        resArray.push(array[i],array[j])
    }
    return resArray;
}

console.log(suffleArray([1,2,3,4,5,6],3))