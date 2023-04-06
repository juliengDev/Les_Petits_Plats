

let ingredientsTab =[];




function setupEventCreateTags(type){

    if(type==="Ingredients") {
        const listItems = document.querySelectorAll(".dropdown-menu__option-item--ingredients")

        listItems.forEach(item=>{
            item.addEventListener('click',event => {
                let tag = event.target.textContent;

                ingredientsTab.push(tag)
                console.log(ingredientsTab)
                createTag(tag,"ingredient")
                setupEventDeleteTags()

            })
        })
    }else if(type==="Appliances"){
        const listItems = document.querySelectorAll(".dropdown-menu__options-item--appliances")

        listItems.forEach(item=>{
            item.addEventListener('click',event => {
                let tag = event.target.textContent;
                createTag(tag,"appliance")
                setupEventDeleteTags()
            })
        })
    }else if(type==="Ustensils"){
        const listItems = document.querySelectorAll(".dropdown-menu__options-item--ustensils")

        listItems.forEach(item=>{
            item.addEventListener('click',event => {
                let tag = event.target.textContent;
                createTag(tag,"ustensils")
                setupEventDeleteTags()
            })
        })
    }

}
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
function setupEventDeleteTags(){

    const buttonsCloseTag = document.querySelectorAll(".tags-container__tag-close-button");
    buttonsCloseTag.forEach(button => {
        button.addEventListener('click', () => {
            const tagDiv = button.closest(' .tags-container-parent ');
            tagDiv.remove();
        });
    });
}

export {setupEventCreateTags,setupEventDeleteTags}
export {ingredientsTab}