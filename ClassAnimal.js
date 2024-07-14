class Animal{
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
    // methods are defined without function key word
    
    CanSwim(){
        console.log('this is the only animal that can swim')
    }
}

anima.CanSwim();
// for creating an obj to a class is of two ways 
// var Dog = object.create(Animal)
// var Dog = new Animal()
