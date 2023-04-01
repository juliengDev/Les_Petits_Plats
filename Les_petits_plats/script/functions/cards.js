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


//Variable Global
let htmlRecipes="";

/**
 * Fonction en charge de l'affichage par defaut de toutes les cards de recette au chargement de la page
 */
function defaultMainSearchDisplay(){
    //Suppression de l'ancien affichage des cards par default
    let cardContainer = document.getElementById('card-container');
    clearDisplay()
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
    let htmlDefaultIngredientsItemTab = createItemDropdown("htmlDefaultIngredientsItemTab");
    let htmlDefaultAppliancesItemTab = createItemDropdown("htmlDefaultAppliancesItemTab");
    let htmlDefaultUstensilsItemTab = createItemDropdown("htmlDefaultUstensilsItemTab");
}
function advancedSearchResultDisplay(){
    let htmlAdvancedIngredientsItemTab = createItemDropdown("htmlAdvancedIngredientsItemTab");
    let htmlAdvancedAppliancesItemTab = createItemDropdown("htmlAdvancedAppliancesItemTab");
    let htmlAdvancedUstensilsItemTab = createItemDropdown("htmlAdvancedUstensilsItemTab");
}

/**
 * Fonction en charge de l’affichage par défaut de l’ensemble des differents menu dropdown de filtres avances
 * @param tab
 * @returns {*[]}
 */
function createItemDropdown(tab){
    const htmlDefaultIngredientsItemTab = [];
    const htmlDefaultAppliancesItemTab =[];
    const htmlDefaultUstensilsItemTab = [];

    const htmlAdvancedIngredientsItemTab=[];
    const htmlAdvancedAppliancesItemTab=[];
    const htmlAdvancedUstensilsItemTab =[];

    const ingredientType = "ingredient";
    const applianceType = "appliance";
    const ustensilType = "ustensil"

    const dropdownMenuIngredients = document.querySelector('.dropdown-menu__options--ingredients')
    const dropdownMenuAppliances = document.querySelector('.dropdown-menu__options--appliances');
    const dropdownMenuUstensiles = document.querySelector('.dropdown-menu__options--utensils');

    // Cas par defaut
    if(tab === "htmlDefaultIngredientsItemTab") {
        recipes.forEach(element => {
            element.ingredients.forEach(data => {
                htmlDefaultIngredientsItemTab.push(data.ingredient.toLowerCase())
            })
        })
        stringSort(htmlDefaultIngredientsItemTab);
        let htmlIngredientsItems = removeDuplicates(htmlDefaultIngredientsItemTab);
        createHtmlElementItems(htmlIngredientsItems,dropdownMenuIngredients,ingredientType)

        return htmlIngredientsItems
    } else if (tab === "htmlDefaultAppliancesItemTab") {
        recipes.forEach(element => {
            htmlDefaultAppliancesItemTab.push(element.appliance.toLowerCase())
        })
        stringSort(htmlDefaultAppliancesItemTab);
        let htmlApplianceItems = removeDuplicates(htmlDefaultAppliancesItemTab)
        createHtmlElementItems(htmlApplianceItems,dropdownMenuAppliances,applianceType)

        return htmlApplianceItems
    } else if(tab === "htmlDefaultUstensilsItemTab"){
        recipes.forEach(element =>{
            element.ustensils.forEach(data => {
                htmlDefaultUstensilsItemTab.push(data.toLowerCase())
            })
        })
        stringSort(htmlDefaultUstensilsItemTab)
        let htmlUstensilsItems = removeDuplicates(htmlDefaultUstensilsItemTab)
        createHtmlElementItems(htmlUstensilsItems,dropdownMenuUstensiles,ustensilType)
        return htmlUstensilsItems
    }
    // Dans le cas d'une recherche principale
    if(tab === "htmlAdvancedIngredientsItemTab") {
        mainSearchResult.forEach(element => {
            element.ingredients.forEach(data => {
                htmlAdvancedIngredientsItemTab.push(data.ingredient.toLowerCase())
            })
        })
        stringSort(htmlAdvancedIngredientsItemTab);
        let htmlAdvancedIngredientsItems = removeDuplicates(htmlAdvancedIngredientsItemTab);
        createHtmlElementItems(htmlAdvancedIngredientsItems,dropdownMenuIngredients,ingredientType)

        return htmlAdvancedIngredientsItems
    } else if (tab === "htmlAdvancedAppliancesItemTab") {
        mainSearchResult.forEach(element => {
            htmlAdvancedAppliancesItemTab.push(element.appliance.toLowerCase())
        })
        stringSort(htmlAdvancedAppliancesItemTab);
        let htmlAdvancedApplianceItems = removeDuplicates(htmlAdvancedAppliancesItemTab)
        createHtmlElementItems(htmlAdvancedApplianceItems,dropdownMenuAppliances,applianceType)

        return htmlAdvancedApplianceItems
    } else if(tab === "htmlAdvancedUstensilsItemTab"){
        mainSearchResult.forEach(element =>{
            element.ustensils.forEach(data => {
                htmlAdvancedUstensilsItemTab.push(data.toLowerCase())
            })
        })
        stringSort(htmlAdvancedUstensilsItemTab)
        let htmlAdvancedUstensilsItems = removeDuplicates(htmlAdvancedUstensilsItemTab)
        createHtmlElementItems(htmlAdvancedUstensilsItems,dropdownMenuUstensiles,ustensilType)
        return htmlAdvancedUstensilsItems
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
function clearDisplay(){
    let cardContainer = document.getElementById('card-container');
    let advancedFilterIngredients = document.querySelector(".dropdown-menu__options--ingredients");
    let advancedFilterAppliances = document.querySelector(".dropdown-menu__options--appliances");
    let advancedFilterUstensils= document.querySelector(".dropdown-menu__options--utensils");
    while(cardContainer.firstChild) {
        cardContainer.removeChild(cardContainer.firstChild)
    }
    advancedFilterIngredients.innerHTML="";
    advancedFilterAppliances.innerHTML="";
    advancedFilterUstensils.innerHTML="";
}

/**
 * Fonction en charge de l’affichage renvoyer de l’ensemble des cards correspondant a la recherche principale
 */
function mainSearchDisplay(){
    let cardContainer = document.getElementById('card-container')
    //Suppression de l'ancien affichage des cards par default
    clearDisplay();

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

export {defaultMainSearchDisplay,defaultAdvanceSearchDisplay}
export {mainSearchDisplay,clearDisplay};
export {advancedSearchResultDisplay}