import {recipes} from "./recipes.js";

// Insert HTML elements
let sectionCardHeader = document.querySelector('.card-container__card-title');
let sectionCardBody = document.querySelector('.card-container__card-description')

sectionCardHeader.innerHTML=`
    <h2>${recipes[0].name}</h2>
    <div class="card-container__card-title-timer">
        <i class="bi bi-clock font-weight-bold"></i>
        <p>${recipes[0].time} min</p>
    </div>`;

sectionCardBody.innerHTML=`
    <div class="col-6 card-container__card-description-ingredients">
        <p><span class="bold">${recipes[0].ingredients[0].ingredient} :</span> ${recipes[0].ingredients[0].quantity ?? ""} ${recipes[0].ingredients[0].unit ?? ""}</p>
        <p><span class="bold">${recipes[0].ingredients[1].ingredient} :</span> ${recipes[0].ingredients[1].quantity ?? ""} ${recipes[0].ingredients[1].unit ?? ""}</p>
        <p><span class="bold">${recipes[0].ingredients[2].ingredient} :</span> ${recipes[0].ingredients[2].quantity ?? ""} ${recipes[0].ingredients[2].unit ?? ""}</p>
        <p><span class="bold">${recipes[0].ingredients[3].ingredient} :</span> ${recipes[0].ingredients[3].quantity ?? ""} ${recipes[0].ingredients[3].unit ?? ""}</p>
        <p><span class="bold">${recipes[0].ingredients[4].ingredient} :</span> ${recipes[0].ingredients[4].quantity ?? ""} ${recipes[0].ingredients[4].unit ?? ""}</p>
    </div>
    <div class="col-6 card-container__card-description-texte">
    <p>${recipes[0].description}</p>
    </div>`

let recipeNames= [];
let recipeTimes = [];
for (let recipe of recipes) {
     recipeNames.push(recipe.name);
     recipeTimes.push(recipe.time);
}

console.log(recipes[0])




















//
//
//
//
// let dropdownMenu = document.querySelector(".dropdown-menu");
// dropdownMenu.addEventListener('click',openMenuList);
//
//
// function openMenuList(e){
//     let dropdownIsOpen = false;
//     if(dropdownIsOpen) {
//         dropdownMenu.classList.add("input-btn-activ");
//     }
// }
//
// function closeMenuList(e) {
//     const buttonInputName = e.currentTarget.getAttribute("name");
//     const container = e.currentTarget.closest(".dropdown-menu");
//     const label = container.querySelector(".dropdown-menu__sort-label");
//     label.classList.remove("label-active")
// }