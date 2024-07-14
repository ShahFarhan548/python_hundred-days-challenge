 # dictionary that contains the items
MENU = {
    "espresso": {
        "ingredients": {
            "water": 50,
            "coffee": 18,
        },
        "cost": 1.5,
    },
    "latte": {
        "ingredients": {
            "water": 200,
            "milk": 150,
            "coffee": 24,
        },
        "cost": 2.5,
    },
    "cappuccino": {
        "ingredients": {
            "water": 250,
            "milk": 100,
            "coffee": 24,
        },
        "cost": 3.0,
    }
}
profit = 0
resources = {
    "water": 300,
    "milk": 200,
    "coffee": 100
}


def is_resource_sufficient (order_ingridients):
    # check if there are sufficient items
    for item in order_ingridients:
        if order_ingridients[item] >= resources[item]:
            print(f"Sorry there is not enough {item}")
            return False
    return True


def process_coins():
    # takes coins from the user and find the total
    print("please insert your coins: ")
    total = int (input ("how many quarters: ")) * 0.25
    total += int (input ("how many dimes : ")) * 0.10
    total += int(input("how many nickles : ")) * 0.05
    total += int(input("how many pennies : ")) * 0.01
    return total


def is_transaction_successful(money_received, drink_cost):
    # check if the money is enough to make the order and return the change
    if money_received >= drink_cost:
        change = round(money_received - drink_cost,2)
        print(f"here is the change: ${change}")
        global profit
        profit += drink_cost
        return True
    else :
        print ("Sorry, there is not enough money. Money refunded.")
        return False


def make_cofee(drink):
    for item in drink:
        resources[item] -= drink[item]
    return


is_on = True
while is_on:
    next = input("what would you like (cappuccino/ latte / espresso) : ")

    if next == "report":
        print("                      ---========report========---             ")
        print(f"Water:  {resources['water']}ml")
        print(f"Milk:   {resources['milk']}ml")
        print(f"Coffee: {resources['coffee']}g")
        print(f"Money: ${profit}")

    elif next == "off":
        is_on = False

    else:
        drink = MENU[next]
        if is_resource_sufficient(drink['ingredients']):
            received_money = process_coins ()
            if is_transaction_successful (received_money, drink['cost']):
                make_cofee(drink['ingredients'])
                print(f"Here is your {next}, Have a good day")
            else:
                print("can't process, you dont have sufficient amount")



