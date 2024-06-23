// Fonction pour vérifier si un nombre est premier
const nombrePremier = (nombre) => {
    // Si le nombre est inférieur ou égal à 1, il n'est pas premier
    if (nombre <= 1) {
        return `Le nombre ${nombre} n'est pas premier.`;
    }

    // Vérification des diviseurs potentiels jusqu'à la racine carrée du nombre
    for (let i = 2; i <= Math.sqrt(nombre); i++) {
        // Si le nombre est divisible par i, il n'est pas premier
        if (nombre % i === 0) {
            return `Le nombre ${nombre} n'est pas premier.`;
        }
    }

    // Si aucun diviseur n'est trouvé, le nombre est premier
    return `Le nombre ${nombre} est premier.`;
};

//Exemple :
console.log(nombrePremir(23));
