// using the spread operator(...)three dot
// feature of ES6
let top3= ["Karachi", "lahore", "peshawar"];
function showIternary(place1, place2, place3)
{
    console.log("please give a visit to :"+place1)
    console.log("then please give a visit to :"+place2)
    console.log("then please give a visit to :"+place3)
}

// showIternary(top3[0],top3[1],top3[2]);
//now using the spread operator
showIternary(...top3);