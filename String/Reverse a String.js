const inverses = (chaine) => {
    let chaineInverse = '';

    for (let index = chaine.length - 1; index >= 0; index--) {
        chaineInverse += chaine[index];
    }
    return `L'inverse de ${chaine} est : ${chaineInverse}`;
};
//Exemple :
console.log(inverses('MOHAMED'))
