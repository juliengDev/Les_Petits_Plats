import {recipes} from "../recipes.js";
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


/**
 * Fonction qui permet de trier alphabétiquement les valeurs chaines de caractere d’un tableau passé en parametre
 * @param {Array} tab tab : Tableau de chaine de caractere
 * @returns {String}
 */
function stringSort(tab){
    return tab.sort((a,b) => {
        return a.toString().localeCompare(b.toString());
    });
}

/**
 * Fonction qui permet de supprimer les doublons d'un tableau passer en parametre
 * @param {Array} tab tab : Tableau de chaine de caractere
 * @returns {any[]}
 */
function removeDuplicates(tab) {
    return [...new Set(tab)];
}



export {stringSort,removeDuplicates}


