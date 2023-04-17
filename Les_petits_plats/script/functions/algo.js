import {recipes} from "../recipes.js";
import {appliancesTab, ingredientsTab, ustensilsTab} from "./tags.js";

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
 * Contient les recettes a afficher
 * @type {Array<Recipe>} Recette a afficher
 */
let recipesToDisplay = [];
/**
 * Assigne la ou les recettes en cours dans la variable recipeToDisplay en filtrant les donnees du champs de recherche principal
 * et des champs de recherches avances (Ingredient, Appareils et Ustensils)
 * @param userInput {string} Correspond a la saisie de l'utilisateur dans le champ de recherche principal
 */
function search(userInput) {
    // Recherche vide et aucun tag selectionne
    if ((userInput === "") &&
        (ingredientsTab.length === 0) &&
        (appliancesTab.length === 0) &&
        (ustensilsTab.length === 0))
    {
        recipesToDisplay = recipes;
    }
    //Recherche active et Tags actif
    else {
        recipesToDisplay = recipes.filter(recipe => {

            /* Point 2 du scenario nominal :
            Declaration la variable found qui sera valorisee en fonction du resultat retourner par la methode includes sur
            le titre, les ingredients et la description de la recette */
            let found = false;

            // On verifie si les données saisies par l'utilisateur correspondent avec un titre des recettes presentes dans la base de donnees.
            // La méthode includes() détermine si un tableau typé possède un certain élément et renvoie true ou false selon le cas de figure.
            if (recipe.name.toLowerCase().includes(userInput)) {
                found = true;
            }
            // On verifie si les données saisies par l'utilisateur correspondent avec un ingredient des recettes presentes dans la base de donnees.
            recipe.ingredients.forEach(element => {
                if (element.ingredient.toLowerCase().includes(userInput)) {
                    found = true;
                    return true;
                }
            })
            // On verifie si les données saisies par l'utilisateur correspondent avec un ustensile des recettes presentes dans la base de donnees.
            if (recipe.description.toLowerCase().includes(userInput)) {
                found = true;
            }

            // On test ensuite chaque elements des tableaux de tags pour verifier si ils sont present dans la recette
            // Exemple :
            // Tableau des ingredients d'une recette : recipe.ingredients = [ 'banane', 'sucre', 'chocolat' ]

            // Tableau des tags ingredients : ingredientTab v1 = [ 'chocolat', 'banane']
            /* Resultat recherche v1 = true car les tags selectionnes dans la liste des ingredients disponibles
             sont bien present dans la recette */

            // Tableau des ingredients d'une recette : ingredientTab v2 = [ 'café', 'banane', 'sel', 'sucre', 'patate']
            /* Resultat recherche v2 = false car les tags selectionnes dans la liste des ingredients disponibles
            ne sont pas tous presents dans la recette */

            /* Declaration des variables : foundIngredientTags, foundApplianceTags et foundUstensilTags.
            Elles sont valorisees en fonction du resultat retourner par la methode every sur
            les ingredients, les appareils et les utsentiles de la recette */
            /* On declare un booleen pour indiquer que la recette en cours contient
            le tag dans sa liste d'elements  (ingredient/appareils et ustensiles) */
            let foundIngredientTags = false;
            let foundApplianceTags = false;
            let foundUstensilTags = false;

            // Filtre Ingredients
            if (ingredientsTab.length === 0) {
                foundIngredientTags = true;
            } else {
                foundIngredientTags = false;
                ingredientsTab.every(ingredientTag => {
                    recipe.ingredients.every(item => {
                        if (ingredientTag.toLowerCase() === item.ingredient.toLowerCase()) {
                            foundIngredientTags = true;
                            return false;
                        } else {
                            foundIngredientTags = false;
                            return true;
                        }
                    })
                    return foundIngredientTags;
                })
            }
            // Filtre Appareils
            if (appliancesTab.length === 0) {
                foundApplianceTags = true;
            } else {
                foundApplianceTags = false;
                appliancesTab.every(applianceTag => {
                    if (applianceTag.toLowerCase() === recipe.appliance.toLowerCase()) {
                        foundApplianceTags = true;
                        return false;
                    } else {
                        foundApplianceTags = false;
                        return true;
                    }
                })
            }
            //Filtre Ustensiles
            if (ustensilsTab.length === 0) {
                foundUstensilTags = true;
            } else {
                foundUstensilTags = false;
                ustensilsTab.every(ustensilsTag => {
                    recipe.ustensils.every(item => {
                        if (ustensilsTag.toLowerCase() === item.toLowerCase()) {
                            foundUstensilTags = true;
                            return false;
                        } else {
                            foundUstensilTags = false;
                            return true;
                        }
                    })
                    return foundUstensilTags;
                })
            }
        // On retourne la valeur des differents booleens a la fonction filter
        return found && foundIngredientTags && foundApplianceTags && foundUstensilTags;
        })
    }
}

export {search}
export {recipesToDisplay};