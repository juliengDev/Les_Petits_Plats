const sortLabelIconIngredient = document.getElementById("dropdown-menu__sort-ingredient");
const sortLabelIconAppareils = document.getElementById("dropdown-menu__sort-appliances");
const sortLabelIconUstensiles = document.getElementById('dropdown-menu__sort-ustensiles');

sortLabelIconIngredient.addEventListener('click',toggleDropDownListIngredients);
sortLabelIconAppareils.addEventListener('click',toggleDropDownListAppareils);
sortLabelIconUstensiles.addEventListener('click',toggleDropDownListUstensiles);

function toggleDropDownListIngredients() {
    const dropdownMenuIngredients = document.querySelector(".dropdown-menu--ingredients");
    const listByIngredients = document.querySelector('.dropdown-menu__options--ingredients');
    toggleDropdownList(dropdownMenuIngredients,listByIngredients);
}
function toggleDropDownListAppareils() {
    const dropdownMenuAppareils = document.querySelector(".dropdown-menu--appliances");
    const listByAppareils = document.querySelector(".dropdown-menu__options--appliances");
    toggleDropdownList(dropdownMenuAppareils,listByAppareils);
}
function toggleDropDownListUstensiles() {
    const dropdownMenuUstensiles = document.querySelector(".dropdown-menu--utensils");
    const listByUstensiles = document.querySelector(".dropdown-menu__options--utensils");
    toggleDropdownList(dropdownMenuUstensiles,listByUstensiles);
}

function toggleDropdownList(menuCategory,listCategory){
    if(menuCategory.classList.contains('dropdown-menu')){
        menuCategory.classList.toggle('dropdown-menu__extend');
        listCategory.classList.toggle('hide');
    }
}


