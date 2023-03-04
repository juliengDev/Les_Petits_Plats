let dropdownMenu = document.querySelector(".dropdown-menu");


dropdownMenu.addEventListener('click',openMenuList);


function openMenuList(e){
    let dropdownIsOpen = false;
    if(dropdownIsOpen) {
        dropdownMenu.classList.add("input-btn-activ");
    }
}

function closeMenuList(e) {
    const buttonInputName = e.currentTarget.getAttribute("name");
    const container = e.currentTarget.closest(".dropdown-menu");
    const label = container.querySelector(".dropdown-menu__sort-label");
    label.classList.remove("label-active")
}