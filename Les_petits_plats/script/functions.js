import {recipes} from "./recipes.js";
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

let searchBarValues = [];

/**
 * Fonction qui permet d'affecter a un tableau les valeurs retourner dans l'input de la barre de recherche principale
 */
function getValue(){
    let input = document.getElementById('form-control').value
    searchBarValues.push(input)
    console.log(searchBarValues)
}
// utilisation du rest parameter ici dans la fonction getValue()?

/**
 * Fonction qui permet d'affecter a un tableau toutes les valeurs d'une proprietee du tableau d'objet "recipes"
 * @param {string} element Variable : Valeur de la propriete de l'objet "recipes"
 * @param {array} array Tableau: Tableau qui doit contenir les proprietees
 */
function createArray(element,array){
    recipes.forEach(data => {
        if(element===name){
            array.push(data.name)
        }else if(element===ingredient){
            data.ingredients.forEach(data2 =>{
                array.push(data2.ingredient)
            })
        }else if(element===description){
            array.push(data.description)
        }else if(element===ustensils){
            data.ustensils.forEach(data2 => {
                array.push(data2)
            })
        }
    })
};

export {getValue,createArray}