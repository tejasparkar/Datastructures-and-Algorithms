
class Player{
    constructor(name, type){
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
p1.play()
p1.intro()