// working with object data structures in js

const result=[]; // declaring an array
const drone = {  // creating an object 
    speed : 100,
    color : 'red'
}
const droneKeys = Object.keys(drone);// saving the values of the drone object in droneKeys variable
droneKeys.forEach (function(key)// running foraEach method for each item of the droneKeys 
{
    result.push(key, drone[key]);// pushing the values to the results array
})

console.log(result);// displaying the values of the result array