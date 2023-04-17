
import {recipesDisplay,itemDropdownDisplay} from "./display.js"
import {mainSearchDisplay} from "./nominal.js"
import {search} from "./algo.js";


//Variable Globales
/**
 *
 * @type {Array<string>}
 */
let ingredientsTab =[];
/**
 *
 * @type {Array<string>}
 */
let appliancesTab=[];
/**
 *
 * @type {Array<string>}
 */
let ustensilsTab =[];

/**
 * Permet d'initialiser l'event listener du clic sur l'element du filtre avance
 * Va ensuite cree le tag depuis cet element en realisant les operations suivantes :
 * - Verifie si le tag est deja presente dans le tableau de tag associe
 * - Si oui : ne fait rien
 * - Si non :
 *      - Ajoute l'element dans le tableau de tags
 *      - Appel de la fonction createTag()
 *      - Appel de la fonction recipesDisplay()
 *      - Appel de la fonction itemDropdownDisplay()
 *      - Appel de la fonction setupEventDeleteTags()

 * @param {string} type Nom du filtre avance
 */
function setupEventCreateTags(type){

    if(type==="Ingredients") {
        const listItems = document.querySelectorAll(".dropdown-menu__option-item--ingredients");
        const searchInput = document.getElementById("form-control");

        listItems.forEach(item=>{
            item.addEventListener('click',event => {
                let tag = event.target.textContent;
                //Si le tag existe alors ne fait rien
                // Sinon ajoute le tag dans le tableau
                if(!ingredientsTab.includes(tag)) {
                    ingredientsTab.push(tag);
                    createTag(tag, "ingredient");
                    console.log("searchInput value :"+ searchInput.value)
                    search(searchInput.value);
                    recipesDisplay();
                    itemDropdownDisplay();
                    setupEventDeleteTags('ingredient');
                }
            })
        })
    }else if(type==="Appliances"){
        const listItems = document.querySelectorAll(".dropdown-menu__options-item--appliances");
        const searchInput = document.getElementById("form-control");

        listItems.forEach(item=>{
            item.addEventListener('click',event => {
                let tag = event.target.textContent;
                if(!appliancesTab.includes(tag)){
                    appliancesTab.push(tag);
                    createTag(tag,"appliance");
                    search(searchInput.value);
                    recipesDisplay();
                    itemDropdownDisplay();
                    setupEventDeleteTags('appliance')
                }
            })
        })
    }else if(type==="Ustensils"){
        const listItems = document.querySelectorAll(".dropdown-menu__options-item--ustensils");
        const searchInput = document.getElementById("form-control");

        listItems.forEach(item=>{
            item.addEventListener('click',event => {
                let tag = event.target.textContent;
                if(!ustensilsTab.includes(tag)){
                    ustensilsTab.push(tag);
                    createTag(tag,"ustensils");
                    search(searchInput.value);
                    recipesDisplay();
                    itemDropdownDisplay();
                    setupEventDeleteTags('ustensils');
                }
            })
        })
    }

}

/**
 *  Permet de cree l'element et d'ajouter l'element HTML tag
 * @param {string} tag Nom de l'element tag a cree
 * @param {string} type Nom du filtre avance
 */
function createTag(tag,type){

    if(type==="ingredient"){

        const tagsContainer = document.querySelectorAll('.tags-container__tags-for-ingredients');
        tagsContainer.forEach( container => {
            const tagItem = document.createElement('div');
            tagItem.classList.add("tags-container__tag","tags-container-parent", "tags-container__tag--ingredients-bg");
            tagItem.innerHTML=`
                <div class="tags-container__tag tags-container__tag--ingredients-bg">
                    <p class="tags-container__tag-text">${tag}</p>
                    <button class="tags-container__tag-close-button">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="tags-container__tag-close-button-icon-svg">
                            <path d="M12.59 6L10 8.59L7.41 6L6 7.41L8.59 10L6 12.59L7.41 14L10 11.41L12.59 14L14 12.59L11.41 10L14 7.41L12.59 6ZM10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z"
                                  fill="white"/>
                        </svg>
                    </button>
                </div>`;
            container.appendChild(tagItem);
        })
    } else if (type === "appliance") {
        const tagsContainer = document.querySelectorAll('.tags-container__tags-for-appliances');

        tagsContainer.forEach( container => {

            const tagItem = document.createElement('div');
            tagItem.classList.add("tags-container__tag","tags-container-parent", "tags-container__tag--appliances-bg");
            tagItem.innerHTML=`
                <div class="tags-container__tag tags-container__tag--appliances-bg">
                    <p class="tags-container__tag-text">${tag}</p>
                    <button class="tags-container__tag-close-button">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="tags-container__tag-close-button-icon-svg">
                            <path d="M12.59 6L10 8.59L7.41 6L6 7.41L8.59 10L6 12.59L7.41 14L10 11.41L12.59 14L14 12.59L11.41 10L14 7.41L12.59 6ZM10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z"
                                  fill="white"/>
                        </svg>
                    </button>
                </div>`;
            container.appendChild(tagItem);
        })

    } else if (type === "ustensils") {
        const tagsContainer = document.querySelectorAll('.tags-container__tags-for-ustensils');

        tagsContainer.forEach( container => {

            const tagItem = document.createElement('div');
            tagItem.classList.add("tags-container__tag","tags-container-parent", "tags-container__tag--ustensils-bg");
            tagItem.innerHTML=`
                <div class="tags-container__tag tags-container__tag--ustensils-bg">
                    <p class="tags-container__tag-text">${tag}</p>
                    <button class="tags-container__tag-close-button">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="tags-container__tag-close-button-icon-svg">
                            <path d="M12.59 6L10 8.59L7.41 6L6 7.41L8.59 10L6 12.59L7.41 14L10 11.41L12.59 14L14 12.59L11.41 10L14 7.41L12.59 6ZM10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z"
                                  fill="white"/>
                        </svg>
                    </button>
                </div>`;
            container.appendChild(tagItem);
        })
    }
}

/**
 * Permet d'initialiser l'event listener au clic sur l'element HTML tag a supprimer
 * Utilisation de la methode splice pour la suppression de l'element selectionner
 * @param {string} type Nom du filtre avance
 */
function setupEventDeleteTags(type){

    const buttonsCloseTag = document.querySelectorAll(".tags-container__tag-close-button");
    buttonsCloseTag.forEach(button => {
        button.addEventListener('click', (event) => {
            const tagDiv = button.closest(' .tags-container-parent ');
            const tagText = event.currentTarget.previousElementSibling.textContent;
            const searchInput = document.getElementById("form-control");
            tagDiv.remove();

            if(type==="ingredient"){
                 ingredientsTab.forEach(ingredient => {
                    if(ingredient === tagText) {
                        ingredientsTab.splice(ingredientsTab.indexOf(ingredient),1);
                    }
                })
            }else if (type ==='appliance'){
                appliancesTab.forEach(appliance => {
                    if(appliance === tagText) {
                        appliancesTab.splice(appliancesTab.indexOf(appliance),1);
                    }
                })
            }else if(type === 'ustensils'){
                ustensilsTab.forEach(ustensil => {
                    if(ustensil === tagText) {
                        ustensilsTab.splice(ustensilsTab.indexOf(ustensil),1);
                    }
                })
            }
            mainSearchDisplay(searchInput.value)
        });
    });
}

export {setupEventCreateTags,setupEventDeleteTags}
export {ingredientsTab,appliancesTab,ustensilsTab}