/**
 * Fonction qui permet de supprimer les doublons d'un tableau.
 * @param {Array<string>} tab tab : Tableau de chaine de caractere
 * @returns {Array<string>}  Retourne le tableau trie
 */
function removeDuplicates(tab) {
    return [...new Set(tab)];
}

export {removeDuplicates}


