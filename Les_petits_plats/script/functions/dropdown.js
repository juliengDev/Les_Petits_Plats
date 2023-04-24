const sortLabelIconIngredient = document.getElementById("dropdown-menu__sort-ingredient");
const sortLabelIconAppareils = document.getElementById("dropdown-menu__sort-appliances");
const sortLabelIconUstensiles = document.getElementById('dropdown-menu__sort-ustensils');

function toggleDropDownListIngredients() {
    const dropdownMenuIngredients = document.querySelector(".dropdown-menu--ingredients");
    const listByIngredients = document.querySelector('.dropdown-menu__options--ingredients');
    const inputIngredients = document.getElementById("sort-by-ingredients");
    toggleDropdownList(dropdownMenuIngredients,listByIngredients,inputIngredients,"ingredients");
}
function toggleDropDownListAppareils() {
    const dropdownMenuAppareils = document.querySelector(".dropdown-menu--appliances");
    const listByAppareils = document.querySelector(".dropdown-menu__options--appliances");
    const inputAppliances = document.getElementById("sort-by-appareils")
    toggleDropdownList(dropdownMenuAppareils,listByAppareils,inputAppliances,"appareils");
}
function toggleDropDownListUstensiles() {
    const dropdownMenuUstensiles = document.querySelector(".dropdown-menu--ustensils");
    const listByUstensiles = document.querySelector(".dropdown-menu__options--ustensils");
    const inputUstensils = document.getElementById("sort-by-ustensils");
    toggleDropdownList(dropdownMenuUstensiles,listByUstensiles,inputUstensils,"ustensils");
}

function toggleDropdownList(menuCategory,listCategory,input,type){
    if(menuCategory.classList.contains('dropdown-menu')){
        menuCategory.classList.toggle('dropdown-menu__extend');
        listCategory.classList.toggle('hide');
        if(input.value === "Ingrédients" || input.value === "Appareils" || input.value === "Ustensiles"){
            input.value=""
        }else {
            if(type === "ingredients") {
                input.value="Ingrédients";
            }else if(type === "appareils"){
                input.value="Appareils"
            }else if(type==="ustensils"){
                input.value="Ustensiles"
            }
        }
    }
}

function initDropdown(){
    sortLabelIconIngredient.addEventListener('click',toggleDropDownListIngredients);
    sortLabelIconAppareils.addEventListener('click',toggleDropDownListAppareils);
    sortLabelIconUstensiles.addEventListener('click',toggleDropDownListUstensiles);
}

export {initDropdown}