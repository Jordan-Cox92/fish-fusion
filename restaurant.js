

const fishingBoat = require("./fishingBoat.js") 

const inventory = fishingBoat.boatInventory()


const fishMonger = require("./fishMonger.js") 
const mongInventory = fishMonger.mongerInventory(inventory, 7.5)




const fishMenu = (chefMaxPrice) => { 
    let htmlString = "" 
    
    for (const fishOfDay of mongInventory) { 
        if (chefMaxPrice >= fishOfDay.price) {
            htmlString += `<h1>Menu</h2>\n
            <article class="menu">
                <h2>${fishOfDay.species}</h2>\n
                <section class="menu_item">${fishOfDay.species} Soup</section>\n
                <section class="menu_item">${fishOfDay.species} Sandwich</section>\n
                <section class="menu_item">Grilled ${fishOfDay.species}</section>\n
            </article>\n`
        }   
    }
    return htmlString  
}

const todaysFood = fishMenu(4) 
console.log(todaysFood)


exports.fishMenu = fishMenu 





