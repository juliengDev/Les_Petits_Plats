let dropdownMenuIngredients = document.querySelector(".dropdown-menu--ingredients");
let dropdownMenuAppareils = document.querySelector(".dropdown-menu--appliances");
let dropdownMenuUstensiles = document.querySelector(".dropdown-menu--utensils");

let sortLabelIconIngredient = document.getElementById("dropdown-menu__sort-ingredient");
let sortLabelIconAppareils = document.getElementById("dropdown-menu__sort-appliances");
let sortLabelIconUstensiles = document.getElementById('dropdown-menu__sort-ustensiles');

let listByIngredients = document.querySelector('.dropdown-menu__options--ingredients');
let listByAppareils = document.querySelector(".dropdown-menu__options--appliances");
let listByUstensiles = document.querySelector(".dropdown-menu__options--utensils");

sortLabelIconIngredient.addEventListener('click',toggleDropDownListIngredients);
sortLabelIconAppareils.addEventListener('click',toggleDropDownListAppareils);
sortLabelIconUstensiles.addEventListener('click',toggleDropDownListUstensiles);

function toggleDropDownListIngredients() {

    if(dropdownMenuIngredients.classList.contains('dropdown-menu')){
        dropdownMenuIngredients.classList.toggle('dropdown-menu__extend')
        listByIngredients.classList.toggle('hide')
    }
}
function toggleDropDownListAppareils() {

    if(dropdownMenuAppareils.classList.contains('dropdown-menu')){
        dropdownMenuAppareils.classList.toggle('dropdown-menu__extend')
        listByAppareils.classList.toggle('hide')
    }
}
function toggleDropDownListUstensiles() {

    if(dropdownMenuUstensiles.classList.contains('dropdown-menu')){
        dropdownMenuUstensiles.classList.toggle('dropdown-menu__extend')
        listByUstensiles.classList.toggle('hide')
    }
}



