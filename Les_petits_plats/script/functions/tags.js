let tag="";

function createTag(tag){
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
}
function setupEventCreateTags(){
    const listItems = document.querySelectorAll(".dropdown-menu__option-item")

    listItems.forEach(item=>{
        item.addEventListener('click',event => {
            tag = event.target.textContent;
            createTag(tag)
            setupEventDeleteTags()
        })
    })
}
function deleteTags(tag){
    const tagsContainer = document.querySelector('.tags-container__tag');
    tagsContainer.remove()

}
function setupEventDeleteTags(){

    const buttonsCloseTag = document.querySelectorAll(".tags-container__tag-close-button")
    // buttonsCloseTag.forEach( button => {
    //     button.addEventListener('click', event => {
    //         //code a saisir ici
    //         // Sélectionnez la div parente de l'élément de bouton de fermeture qui a été cliqué
    //         const tagDiv = button.closest('.tags-container__tag--ingredients-bg');
    //         // Supprimez la div de l'élément parent
    //         button.remove()
    //         tagDiv.remove()
    //     })
    // })

    buttonsCloseTag.forEach(button => {
        button.addEventListener('click', event => {
            // Sélectionnez la div parente de l'élément de bouton de fermeture qui a été cliqué
            const tagDiv = button.closest(' .tags-container-parent ');
            console.log(tagDiv)
            console.log(event.target)
            console.log(event.currentTarget)
            // Supprimez la div parente de l'élément de bouton de fermeture qui a été cliqué
            tagDiv.remove();
        });
    });
}

export {setupEventCreateTags,setupEventDeleteTags}