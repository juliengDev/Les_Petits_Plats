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

let recipesNames=[];
let ingredientsNames =[];
let descriptionsRecipes =[];
/**
 * Fonction qui permet d'affecter a un tableau toutes les valeurs d'une proprietee du tableau d'objet "recipes"
 * @param {string} element Variable : Valeur de la propriete de l'objet "recipes"
 * @param {array} array Tableau: Tableau qui doit contenir les proprietees
 */
function createArray(element,array){
    recipes.forEach(data => {
        if(element==="name"){
            array.push(data.name)
        }else if(element==="ingredient"){
            data.ingredients.forEach(data2 =>{
                array.push(data2.ingredient)
            })
        }else if(element==="description"){
            array.push(data.description)
        }else if(element==="ustensils"){
            data.ustensils.forEach(data2 => {
                array.push(data2)
            })
        }
    })
}

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

/**
 * Fonction qui permet le stockqge de donnees dans le local storage
 * @param key
 * @param value
 */
function setArrayToLocalStorage(key,value){
    return localStorage.setItem(key,JSON.stringify(value));
}

/**
 * Fonction qui permet de recuperer les donnees stocker dans le local storage
 * @param key
 * @returns {any}
 */
function getArrayFromLocalStorage(key){
    return JSON.parse(localStorage.getItem(key));
}

/**
 * Fonction qui permet de faire un clear des datas pour cree 3 tableau trie avec les doublons supprimer
 *
 */
function clearArrayData() {
    const rawRecipesNames = [];
    const rawIngredientsNames = [];
    const rawDescriptionsRecipes =[];
    const rawUstensilsNames=[];

    //Premier tri des donnees name(titre), ingredient(les ingredients) et description(la description)
    // On cree un tableau pour chacune des donnees

    createArray("name",rawRecipesNames);
    createArray("ingredient",rawIngredientsNames);
    createArray("description",rawDescriptionsRecipes);
    createArray("ustensils",rawUstensilsNames);

    //Trie alphabetique des valeurs du tableau
    stringSort(rawRecipesNames)
    stringSort(rawIngredientsNames)
    stringSort(rawDescriptionsRecipes)
    stringSort(rawUstensilsNames)

    //Suppression des doublons

    recipesNames = removeDuplicates(rawRecipesNames);
    ingredientsNames = removeDuplicates(rawIngredientsNames);
    descriptionsRecipes = removeDuplicates(rawDescriptionsRecipes);
}

export function init(){
    clearArrayData();
}

export {setArrayToLocalStorage,getArrayFromLocalStorage,stringSort,removeDuplicates}


