import {recipes} from "./recipes.js";

for (let recipe of recipes) {
     // Cree les elements HTML
     let cardContainer = document.querySelector('.card-container');

     let cardContainerCards = document.createElement('div');
     cardContainerCards.classList.add("card-container__card", "card", "box", "box-1", "grid-item");

     let cardImage = document.createElement('div');
     cardImage.classList.add("card-img-top", "card-container__card-img");

     let cardBody = document.createElement('div');
     cardBody.classList.add("card-body", "card-container__card-body");

     let descriptionIngredients = document.createElement('div')
     descriptionIngredients.classList.add("col-6", "card-container__card-description-ingredients")

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


     cardBody.innerHTML= htmlRecipes;

// Insert HTML elements
     cardContainer.appendChild(cardContainerCards);
     cardContainerCards.appendChild(cardImage);
     cardContainerCards.appendChild(cardBody);

}


let recipeNames= [];
let recipeTimes = [];
for (let recipe of recipes) {
     recipeNames.push(recipe.name);
     recipeTimes.push(recipe.time);
}


















