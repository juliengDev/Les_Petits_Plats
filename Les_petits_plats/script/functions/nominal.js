import {recipes} from "../recipes.js";
import {recipesDisplay,tagsDisplay,createHtmlTagsItems} from "./display.js";
import {stringSort,removeDuplicates} from  "./createArray.js"
import {setupEventCreateTags,setupEventDeleteTags} from "./tags.js"


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


let recipesToDisplay = [];
let recipesToDisplayTags= [];


function search(userInput){

    if(userInput === "") {
        recipesToDisplay = recipes;
    } else {
        recipesToDisplay = recipes.filter( recipe => {
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
            // Retourne false si la recette ne correspond pas aux critères de recherche
            // console.log("return false :"+recipe.name)
            return found;
        })
    }
}

function setupEventMainSearch(){
    const searchInput = document.getElementById("form-control");

    searchInput.addEventListener('input', event => {

        const userInput = event.target.value.toLowerCase();
        if (userInput.length >= 3) {
            search(userInput);
            recipesDisplay();
            tagsDisplay();
            setupEventIngredientsTagsSearch();
            setupEventCreateTags()

        } else {
            search("");
            recipesDisplay();
            tagsDisplay();
        }
    })
}



function setupEventIngredientsTagsSearch(){

    const searchInputIngredients = document.getElementById("sort-by-ingredients")

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
        ingredientsSearchResult = stringSort(ingredientsSearchResult);
        // console.log(ingredientsSearchResult)

            //Reset de ingredientsList
        ingredientsHTMLUL.innerHTML="";
        createHtmlTagsItems(ingredientsSearchResult,ingredientsHTMLUL,"ingredient");
        setupEventCreateTags();
    })
}

function advancedSearch(){
    const searchInputIngredients = document.getElementById("sort-by-ingredients");
    const searchInputAppliances=document.getElementById("sort-by-appareils");
    const searchInputUstensils=document.getElementById("sort-by-utensils");

    searchInputUstensils.addEventListener('input', event =>{
        const userInput = event.target.value.toLowerCase();

    })
    searchInputIngredients.addEventListener('input', event =>{
        const userInput = event.target.value.toLowerCase();

    })
    searchInputAppliances.addEventListener('input', event =>{
        const userInput = event.target.value.toLowerCase();

    })
}

function searchTags(userInput,type) {

    recipesToDisplayTags  = recipesToDisplay.filter( recipe => {
        let found = false;
        if (type === "ustensils") {

            recipe.ustensils.forEach( ustensil => {
                if (ustensil.toLowerCase().includes(userInput)) {
                    found = true;
                    return true;
                }
            })
        }
        if(type ==="ingredients"){
            // Vérifier si un ingrédient de la recette contient les données saisies par l'utilisateur
            recipe.ingredients.forEach( element => {
                console.log(element)
                if (element.ingredient.toLowerCase().includes(userInput)) {
                    console.log("ok")
                    found = true;
                    return true;
                }
            })
        }
        if (type==="appliances") {
            if(recipe.appliance.toLowerCase().includes(userInput)){
                found = true;

            }
        }
        // Retourne false si la recette ne correspond pas aux critères de recherche
        // console.log("return false :"+recipe2.name)
        return found;
    })
    // console.log("Resultat de recipesToDisplayTags :"+recipesToDisplayTags)

}

export function initNominal(){
setupEventMainSearch();
search("");
recipesDisplay();
tagsDisplay();
setupEventIngredientsTagsSearch();
setupEventCreateTags()
}

export {recipesToDisplay}

