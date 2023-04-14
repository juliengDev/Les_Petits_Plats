import {removeDuplicates} from "./array.js"
import {recipesToDisplay} from  "./nominal.js"
import {setupEventCreateTags} from "./tags.js";


//Variable Global
let htmlRecipes="";

/**
 * Fonction en charge de l’affichage des Cards
 */
function recipesDisplay(){
    const errorMessage = document.querySelector('.search-bar__error');

    if(recipesToDisplay.length === 0){
        errorMessage.textContent = "Aucune recette ne correspond à votre critère"
    }else {
        errorMessage.textContent = ""
    }
    let cardContainer = document.getElementById('card-container')
    //Suppression de l'ancien affichage des cards par default
    clearDisplay();
    recipesToDisplay.forEach( recipe => {

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
/**
 * Fonction en charge de l'affichage par defaut des menus dropdown des filtres de recherche avances
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
 * Fonction en charge de la creation des tags des filtres de recherche avances
 * @param type
 * @param tab
 * @returns {*[]}
 */
function createItemDropdown(type,tab){

    const htmlTagsIngredientsItemTab=[];
    const htmlTagsAppliancesItemTab=[];
    const htmlTagsUstensilsItemTab =[];
    const ingredientType = "ingredient";
    const applianceType = "appliance";
    const ustensilType = "ustensil";
    const dropdownMenuIngredients = document.querySelector('.dropdown-menu__options--ingredients')
    const dropdownMenuAppliances = document.querySelector('.dropdown-menu__options--appliances');
    const dropdownMenuUstensiles = document.querySelector('.dropdown-menu__options--ustensils');

    if(type === "htmlTagsIngredientsItemTab") {

        tab.forEach(element => {
            element.ingredients.forEach(data => {
                htmlTagsIngredientsItemTab.push(data.ingredient)
            })
        })
        htmlTagsIngredientsItemTab.sort();
        let htmlTagsIngredientsItems = removeDuplicates(htmlTagsIngredientsItemTab);
        createHtmlTagsItems(htmlTagsIngredientsItems,dropdownMenuIngredients,ingredientType)
        setupEventCreateTags("Ingredients");


        return htmlTagsIngredientsItems
    } else if (type === "htmlTagsAppliancesItemTab") {
        tab.forEach(element => {
            htmlTagsAppliancesItemTab.push(element.appliance)
        })
        htmlTagsAppliancesItemTab.sort();
        let htmlTagsApplianceItems = removeDuplicates(htmlTagsAppliancesItemTab);
        createHtmlTagsItems(htmlTagsApplianceItems,dropdownMenuAppliances,applianceType);
        setupEventCreateTags("Appliances");


        return htmlTagsApplianceItems
    } else if(type === "htmlTagsUstensilsItemTab") {
        tab.forEach(element =>{
            element.ustensils.forEach(data => {
                htmlTagsUstensilsItemTab.push(data)
            })
        })
        htmlTagsUstensilsItemTab.sort()
        let htmlTagsUstensilsItems = removeDuplicates(htmlTagsUstensilsItemTab);
        createHtmlTagsItems(htmlTagsUstensilsItems,dropdownMenuUstensiles,ustensilType);
        setupEventCreateTags("Ustensils");
        return htmlTagsUstensilsItems
    }
}

/**
 * Fonction en charge de la creation des elements HTML a afficher dans les filtres avances
 * @param tab
 * @param menu
 * @param type
 */
function createHtmlTagsItems(tab,menu,type){
    tab.forEach(element => {
        let htmlItem = document.createElement('li');

        if(type === "ingredient") {
            htmlItem.classList.add("dropdown-menu__option-item","dropdown-menu__option-item--ingredients")
        }else if(type === "appliance") {
            htmlItem.classList.add("dropdown-menu__option-item","dropdown-menu__options-item--appliances");
        } else if(type ==="ustensil"){
            htmlItem.classList.add("dropdown-menu__option-item","dropdown-menu__options-item--ustensils");
        }
        htmlItem.textContent = element;
        menu.appendChild(htmlItem);
    })
}

/**
 * Fonction en charge de nettoyer l'affichage des Cards
 */
function clearDisplay(){
    let cardContainer = document.getElementById('card-container');
    while(cardContainer.firstChild) {

        cardContainer.removeChild(cardContainer.firstChild)
    }
}

/**
 * Fonction en charge de nettoyer l'affichage des Tags des filtres de recherche avances
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