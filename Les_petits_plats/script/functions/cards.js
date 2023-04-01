import {recipes} from "../recipes.js";
import {stringSort,removeDuplicates} from  "./createArray.js"
import {mainSearchResult} from  "./nominal.js"
const [{
    appliance,
    description,
    id,
    ingredients:[{ingredient, quantity, unit}],
    name,
    servings,
    time,
    ustensils,
}] = recipes;

console.log(mainSearchResult)
//Variable Global
let htmlRecipes="";

/**
 * Fonction en charge de l'affichage par defaut de toutes les cards de recette au chargement de la page
 */
function defaultMainSearchDisplay(){
    //Suppression de l'ancien affichage des cards par default
    let cardContainer = document.getElementById('card-container');
    while(cardContainer.firstChild) {
        cardContainer.removeChild(cardContainer.firstChild)
    }
    recipes.forEach( recipe => {
        //Container principal des Cards

        // Creation des elements HTML
        let cardContainerCards = document.createElement('div');
        let cardImage = document.createElement('div');
        let cardBody = document.createElement('div');
        let descriptionIngredients = document.createElement('div');

        //Modification des elements HTML
        cardContainerCards.classList.add("card-container__card", "card", "box", "box-1", "grid-item");
        cardImage.classList.add("card-img-top", "card-container__card-img");
        cardBody.classList.add("card-body", "card-container__card-body");
        descriptionIngredients.classList.add("col-6", "card-container__card-description-ingredients");

        htmlRecipes = `
        <div class="card-container__card-title">
         <h2 id="recipeName">${recipe.name}</h2>
         <div class="card-container__card-title-timer">
             <i class="bi bi-clock font-weight-bold"></i>
             <p id="recipeTime">${recipe.time} min</p>
         </div>
        </div>
        <div class="card-container__card-description">
        <div class="col-6 card-container__card-description-ingredients">`;

        recipe.ingredients.forEach(ingredient => {
            htmlRecipes += `<p><span id ="ingredientName" class="bold">${ingredient.ingredient} :</span> <span id="ingredientQuantity">${ingredient.quantity ?? ""}</span> <span id="ingredientUnit">${ingredient.unit ?? ""}</span></p>`
        })

        htmlRecipes +=`
         </div>
         <div class="col-6 card-container__card-description-texte">
              <p id="descriptionRecipe">${recipe.description}</p>
         </div>
         </div>`;

        //Ajout des elements HTML
        cardBody.innerHTML= htmlRecipes;
        cardContainer.appendChild(cardContainerCards);
        cardContainerCards.appendChild(cardImage);
        cardContainerCards.appendChild(cardBody);

    })

}

/**
 * Fonction en charge de l’affichage par defaut de l’ensemble des differents menu dropdown de filtres avances
 */
function defaultAdvanceSearchDisplay() {
    let htmlIngredientsItemTab = createItemDropdown("htmlIngredientsItemTab");
    let htmlAppliancesItemTab = createItemDropdown("htmlAppliancesItemTab");
    let htmlUstensilsItemTab = createItemDropdown("htmlUstensilsItemTab");
}

/**
 * Fonction en charge de l’affichage par défaut de l’ensemble des differents menu dropdown de filtres avances
 * @param tab
 * @returns {*[]}
 */
