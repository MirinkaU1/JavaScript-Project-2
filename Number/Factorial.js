function calculerFactorielle(nombre) {
    // Vérifier si le nombre est négatif
    if (nombre < 0) {
        return "Impossible";
    }
    if (nombre === 0 || nombre === 1) {  //Si le nombre est 0 ou 1
        return 'Le factoriel de ' + nombre + ' est : 1';
    } else {
        resultat=1;
        for (i = 1; i <= nombre; i++) {  //Si le nombre est sup a 1
            resultat *= i;
        }
        return 'Le factoriel de ' + nombre + ' est : ' + resultat;
    }
}
//Exemple :
console.log(calculerFactorielle(9));
console.log(calculerFactorielle(3));
console.log(calculerFactorielle(2));
console.log(calculerFactorielle(1));
console.log(calculerFactorielle(0));