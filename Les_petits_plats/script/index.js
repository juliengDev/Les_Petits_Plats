// import {recipesNames,ingredientsNames,descriptionsRecipes} from "./functions/array.js"
import {initDropdown} from   "./functions/dropdown.js"
import {initNominal} from "./functions/nominal.js";

initDropdown();
initNominal();

/*
* Faire une fonction qui prend  deux variables en parametres.
*   - Une variable contenant les recettes a afficher (type Array)
*   - Une variable contenant le tableau des tags par categories (type Array)
*
* Role de la fonction :
* Retourne le tableau des recettes mis a jour avec les informations relatives
* aux donnees des elements tries par la recherche principale
* et les tags.
*/

/*
* =============== WORKFLOW ===============
* Appel de la fonction initDropdown() depuis "./functions/dropdown.js"
* Appel de la fonction initNominal() depuis "./functions/nominal.js"
initNominal() initialise le bloc de fonctions suivantes :

* setupEventMainSearch(); // Initialise l'event listener de l'inout de la barre de recherche principale
* defaultDisplay(); // Permet l'affichage de toutes les recettes et de tous les tags associes

1/ Le cas d’utilisation commence lorsque l’utilisateur entre au moins 3 caractères dans la
barre de recherche principale.

* Via la fonction setupEventMainSearch()
SI 3 characters ou plus ALORS :

2/ Le système recherche des recettes correspondant à l’entrée utilisateur dans :
le titre de la recette, la liste des ingrédients de la recette, la description de la recette.
    * C'est le role de la fonction search(input)
    * Appel de la fonction search(userInput) depuis setupEventMainSearch();

3/ L’interface est actualisée avec les résultats de recherche
    * Appel de la fonction mainSearchDisplay(input) depuis setupEventMainSearch();

4/ Les champs de recherche avancée sont actualisés avec les informations ingrédients,
    ustensiles, appareil des différentes recettes restantes
    * Appel de la fonction tagsDisplay() depuis mainSearchDisplay();

5/ L’utilisateur précise sa recherche grâce à l’un des champs : ingrédients, ustensiles,
appareil. Role des fonctions setupEventFilter
    * Appel de la fonction setupEventFilterTagsSearch("searchInputIngredients");
    * Appel de la fonction setupEventFilterTagsSearch("searchInputAppliances");
    * Appel de la fonction setupEventFilterTagsSearch("searchInputUstensils");
SINON :
    * Appel de la fonction defaultDisplay();


--------------------------------------------------------
*
*
* A chaque fois que l'on ajoute un tag depuis le menu ingredient :
*  1/ On recupere le nom de l'element cliquer pour l'ajouter a une variable array ingredientsTab
*  2/ Cette variable ingredientsTab est recuperer dans notre fonction search(userinput) et on effectue le
* test suivant :
*
*  a/ On initialise une variable foundIngredientTags non type
*  b/ On verifie la taille du tableau ingredientsTab
*   SI la taille est egale a 0 ALORS :
*       on passe la variable ingredientsTab a TRUE
*   SINON
*       on passe la variable ingredientsTab a FALSE
*       on boucle sur le tableau d'ingredient ingredientsTab
*

* */
