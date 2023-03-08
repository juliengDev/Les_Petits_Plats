let dropdownMenuIngredients = document.querySelector(".dropdown-menu--ingredients");
let sortLabelIcon = document.getElementById("sort-label-icon");
let listByIngredients = document.querySelector('.dropdown-menu__options--ingredients')

function toggleDropDownListItems() {
    if(dropdownMenuIngredients.classList.contains("dropdown-menu")){
        dropdownMenuIngredients.classList.toggle('dropdown-menu__extend')
        listByIngredients.classList.toggle('hide')
    }
}


sortLabelIcon.addEventListener('click',toggleDropDownListItems)