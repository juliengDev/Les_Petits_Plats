import {recipes} from "./recipes.js";
import {getValue,createArray} from "./functions.js";

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


console.log(recipes[0])

//Premier tri des donnees name(titre), ingredient(les ingredients) et description(la description)
// On cree un tableau pour chacune des donnees
const recipesNames = [];
const ingredientsNames = [];
const descriptionsRecipes =[];
const ustensilsNames=[];

createArray(name,recipesNames);
createArray(ingredient,ingredientsNames);
createArray(description,descriptionsRecipes);
createArray(ustensils,ustensilsNames);





const titles = [];
const textDescriptions =[];

for (let recipe of recipes) {

     // Creation des elements HTML
     let cardContainer = document.querySelector('.card-container');
     let cardContainerCards = document.createElement('div');
     cardContainerCards.classList.add("card-container__card", "card", "box", "box-1", "grid-item");
     let cardImage = document.createElement('div');
     cardImage.classList.add("card-img-top", "card-container__card-img");
     let cardBody = document.createElement('div');
     cardBody.classList.add("card-body", "card-container__card-body");
     let descriptionIngredients = document.createElement('div');
     descriptionIngredients.classList.add("col-6", "card-container__card-description-ingredients");
     const dropdownMenuIngredients = document.querySelector('.dropdown-menu__options--ingredients');
     const dropdownMenuAppareils = document.querySelector('.dropdown-menu__options--appliances');
     const dropdownMenuUstensiles = document.querySelector('.dropdown-menu__options--utensils');

     let htmlRecipes = `
    <div class="card-container__card-title">
         <h2>${recipe.name}</h2>
         <div class="card-container__card-title-timer">
             <i class="bi bi-clock font-weight-bold"></i>
             <p>${recipe.time} min</p>
         </div>
    </div>
    <div class="card-container__card-description">
    <div class="col-6 card-container__card-description-ingredients">`;

     for (let ingredient of recipe.ingredients) {
          htmlRecipes += `<p><span class="bold">${ingredient.ingredient} :</span> ${ingredient.quantity ?? ""} ${ingredient.unit ?? ""}</p>`
     }
     htmlRecipes +=`
     </div>
     <div class="col-6 card-container__card-description-texte">
          <p>${recipe.description}</p>
     </div>
     </div>`;

     const htmlIngredientsItem = document.createElement('li');
     htmlIngredientsItem.classList.add("dropdown-menu__option-item","dropdown-menu__option-item--ingredients")
     for (let ingredient of recipe.ingredients){
          htmlIngredientsItem.innerText= ingredient.ingredient;
     }

     const htmlAppareilsItem = document.createElement('li');
     htmlAppareilsItem.classList.add("dropdown-menu__option-item","dropdown-menu__options-item--appliances")
     for (let appareil in recipe){
          htmlAppareilsItem.innerText= recipe.appliance;
     }

     const htmlUstensilesItem = document.createElement('li');
     htmlUstensilesItem.classList.add("dropdown-menu__option-item","dropdown-menu__options-item--utensils")
     for (let ustensile of recipe.ustensils){
          htmlUstensilesItem.innerText= ustensile;
     }

     //Ajout des elements HTML
     cardBody.innerHTML= htmlRecipes;

// Insert HTML elements

     // Partie Ingredients
     cardContainer.appendChild(cardContainerCards);
     cardContainerCards.appendChild(cardImage);
     cardContainerCards.appendChild(cardBody);
     dropdownMenuIngredients.appendChild(htmlIngredientsItem);
     dropdownMenuAppareils.appendChild(htmlAppareilsItem);
     dropdownMenuUstensiles.appendChild(htmlUstensilesItem);

}


let recipeNames= [];
let recipeTimes = [];
for (let recipe of recipes) {
     recipeNames.push(recipe.name);
     recipeTimes.push(recipe.time);
}


















