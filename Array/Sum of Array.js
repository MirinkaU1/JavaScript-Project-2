const sommeTableau = (tableau) => {
    let somme = 0;

    for (let nombre = 0; nombre < tableau.length; nombre++) {
        somme += tableau[nombre];
    }
    return `La somme est : ${somme}`;
};

//Exemple:
console.log(sommeTableau([1, 20, 3, 4, 5, 6, 7, 8, 9, 10]));
