// Fonction pour générer une séquence de Fibonacci
const fibonacciSequence = (numbers) => {
    // Initialisation la séquence comme un tableau vide
    let sequence = [];

    if (numbers >= 1) {
        sequence.push(0); // Premier nombre de la séquence
    }
    if (numbers >= 2) {
        sequence.push(1); // Deuxième nombre de la séquence
    }

    for (let i = 2; i < numbers; i++) {
        // Ajout à la séquence de la somme des deux nombres précédents
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence;
};
