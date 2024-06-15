function filtreTableau(tableau) {
    // tableau vide pour stocker les nombres pairs
    tableauPair = [];
    // index pour le tableau des nombres pairs
    nombrePair = 0;

    for (nombre = 0; nombre < tableau.length; nombre++) {
        // Si le nombre est pair, on l'ajoute au tableau "tableauPair"
        if (tableau[nombre] % 2 === 0) {
            tableauPair[nombrePair] = tableau[nombre];
            nombrePair++;
        }
    }
    return 'Les nombres pairs sont : ' + tableauPair;
}
//Exemple :
console.log(filtreTableau([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))