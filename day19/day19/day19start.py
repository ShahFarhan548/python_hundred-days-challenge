#from turtle import Turtle, Screen

# tim = Turtle()
# screen = Screen()
# def move_forward():
#     tim.forward(10)
# def move_Backword():
#     tim.back(10)
# def move_left():
#     tim.right(10)
# def move_right():
#     tim.left(10)
#
# screen.listen()
# screen.onkey(key="w", fun=move_forward)
# screen.onkey(key="s", fun=move_Backword)
# screen.onkey(key="a", fun=move_left)
# screen.onkey(key="d", fun=move_right)
#
# screen.exitonclick()


#------------------turtle race ----------------------
from turtle import Turtle, Screen
import  random
screen = Screen()

screen.setup(width= 500, height=400)
user_bet = screen.textinput (title="Make your bet ", prompt= "Which turtle you want to bet on? ")
turtle_colors =["red", "green", "yellow", "blue", "orange", "purple"]
y_positions = [170,110,50,-10,-70,-130]
all_turtles = []

for turtle_index in range(0,6):
    new_turtle = Turtle(shape="turtle")
    new_turtle.color(turtle_colors[turtle_index])
    new_turtle.penup()
    new_turtle.goto(x=-240, y=y_positions[turtle_index])
    all_turtles.append(new_turtle)


if user_bet :
    is_race_on = True

while is_race_on:
    for turtle in all_turtles:
        if turtle.xcor() > 230:
            is_race_on = False
            wining_turtle = turtle.pencolor()
            if wining_turtle == user_bet:
                print(f"you have won! the wining turtle is {wining_turtle} ")
            else:
                print(f" you have lost! the wining turtle is {wining_turtle} ")
        rand_distance = random.randint(0,10)
        turtle.forward(rand_distance)

screen.exitonclick()