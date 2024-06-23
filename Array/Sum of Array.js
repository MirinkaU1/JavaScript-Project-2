// Fonction pour calculer la somme des éléments d'un tableau
const sommeTableau = (tableau) => {
    // Initialisqtion de la somme à 0
    let somme = 0;

    // Utilisqtion d'une boucle for pour parcourir chaque élément du tableau
    for (let nombre = 0; nombre < tableau.length; nombre++) {
        somme += tableau[nombre];
    }
    return `La somme est : ${somme}`;
};

//Exemple:
console.log(sommeTableau([1, 20, 3, 4, 5, 6, 7, 8, 9, 10]));
