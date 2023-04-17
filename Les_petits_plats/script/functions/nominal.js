import {recipesToDisplay, search} from "./algo.js";
import {createHtmlTagsItems, itemDropdownDisplay, recipesDisplay} from "./display.js";
import {removeDuplicates} from "./array.js";
import {setupEventCreateTags} from "./tags.js";

/**
 * @typedef {Object} Recipe Recette
 * @property {string} appliance Nom de l'appareil
 * @property {string} description Description de la recette
 * @property {number} id ID associe a la recette
 * @property {{ingredient:string, quantity:number, unit:string}[]} ingredients Liste des ingredients associes a la recette
 * @property {string} name Titre de la recette
 * @property {number} servings Nombre de personnes
 * @property {number} time Temps de preparation
 * @property {Array<string>} ustensils Ustensiles utilises pour la recette
 *
 */
/**
 * Permet l'initialisation de l'event listener sur l'input de recherche principale
 * Cet event listener va initialiser la fonction mainSearchDisplay avec comme parametre,
 * ce qui est saisie dans le champs de recherche principal
 */
function setupEventMainSearch(){
    const searchInput = document.getElementById("form-control");
    searchInput.addEventListener('input', event => {
        const userInput = event.target.value.toLowerCase();
        if (userInput.length >= 3) {
            mainSearchDisplay(userInput);
        } else {
            mainSearchDisplay("");
        }
    })
}
/**
 * Appel les fonctions setupEventFilterTagsSearch des filtres de recherche avances
 */
function setupEventFilterTags(){
    const searchInputIngredients = "searchInputIngredients";
    const searchInputAppliances = "searchInputAppliances";
    const searchInputUstensils = "searchInputUstensils";

    setupEventFilterTagsSearch(searchInputIngredients);
    setupEventFilterTagsSearch(searchInputAppliances);
    setupEventFilterTagsSearch(searchInputUstensils);
}
/**
 * Permet l'initialisation de l'event listener associe a l'input du filtre de recherche avance
 * Va cree un tableau contenant la recherche de l'utlisateur
 * @param filter {string} Correspond au filtre de recherche avance
 */
function setupEventFilterTagsSearch(filter){
    if(filter === "searchInputIngredients") {
        const ingredientsType = "Ingredients"
        const searchInputIngredients = document.getElementById("sort-by-ingredients");
        searchInputIngredients.addEventListener('input', event => {
            let ingredientsSearchResult =[];
            const ingredientsHTMLUL = document.querySelector('.dropdown-menu__options--ingredients');
            const userInput = event.target.value.toLowerCase();
            recipesToDisplay.forEach(recipe => {
                recipe.ingredients.forEach(item =>{
                    if(item.ingredient.toLowerCase().includes(userInput)) {
                        ingredientsSearchResult.push(item.ingredient)
                    }
                })
            })
            ingredientsSearchResult = removeDuplicates(ingredientsSearchResult);
            ingredientsSearchResult = ingredientsSearchResult.sort();
            //Reset de ingredientsList
            ingredientsHTMLUL.innerHTML="";
            createHtmlTagsItems(ingredientsSearchResult,ingredientsHTMLUL,"ingredient");
            setupEventCreateTags(ingredientsType);
        })
    }else if(filter==="searchInputAppliances") {
        const appliancesType = "Appliances";
        const searchInputAppliances = document.getElementById("sort-by-appareils");

        searchInputAppliances.addEventListener('input', event => {
            let appliancesSearchResult = [];
            const appliancesHTMLUL = document.querySelector('.dropdown-menu__options--appliances');
            const userInput = event.target.value.toLowerCase();

            recipesToDisplay.forEach(recipe =>{
                if(recipe.appliance.toLowerCase().includes(userInput)) {
                    appliancesSearchResult.push(recipe.appliance)
                }

            })
            appliancesSearchResult = removeDuplicates(appliancesSearchResult);
            appliancesSearchResult = appliancesSearchResult.sort();
            // console.log(appliancesSearchResult)

            appliancesHTMLUL.innerHTML="";
            createHtmlTagsItems(appliancesSearchResult,appliancesHTMLUL,"appliance");
            setupEventCreateTags(appliancesType);

        })

    }else if(filter==="searchInputUstensils") {
        const ustensilsType = "Ustensils"
        const searchInputUstensils = document.getElementById("sort-by-ustensils");

        searchInputUstensils.addEventListener('input', event => {
            let ustensilsSearchResult=[];
            const ustensilsHTMLUL = document.querySelector('.dropdown-menu__options--ustensils')
            const userInput = event.target.value.toLowerCase();

            recipesToDisplay.forEach(recipe => {
                recipe.ustensils.forEach(item =>{

                    if(item.toLowerCase().includes(userInput)) {
                        ustensilsSearchResult.push(item)
                    }
                })
            })
            ustensilsHTMLUL.innerHTML="";
            ustensilsSearchResult =removeDuplicates(ustensilsSearchResult);
            ustensilsSearchResult = ustensilsSearchResult.sort();
            createHtmlTagsItems(ustensilsSearchResult,ustensilsHTMLUL,"ustensil");
            setupEventCreateTags(ustensilsType);
        })
    }
}
function mainSearchDisplay(input){
search(input);
recipesDisplay();
itemDropdownDisplay();
setupEventFilterTags();
}
function initNominal(){
mainSearchDisplay("");
setupEventMainSearch();
}

export {mainSearchDisplay,initNominal}

