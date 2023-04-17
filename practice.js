/******************************** CONSTANTS *********************************/
const applePieRecipe = [
    { name: "pie crust", cost: 10.00, quantity: 1 },
    { name: "sugar", cost: 3.00, quantity: 0.5 },
    { name: "butter", cost: 1.00, quantity: 1 },
    { name: "apples", cost: 6.00, quantity: 7 },
    { name: "cinnamon", cost: 5.50, quantity: 1 },
    { name: "eggs", cost: 2.00, quantity: 1 },
];

const pumpkinPieRecipe = [
    { name: "pie crust", cost: 10.00, quantity: 1 },
    { name: "sugar", cost: 3.00, quantity: 0.5 },
    { name: "butter", cost: 1.00, quantity: 1 },
    { name: "pumpkin", cost: 3.75, quantity: 2 },
    { name: "cinnamon", cost: 5.50, quantity: 1 },
    { name: "eggs", cost: 2.00, quantity: 1 },
];

const cherryPieRecipe = [
    { name: "pie crust", cost: 10.00, quantity: 1 },
    { name: "sugar", cost: 3.00, quantity: 0.5 },
    { name: "butter", cost: 1.00, quantity: 1 },
    { name: "cherries", cost: 12.00, quantity: 10 },
    { name: "eggs", cost: 2.00, quantity: 1 },
];

const recipes = {
    applePie: applePieRecipe,
    pumpkinPie: pumpkinPieRecipe,
    cherryPie: cherryPieRecipe
};
/* DO NOT CHANGE THE CODE ABOVE */

/*************************** FUNCTION TO REFACTOR ****************************/
function bakeAndSellPies(pieType, pieQuantity, profitMargin) {
    //find the recipe of the pie type specified

    const recipe = recipes[pieType]
    bakePie(pieQuantity, recipe, pieType, profitMargin)
}

function bakePie(pieQuantity, recipe, pieType, profitMargin) {
    // bakes the number of pie specified by the piequantity

    for (let i = 0; i < pieQuantity; i++) {
        printpie(recipe, pieType, profitMargin)
    }
    costEach(recipe, pieQuantity, profitMargin)
}

function printpie(recipe, pieType, i, profitMargin) {
    let combiningMsg = `combining ingridients for ${pieType}:`
    combiningMsg += recipe.map(ingredient => ingredient.name).join(',')
    console.log(combiningMsg)

    //print the nth pie baked
    console.log(`baked pie ${i + 1}`);
}

function costEach(recipe, pieQuantity, profitMargin) {
    //print cost of pie based on current cost of ingredient
    const costOfPie = recipe.reduce((prev, current) => {
        return prev + current.cost
    }, recipe[0].cost)
    console.log(`cost of pie: ${costOfPie}`)
    totalcost(costOfPie, pieQuantity, profitMargin)
}

function totalcost(costOfPie, pieQuantity, profitMargin) {
    //calculates total cost of all pie
    const totalcost = costOfPie * pieQuantity
    totalrevenue(totalcost, pieQuantity, profitMargin)

}

function totalrevenue(totalcost, pieQuantity, profitMargin) {
    //print the total revenue given the profitmargin
    const revenue = totalcost * (profitMargin || 1.2);
    console.log(`sold ${pieQuantity} pies for $${revenue.toFixed(2)}!`)
}



/******************************* LOCAL TESTS *******************************/
bakeAndSellPies("applePie", 5, 2.5);
// bakeAndSellPies("pumpkinPie", 2);
// bakeAndSellPies("cherryPie", 7, 1.7);

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
    bakeAndSellPies
};
