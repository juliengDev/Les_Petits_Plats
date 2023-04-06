/**
 * Fonction qui permet de supprimer les doublons d'un tableau passer en parametre
 * @param {Array} tab tab : Tableau de chaine de caractere
 * @returns {any[]}
 */
function removeDuplicates(tab) {
    return [...new Set(tab)];
}

export {removeDuplicates}


