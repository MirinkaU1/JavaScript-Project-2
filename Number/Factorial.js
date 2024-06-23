// Fonction pour calculer la factorielle d'un nombre
const calculerFactorielle = (nombre) => {
    // Vérifier si le nombre est négatif
    if (nombre < 0) {
        return "Impossible";
    }

    // Si le nombre est 0 ou 1, retourner 1
    if (nombre === 0 || nombre === 1) {
        return `Le factoriel de ${nombre} est : 1`;
    } else {
        let resultat = 1;

        // Utiliser une boucle for pour calculer la factorielle
        for (let i = 1; i <= nombre; i++) {
            resultat *= i;
        }
        return `Le factoriel de ${nombre} est : ${resultat}`;
    }
};

//Exemple :
console.log(calculerFactorielle(9));
console.log(calculerFactorielle(3));
console.log(calculerFactorielle(2));
console.log(calculerFactorielle(1));
console.log(calculerFactorielle(0));
