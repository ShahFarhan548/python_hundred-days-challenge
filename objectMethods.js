//creating an object named as car
var car ={};
// one property of car is its color
car.color = "red";
car.mileage = 98748;
//function as a property of object is termed as a method
car.turnkey = function (){
    console.log('egine running');
}
car.lightsOn = function (){
    console.log('lights are on');
}
//envoking the lights on method.
car.lightsOn();

//displaying the whole object
console.log (car);