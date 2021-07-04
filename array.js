

const array = [3, 4, 1, 3, 2, 1];

const removeDuplicates = (array) => [... new Set(array)];

console.log(removeDuplicates(array))

const removeDuplicate = (array) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        console.log(result.indexOf(array[i]));
        if (result.indexOf(array[i]) === -1) result.push(array[i])
    }
    return result
}

console.log(removeDuplicate(array))

const res = array.filter((value ,index) => array.indexOf(value) === index)

console.log(res)