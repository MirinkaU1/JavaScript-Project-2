function nombrePremier(nombre) {
    if (nombre <= 1) {  // Si le nombre est inf ou egal a 1.
        return 'Le nombre '+ nombre + ' n est pas premier.';
    }
    for (i = 2; i <= Math.sqrt(nombre); i++) {  // Si le nombre est supp a 1 (Math.sqrt() est la racine carré).
        if (nombre % i === 0) {  // Si le nombre est divisible par i, il n'est pas premier.
            return 'Le nombre '+ nombre + ' n est pas premier.';
        }
    }
    return 'Le nombre '+ nombre + ' est premier.'; // Si nous ne trouvons aucun diviseur, alors le nombre est premier.
}
//Exemple :
console.log(nombrePremir(23));