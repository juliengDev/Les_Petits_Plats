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
            search(userInput);
            recipesDisplay();
            tagsDisplay();
            setupEventFilterTagsSearch("searchInputIngredients");
            setupEventFilterTagsSearch("searchInputAppliances");
            setupEventFilterTagsSearch("searchInputUstensils");

        } else {
            search("");
            recipesDisplay();
            tagsDisplay();
        }
    })
}
function search(userInput){

    if(userInput === "") {
        recipesToDisplay = recipes;
    } else {
        recipesToDisplay = recipes.filter( recipe => {
            // boolean pour indiquer que la recipe en cours
            // contient la saisie utilisateur (userInput) dans le nom/les ingredients/la description
            let found = false;

            // Vérifier si le nom de la recette contient les données saisies par l'utilisateur
            // La méthode includes() détermine si un tableau typé possède un certain élément et renvoie true ou false selon le cas de figure.
            if (recipe.name.toLowerCase().includes(userInput)) {
                found = true;
            }
            // Vérifier si un ingrédient de la recette contient les données saisies par l'utilisateur
            recipe.ingredients.forEach( element => {
                if (element.ingredient.toLowerCase().includes(userInput)) {
                    found = true;
                    return true
                }
            })
            // Vérifier si la description de la recette contient les données saisies par l'utilisateur
            if (recipe.description.toLowerCase().includes(userInput)) {
                found = true;
            }

            //recipe.ingredients = [ 'banane', 'café', 'paté' ]

            //ingredientTags v1 = [ 'paté', 'banane']
            // resultat recherche v1 : true

            //ingredientTags v2 = [ 'café', 'banane', 'sel', 'oeuf', 'patate' , 'paté' ]
            // resultat recherche v2 : false


            //boolean pour indiquer que la recipe en cours
            //contient l'ensemble des tags d'ingredients dans sa liste d'ingredient
            let foundIngredientTags;

            if(ingredientsTab.length === 0){
                 foundIngredientTags = true;
            }else {
                foundIngredientTags = false;
                ingredientsTab.forEach( ingredientTag => {

                    recipe.ingredients.forEach( item =>{
                        console.log(ingredientTag)
                        console.log(item.ingredient)
                        if(ingredientTag === item.ingredient) {

                            foundIngredientTags = true
                            return true

                        }else{
                            foundIngredientTags = false
                        }
                    })
                    if(!foundIngredientTags){
                        return false
                    }
                })
            }



            // Retourne false si la recette ne correspond pas aux critères de recherche
            // console.log("return false :"+recipe.name)
            return found && foundIngredientTags ;
        })
    }


}
function setupEventFilterTagsSearch(filter){
    if(filter === "searchInputIngredients") {
        const searchInputIngredients = document.getElementById("sort-by-ingredients");
        searchInputIngredients.addEventListener('input', event => {
            let ingredientsSearchResult =[]
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
            // console.log(ingredientsSearchResult)

            //Reset de ingredientsList
            ingredientsHTMLUL.innerHTML="";
            createHtmlTagsItems(ingredientsSearchResult,ingredientsHTMLUL,"ingredient");
            setupEventCreateTags("Ingredients");
        })
    }else if(filter==="searchInputAppliances") {
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

            appliancesHTMLUL.innerHTML="";
            createHtmlTagsItems(appliancesSearchResult,appliancesHTMLUL,"appliance");
            setupEventCreateTags("Appliances");
        })

    }else if(filter==="searchInputUstensils") {
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
            setupEventCreateTags("Ustensils");
        })
    }
}

export function initNominal(){
setupEventMainSearch();
search("");
recipesDisplay();
tagsDisplay();
}

export {recipesToDisplay}

