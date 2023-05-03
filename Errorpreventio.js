
function addTwoNums(a,b){
    
    try{
        if (typeof(a)!= 'number'){
            throw new ReferenceError('first argumnet is not a number ')
        }else if(typeof(b)!= 'number') {
            throw new ReferenceError('the first argument is not a number')
        }else{
        console.log(a + b);
        }
    }catch(err){
        console.log("Error! ",err)
    }
}

addTwoNums(4, '3')
console.log('this still works, code is running')

