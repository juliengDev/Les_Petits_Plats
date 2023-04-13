import {recipes} from "../recipes.js";
import {recipesDisplay,tagsDisplay,createHtmlTagsItems} from "./display.js";
import {removeDuplicates} from "./array.js"
import {setupEventCreateTags,ingredientsTab} from "./tags.js"

// const [{
//     appliance,
//     description,
//     id,
//     ingredients:[{ingredient, quantity, unit}],
//     name,
//     servings,
//     time,
//     ustensils,
// }] = recipes;
let recipesToDisplay = [];

function setupEventMainSearch(){
    const searchInput = document.getElementById("form-control");

    searchInput.addEventListener('input', event => {

        const userInput = event.target.value.toLowerCase();
        if (userInput.length >= 3) {
            mainSearchDisplay(userInput);
            setupEventFilterTags();

        } else {
            defaultDisplay();
        }
    })
}

export function search(userInput){

    if(userInput === "" && ingredientsTab.length === 0) {
        recipesToDisplay = recipes;
    } else if(!userInput  && !ingredientsTab.length ) {
        recipesToDisplay = recipes.filter( recipe => {
            // boolean pour indiquer que la recipe en cours
            // contient la saisie utilisateur (userInput) dans le nom/les ingredients/la description
            let found = false;

            // Vérifier si le nom de la recette contient les données saisies par l'utilisateur
            // La méthode includes() détermine si un tableau typé possède un certain élément et renvoie true ou false selon le cas de figure.
            if (recipe.name.toLowerCase().includes(userInput)) {
                // console.log("verif user input : recipe.name")
                found = true;
            }
            // Vérifier si un ingrédient de la recette contient les données saisies par l'utilisateur
            recipe.ingredients.forEach( element => {
                if (element.ingredient.toLowerCase().includes(userInput)) {
                    // console.log("verif user input : recipe.ingredient")
                    found = true;
                    return true
                }
            })
            // Vérifier si la description de la recette contient les données saisies par l'utilisateur
            if (recipe.description.toLowerCase().includes(userInput)) {
                found = true;
            }

            //recipe.ingredients = [ 'banane', 'sucre', 'chocolat' ]

            //ingredientTab v1 = [ 'chocolat', 'banane'] Correspond aux tags selectionnes
            // resultat recherche v1 : true

            //ingredientTab v2 = [ 'café', 'banane', 'sel', 'oeuf', 'patate' , 'paté' ] Correspond aux tags selectionnes
            // resultat recherche v2 : false

            //boolean pour indiquer que la recipe en cours
            //contient l'ensemble des tags d'ingredients dans sa liste d'ingredient
            let foundIngredientTags;

            // console.log(recipesToDisplay)
            if(ingredientsTab.length === 0){
                 foundIngredientTags = true;

            } else {

                foundIngredientTags = false;

                ingredientsTab.every( ingredientTag => {
                    recipe.ingredients.every( item => {

                        // if(item.ingredient.toLowerCase().includes(ingredientTag.toLowerCase())){
                        //     console.log("fonction include : "+ item.ingredient)
                        //     foundIngredientTags= true;
                        //     return true;
                        // }

                        if(ingredientTag.toLowerCase() === item.ingredient.toLowerCase()) {
                            console.log("tag verif dans recipe ingredient found: "+item.ingredient)
                            foundIngredientTags = true
                            return false
                        }else{

                            console.log("tag verif dans recipe ingredient not found: "+item.ingredient)
                            foundIngredientTags = false
                            return true
                        }

                    })
                    return foundIngredientTags
                })
            }
            console.log("Recipe Name :"+ recipe.name)
            console.log("found userInput:" +found)
            console.log("found tag ingredient :"+ foundIngredientTags)
        return found && foundIngredientTags
        })
        console.log("function search :"+ recipesToDisplay)
    }else {
        console.log("Resultat not found")
    }
}
function setupEventFilterTags(){
    const searchInputIngredients = "searchInputIngredients";
    const searchInputAppliances = "searchInputAppliances";
    const searchInputUstensils = "searchInputUstensils";

    setupEventFilterTagsSearch(searchInputIngredients);
    setupEventFilterTagsSearch(searchInputAppliances);
    setupEventFilterTagsSearch(searchInputUstensils);
}
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
                    // console.log(item.ingredient)
                    if(item.ingredient.toLowerCase().includes(userInput)) {

                        ingredientsSearchResult.push(item.ingredient)
                    }
                })
            })

            ingredientsSearchResult = removeDuplicates(ingredientsSearchResult);
            ingredientsSearchResult = ingredientsSearchResult.sort();
            console.log(ingredientsSearchResult)

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
            console.log(appliancesSearchResult)

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
function defaultDisplay(){
search("");
recipesDisplay();
tagsDisplay();
}
export function mainSearchDisplay(input){
search(input);
recipesDisplay();
tagsDisplay();
}
export function initNominal(){
setupEventMainSearch();
defaultDisplay();
}

export {recipesToDisplay}