function createItemDropdown(tab){
    const htmlIngredientsItemTab = [];
    const htmlAppliancesItemTab =[];
    const htmlUstensilsItemTab = [];
    const ingredientType = "ingredient";
    const applianceType = "appliance";
    const ustensilType = "ustensil"

    const dropdownMenuIngredients = document.querySelector('.dropdown-menu__options--ingredients')
    const dropdownMenuAppliances = document.querySelector('.dropdown-menu__options--appliances');
    const dropdownMenuUstensiles = document.querySelector('.dropdown-menu__options--utensils');

    if(tab === "htmlIngredientsItemTab") {
        recipes.forEach(element => {
            element.ingredients.forEach(data => {
                htmlIngredientsItemTab.push(data.ingredient.toLowerCase())
            })
        })
        stringSort(htmlIngredientsItemTab);
        let htmlIngredientsItems = removeDuplicates(htmlIngredientsItemTab);
        // console.log(htmlIngredientsItems)
        createHtmlElementItems(htmlIngredientsItems,dropdownMenuIngredients,ingredientType)

        return htmlIngredientsItemTab
    } else if (tab === "htmlAppliancesItemTab") {
        recipes.forEach(element => {
            htmlAppliancesItemTab.push(element.appliance.toLowerCase())
        })
        stringSort(htmlAppliancesItemTab);
        let htmlApplianceItems = removeDuplicates(htmlAppliancesItemTab)
        // console.log(htmlApplianceItems)
        createHtmlElementItems(htmlApplianceItems,dropdownMenuAppliances,applianceType)

        return htmlApplianceItems
    } else if(tab === "htmlUstensilsItemTab"){
        recipes.forEach(element =>{
            element.ustensils.forEach(data => {
                htmlUstensilsItemTab.push(data.toLowerCase())
            })
        })
        stringSort(htmlUstensilsItemTab)
        let htmlUstensilsItems = removeDuplicates(htmlUstensilsItemTab)
        // console.log(htmlUstensilsItems)
        createHtmlElementItems(htmlUstensilsItems,dropdownMenuUstensiles,ustensilType)
    }
}

/**
 * Fonction en charge de la creation des elements HTML a afficher dans les filtres avances
 * @param tab
 * @param menu
 * @param type
 */
function createHtmlElementItems(tab,menu,type){
    tab.forEach(element => {
        let htmlItem = document.createElement('li');

        if(type === "ingredient") {
            htmlItem.classList.add("dropdown-menu__option-item","dropdown-menu__option-item--ingredients")
        }else if(type === "appliance") {
            htmlItem.classList.add("dropdown-menu__option-item","dropdown-menu__options-item--appliances");
        } else if(type ==="ustensil"){
            htmlItem.classList.add("dropdown-menu__option-item","dropdown-menu__options-item--utensils")
        }
        htmlItem.innerText += element;
        menu.appendChild(htmlItem);
    })
}

/**
 * Fonction en charge de l’affichage renvoyer de l’ensemble des cards correspondant a la recherche principale
 */
function mainSearchDisplay(){
    //Suppression de l'ancien affichage des cards par default
    let cardContainer = document.getElementById('card-container')
    while(cardContainer.firstChild) {
        cardContainer.removeChild(cardContainer.firstChild)
    }

    mainSearchResult.forEach( recipe => {

        //Creation des elements HTML

        let cardContainerCards = document.createElement('div');
        let cardImage = document.createElement('div');
        let cardBody = document.createElement('div');
        let descriptionIngredients = document.createElement('div');

        //Modification des elements HTML
        cardContainer.classList.add("card-container", "grid");
        cardContainerCards.classList.add("card-container__card", "card", "box", "box-1", "grid-item");
        cardImage.classList.add("card-img-top", "card-container__card-img");
        cardBody.classList.add("card-body", "card-container__card-body");
        descriptionIngredients.classList.add("col-6", "card-container__card-description-ingredients");

        htmlRecipes = `
        <div class="card-container__card-title">
         <h2 id="recipeName">${recipe.name}</h2>
         <div class="card-container__card-title-timer">
             <i class="bi bi-clock font-weight-bold"></i>
             <p id="recipeTime">${recipe.time} min</p>
         </div>
        </div>
        <div class="card-container__card-description">
        <div class="col-6 card-container__card-description-ingredients">`;

        recipe.ingredients.forEach(ingredient => {
            htmlRecipes += `<p><span id ="ingredientName" class="bold">${ingredient.ingredient} :</span> <span id="ingredientQuantity">${ingredient.quantity ?? ""}</span> <span id="ingredientUnit">${ingredient.unit ?? ""}</span></p>`
        })

        htmlRecipes +=`
         </div>
         <div class="col-6 card-container__card-description-texte">
              <p id="descriptionRecipe">${recipe.description}</p>
         </div>
         </div>`;

        //Ajout des elements HTML
        cardBody.innerHTML= htmlRecipes;
        cardContainer.appendChild(cardContainerCards);
        cardContainerCards.appendChild(cardImage);
        cardContainerCards.appendChild(cardBody);

        }
    )
}

export function initCards(){
    defaultMainSearchDisplay();
    defaultAdvanceSearchDisplay();
}

export {defaultMainSearchDisplay,mainSearchDisplay};