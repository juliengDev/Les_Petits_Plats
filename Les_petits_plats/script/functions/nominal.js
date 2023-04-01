import {recipes} from "../recipes.js";
import {setArrayToLocalStorage,getArrayFromLocalStorage} from "./createArray.js";
import {defaultMainSearchDisplay, defaultAdvanceSearchDisplay, initCards} from "./cards.js";
import {mainSearchDisplay,clearDisplay,advancedSearchResultDisplay} from "./cards.js";

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


let searchResults = [];
let mainSearchResult = [];
let mainFilterSearchResult = [];

function mainSearch(){
    const searchInput = document.getElementById("form-control");

    searchInput.addEventListener('input', event => {

        const userInput = event.target.value.toLowerCase();
        if (userInput.length >= 3) {
            // Recherche des données saisies par l'utilisateur dans le titre de la recette, la liste des ingrédients et la description
            // La méthode filter() crée un nouveau tableau rempli d'éléments qui passent un test fourni par une fonction.

            searchResults = recipes.filter( recipe => {
                // Vérifier si le nom de la recette contient les données saisies par l'utilisateur
                // La méthode includes() détermine si un tableau typé possède un certain élément et renvoie true ou false selon le cas de figure.
                if (recipe.name.toLowerCase().includes(userInput)) {
                    return true;
                }
                // Vérifier si un ingrédient de la recette contient les données saisies par l'utilisateur
                recipe.ingredients.forEach( recipe => {
                    if (recipe.ingredient.toLowerCase().includes(userInput)) {
                        return true;
                    }
                })
                // Vérifier si la description de la recette contient les données saisies par l'utilisateur
                if (recipe.description.toLowerCase().includes(userInput)) {
                    return true;
                }
                // Retourne false si la recette ne correspond pas aux critères de recherche

                return false;
            })
            // On stocke dans le localstorage les donnees de recherches recuperees
            setArrayToLocalStorage("searchResults",searchResults);
            getCurrentMainSearch();
            mainSearchDisplay();
            advancedSearchResultDisplay();
            console.log(mainSearchResult)

        } else {
            localStorage.clear();
            clearDisplay();
            initCards();
            mainSearchResult=[];
        }
    })
}

function getCurrentMainSearch() {
    let currentSearchResult = getArrayFromLocalStorage("searchResults");
    if(currentSearchResult !== null){
        currentSearchResult.forEach(recipe => {
                mainSearchResult.push(recipe)
            });
    }
}

export function initNominal(){
    mainSearch();

}

export {mainSearchResult}
