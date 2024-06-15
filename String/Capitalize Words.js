function capitalizeFirstLetter(sentence) {
    let capitalizedSentence = ''; // Initialisation de la phrase avec les premières lettres en majuscules

    for (i = 0; i < sentence.length; i++) {
        // Si le caractère précédent ou le premier caractère est un espace, mettez en majuscule le caractère actuel
        if (i === 0 || sentence[i - 1] === ' ') {
            capitalizedSentence += sentence[i].toUpperCase();
        } else {
            capitalizedSentence += sentence[i]; // Sinon, ajoutez le caractère tel quel
        }
    }

    return capitalizedSentence;
}