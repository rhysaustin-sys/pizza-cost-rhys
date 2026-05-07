game.splash("Let's calculate the price of production for your pizza!")
let HST = game.askForNumber("What is the tax? (0.13)")
let Labour = 0.75
let Rent = 1
let Materials = 0
let Diameter = game.askForNumber("what is the diameter of your pizza? (In)")
Materials = 0.5 * Diameter
let Subtotal = Labour + Rent + Materials
let tax = Subtotal * HST
let total = Subtotal + tax
let total2 = total * 100
total2 = Math.round(total2)
total2 = total2 / 100
game.splash("The price of production for you pizza is:", "$" + total2)
