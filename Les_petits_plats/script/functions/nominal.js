import {recipesToDisplay, search} from "./algo.js";
import {createHtmlTagsItems, itemDropdownDisplay, recipesDisplay} from "./display.js";
import {removeDuplicates} from "./array.js";
import {setupEventCreateTags} from "./tags.js";
/**
 * Permet de lancer plusieurs fonctions :
 * search(input)
 * recipesDisplay()
 * itemDropdownDisplay()
 * setupEventFilterTags()
 *
 * @param input {string} Correspond au champ de saisie de la recherche principale
 */
function mainSearchDisplay(input){
    search(input);
    recipesDisplay();
    itemDropdownDisplay();
    setupEventFilterTags();
}
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
 * Appel les fonctions setupEventFilterTagsSearch pour chaque filtre de recherche avance
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
 * Permet l'initialisation de l'event listener associe a l'input du filtre de recherche avance.
 * Pour chacun des filtres avances va effectuer les actions suivantes :
 * - Cree un tableau contenant les elements associes a la recherche de l'utilisateur
 * - Appel des fonctions de tri sur le tableau pour retirer les doublons et trier les elements par ordre alphabetique
 * - Appel la fonction createHtmlTagsItems()
 * - Appel la fonction setupEventCreateTags()
 * @param filter {string} Correspond au champ de saisie du filtre de recherche avance
 */
function setupEventFilterTagsSearch(filter){
    if(filter === "searchInputIngredients") {
        const ingredientsType = "Ingredients"
        const searchInputIngredients = document.getElementById("sort-by-ingredients");
        searchInputIngredients.addEventListener('input', event => {
            /**
             *
             * @type {Array<string>}
             */
            let ingredientsSearchResult =[];
            const ingredientsHTMLUL = document.querySelector('.dropdown-menu__options--ingredients');
            const userInput = event.target.value.toLowerCase();
            for (let recipe of recipesToDisplay){
                for (let item of recipe.ingredients){
                    if(item.ingredient.toLowerCase().includes(userInput)) {
                        ingredientsSearchResult.push(item.ingredient)
                    }
                }
            }
            ingredientsSearchResult = removeDuplicates(ingredientsSearchResult);
            ingredientsSearchResult = ingredientsSearchResult.sort();
            //Reset de la liste des ingredients
            ingredientsHTMLUL.innerHTML="";
            createHtmlTagsItems(ingredientsSearchResult,ingredientsHTMLUL,"ingredient");
            setupEventCreateTags(ingredientsType);
        })
    }else if(filter==="searchInputAppliances") {
        const appliancesType = "Appliances";
        const searchInputAppliances = document.getElementById("sort-by-appareils");
        searchInputAppliances.addEventListener('input', event => {
            /**
             *
             * @type {Array<string>}
             */
            let appliancesSearchResult = [];
            const appliancesHTMLUL = document.querySelector('.dropdown-menu__options--appliances');
            const userInput = event.target.value.toLowerCase();
            for (let recipe of recipesToDisplay){
                if(recipe.appliance.toLowerCase().includes(userInput)) {
                    appliancesSearchResult.push(recipe.appliance)
                }
            }
            appliancesSearchResult = removeDuplicates(appliancesSearchResult);
            appliancesSearchResult = appliancesSearchResult.sort();
            //Reset de la liste des appareils
            appliancesHTMLUL.innerHTML="";
            createHtmlTagsItems(appliancesSearchResult,appliancesHTMLUL,"appliance");
            setupEventCreateTags(appliancesType);

        })

    }else if(filter==="searchInputUstensils") {
        const ustensilsType = "Ustensils"
        const searchInputUstensils = document.getElementById("sort-by-ustensils");
        searchInputUstensils.addEventListener('input', event => {
            /**
             *
             * @type {Array<string>}
             */
            let ustensilsSearchResult=[];
            const ustensilsHTMLUL = document.querySelector('.dropdown-menu__options--ustensils')
            const userInput = event.target.value.toLowerCase();
            for (let recipe of recipesToDisplay) {
                for (let  item of recipe.ustensils) {
                    if(item.toLowerCase().includes(userInput)) {
                        ustensilsSearchResult.push(item)
                    }
                }
            }
            //Reset de la liste des ustensiles
            ustensilsHTMLUL.innerHTML="";
            ustensilsSearchResult =removeDuplicates(ustensilsSearchResult);
            ustensilsSearchResult = ustensilsSearchResult.sort();
            createHtmlTagsItems(ustensilsSearchResult,ustensilsHTMLUL,"ustensil");
            setupEventCreateTags(ustensilsType);
        })
    }
}

/**
 * Appel les fonctions mainSearchDisplay() et setupEventMainSearch()
 */
function initNominal(){
mainSearchDisplay("");
setupEventMainSearch();
}

export {mainSearchDisplay,initNominal}

