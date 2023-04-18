import {removeDuplicates} from "./array.js"
import {setupEventCreateTags} from "./tags.js";
import {recipesToDisplay} from "./algo.js";


//Variable globale
let htmlRecipes="";
/**
 * Permet l’affichage des cards
 */
function recipesDisplay(){
    const errorMessage = document.querySelector('.search-bar__error');
    if(recipesToDisplay.length === 0) {
        errorMessage.textContent = "Aucune recette ne correspond à votre critère";
    } else {
        errorMessage.textContent = "";
    }
    let cardContainer = document.getElementById('card-container');
    //Suppression de l'ancien affichage des cards
    clearDisplay();
    for (let recipe of recipesToDisplay) {
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

        for (let ingredient of recipe.ingredients) {
            htmlRecipes += `<p><span id ="ingredientName" class="bold">${ingredient.ingredient} :</span> <span id="ingredientQuantity">${ingredient.quantity ?? ""}</span> <span id="ingredientUnit">${ingredient.unit ?? ""}</span></p>`
        }

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
}
/**
 * En charge de l'appel des fonctions suivantes :
 * - clearDisplayDropdownTags
 * - createItemDropdown pour chaque filtre avance
 */
function itemDropdownDisplay(){
    clearDisplayDropdownTags();
    const ingredientsItemTab = "htmlTagsIngredientsItemTab";
    const appliancesItemTab = "htmlTagsAppliancesItemTab";
    const ustensilsItemTab = "htmlTagsUstensilsItemTab";
    createItemDropdown(ingredientsItemTab,recipesToDisplay);
    createItemDropdown(appliancesItemTab,recipesToDisplay);
    createItemDropdown(ustensilsItemTab,recipesToDisplay);
}

/**
 * Permet la creation du menu des filtres de recherches avances.
 *
 * Appel les fonctions suivantes :
 * - createHtmlTagsItems
 * - setupEventCreateTags
 *
 * @param type {string} Type de filtre
 * @param tab {Array<Recipe>} Tableau des elements du filtre
 *
 */
function createItemDropdown(type,tab){

    let htmlTagsIngredientsItemTab=[];
    let htmlTagsAppliancesItemTab=[];
    let htmlTagsUstensilsItemTab =[];
    const ingredientType = "ingredient";
    const applianceType = "appliance";
    const ustensilType = "ustensil";
    const dropdownMenuIngredients = document.querySelector('.dropdown-menu__options--ingredients')
    const dropdownMenuAppliances = document.querySelector('.dropdown-menu__options--appliances');
    const dropdownMenuUstensiles = document.querySelector('.dropdown-menu__options--ustensils');

    if(type === "htmlTagsIngredientsItemTab") {
        for (let element of tab) {
            for (let element of tab){
                htmlTagsIngredientsItemTab.push(data.ingredient);
            }
        }
        htmlTagsIngredientsItemTab.sort();
        htmlTagsIngredientsItemTab = removeDuplicates(htmlTagsIngredientsItemTab);
        createHtmlTagsItems(htmlTagsIngredientsItemTab,dropdownMenuIngredients,ingredientType);
        setupEventCreateTags("Ingredients");

    } else if (type === "htmlTagsAppliancesItemTab") {
        for (let element of tab) {
            htmlTagsAppliancesItemTab.push(element.appliance);
        }

        htmlTagsAppliancesItemTab.sort();
        htmlTagsAppliancesItemTab = removeDuplicates(htmlTagsAppliancesItemTab);
        createHtmlTagsItems(htmlTagsAppliancesItemTab,dropdownMenuAppliances,applianceType);
        setupEventCreateTags("Appliances");

    } else if(type === "htmlTagsUstensilsItemTab") {
        for (let element of tab){
            for (let data of element.ustensils){
                htmlTagsUstensilsItemTab.push(data);
            }
        }

        htmlTagsUstensilsItemTab.sort()
        htmlTagsUstensilsItemTab = removeDuplicates(htmlTagsUstensilsItemTab);
        createHtmlTagsItems(htmlTagsUstensilsItemTab,dropdownMenuUstensiles,ustensilType);
        setupEventCreateTags("Ustensils");
    }
}

/**
 * Fonction en charge de la creation des elements HTML a afficher dans les filtres avances
 * @param {Array<string>} tab Tableau des elements a afficher dans le menu
 * @param {Element} menu Element HTML correspondant a la div parent du menu
 * @param {String} type Nom du filtre avance
 */
function createHtmlTagsItems(tab,menu,type){
    for (let element of tab){
        let htmlItem = document.createElement('li');
        if(type === "ingredient") {
            htmlItem.classList.add("dropdown-menu__option-item","dropdown-menu__option-item--ingredients");
        }else if(type === "appliance") {
            htmlItem.classList.add("dropdown-menu__option-item","dropdown-menu__options-item--appliances");
        } else if(type ==="ustensil"){
            htmlItem.classList.add("dropdown-menu__option-item","dropdown-menu__options-item--ustensils");
        }
        htmlItem.textContent = element;
        menu.appendChild(htmlItem);
    }
}

/**
 * Permet de nettoyer l'affichage des Cards
 */
function clearDisplay(){
    let cardContainer = document.getElementById('card-container');
    while(cardContainer.firstChild) {
        cardContainer.removeChild(cardContainer.firstChild);
    }
}

/**
 * Permet de nettoyer l'affichage des tags des filtres de recherche avances
 */
function clearDisplayDropdownTags(){
    let tagsFilterIngredients = document.querySelector(".dropdown-menu__options--ingredients");
    let tagsFilterAppliances = document.querySelector(".dropdown-menu__options--appliances");
    let tagsFilterUstensils= document.querySelector(".dropdown-menu__options--ustensils");
    tagsFilterIngredients.innerHTML="";
    tagsFilterAppliances.innerHTML="";
    tagsFilterUstensils.innerHTML="";
}

export {clearDisplay,clearDisplayDropdownTags};
export {recipesDisplay,itemDropdownDisplay,createItemDropdown,createHtmlTagsItems}