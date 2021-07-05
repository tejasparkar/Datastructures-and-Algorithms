
const ob1 = {val : 1000};
const ob2 = ob1;
const obj3 = {val : 1000}
console.log(ob1 === ob2);
console.log(ob1 === obj3)

const obj4 = {
    val : 2000,
    a : function(){
        console.log(this)
    }
}

obj4.a()
