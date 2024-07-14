const { number } = require("yargs");

const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {
    for (var dishes of dishData) {
        var finalPrice;
        if (taxBoolean == true)
        {
            // console.log("price of ",dishes.name," is :",dishes.price)
            finalPrice = dishes.price * tax;
            // console.log("final_price after tax is : ", finalPrice);
        }else if(taxBoolean == false)
        {
            finalPrice = dishes.price;
        }
        else
        {
            console.log("You need to pass a boolean to th getPrice call!")
            return 'jump out';
        }
        console.log(`Dish: ${dishes.name} Price: $${finalPrice}`);
    
    }
}

function getDiscount(taxBoolean, guests) {
    getPrices(taxBoolean);
    var veggies = ['parsley', 'carrot']
    console.log(veggies[2])

    // console.log(typeof(guests));
    // console.log(guests);
    // console.log(number);
    
    if (typeof guests == 'number' && guests>=0 && guests<=30)
    {
        var discount = 0;
        if (guests < 5)
        {
            discount = 5;
        } else if (guests >= 5)
        {
            discount = 10;
        }
        console.log("Discount is: $" + discount);
    } else
    {
        console.log("The second argument must be a number between 0 and 30");
    }
}

// getDiscount();
// getDiscount(true);
getDiscount(true,35);
 getDiscount(false,10);
// getDiscount(0,10);
// getDiscount(1,10);