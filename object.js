
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

class Player{
    constructor(name, type){
        console.log('Player',this);
        this.name = name;
        this.type = type;
    }
    intro(){
        console.log(`${this.name} belongs to ${this.type}`)
    }
}

class Wizard extends Player{
    constructor(name,type){
        
        super(name,type);
        console.log('Wizard',this)
    }
    play(){
        console.log(`WEEEEEEEEEEEEEEEEEE I am ${this.type}`)
    }
}

const p1 = new Wizard('Shlok','Salazar');
