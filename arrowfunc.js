const x = {
    name : 'harry',
    role : 'js developer',
    exp : 20,
//    show : function(){

//        let that = this 
//        // console.log (this)
//      setTimeout(function(){
    // here "this" is equal to a window object if we console this
    // thats the reason that we use that , and this gives us undefined in next line of code due to the window object
//           console.log ('the name is ', this.name ,'\n the role is ', that.role)
//        },2000)


show : function(){

    console.log (this)
    // here this 'this' is called the lexical this
    // time out is used for time delay in milli seconds
    setTimeout(()=>{
        // with the use of Arrow function this method calls the lexical (of enclosing executing context)
        //arrow function donot have their own this 
        console.log ('the name is ', this.name ,'\n the role is ', this.role)
    },2000)
    } 
}

x.show();