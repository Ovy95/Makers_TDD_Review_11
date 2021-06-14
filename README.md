# Makers_TDD_Review_11

Update this with the Review task
Calucation of strings which will return sum of the values 
```
Input       ||        Output 
1st Phase of Tests

1st Test Addition 
("1 + 1")   ||        ["1 + 1", 2]

2nd Test Subtraction 
("5 - 4")   ||        ["5 - 4", 1]

3 test Multiplication 
("3 * 3")   ||        ["3 * 3", 9]


4th Tests Division
("16 / 4")    ||        ["16 / 4", 4]
```

```

2nd Phase of testing more then one operator involved
Input              ||        Output 
2st Phase of Tests

Addition 
("1 + 2 + 3")      ||        ["1 + 2 + 3", 6]

Subtraction 
("20 - 10 - 5")    ||        ["20 - 10 - 5", 5]

Multiplication 
("2 * 2 * 2")      ||        ["2 * 2 * 2", 8]

Division
("27 / 3 / 3")     ||        ["27 / 3 / 3", 3]

```


3rd phase Mixed 
"10 * 2 + 1"

Floats as Inputs
Floats outputs 
divide by 0 


Edges cages 

No spaces in Ints => MathError "Input must be a valid mathematical string separated by spaces
divide by 0 ZeroDivisionError "divided by zero"
Empty String =>      ["", 0]
one value String =>  ["1", 1]