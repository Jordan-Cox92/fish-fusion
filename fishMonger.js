const fishingBoat = require("./fishingBoat.js") //import and invoke?? the function that is exported by the fishing boat module.
//console.log(fishingBoat.boatInventory) //works! shows inventory
const inventory = fishingBoat.boatInventory()


const mongerInventory = (fishOptionsFromBoat, chefBudgetInput) => {
    let arrayOfMongerOptions = []
        for (fishObject of fishOptionsFromBoat) {
             if (fishObject.amount > 10 && fishObject.price <= 7.50 && fishObject.price <= chefBudgetInput) {
                arrayOfMongerOptions.push(fishObject)     //Works! adds fish that meet above criteria to arrayOfMongerOptions
                }
            fishObject.amount = 10
        }   
        return arrayOfMongerOptions //returned inventory should be an array of objects
}


exports.mongerInventory = mongerInventory 



