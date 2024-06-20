// Déclaration de la fonction filtreTableau en utilisant une fonction fléchée
const filtreTableau = (tableau) => {
    // Utilisation de la méthode filter pour créer un nouveau tableau contenant uniquement les nombres pairs
    const tableauPair = tableau.filter(nombre => nombre % 2 === 0);

    // Retourne une chaîne de caractères qui inclut les nombres pairs du tableau
    return `Les nombres pairs sont : ${tableauPair}`;
};
//Exemple :
console.log(filtreTableau([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
