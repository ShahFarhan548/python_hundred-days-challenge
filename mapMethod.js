// map method (after Filter and forEach methods)

const nums =[0, 10, 20, 30 ,40, 50];
// oneTenth function divides each value of the nums array by 10
function oneTenth (num)
{
    return num/10;
}
// here we call the map method by passing it the oneTenth function .
// it maps each array item over the other array item based on whatever the task it is assigned in the function
console.log(nums.map(oneTenth));