// Fonction pour mettre en majuscule la première lettre de chaque mot dans une phrase
const capitalizeFirstLetter = (sentence) => {
    let capitalizedSentence = '';

    for (let i = 0; i < sentence.length; i++) {
        // Si le caractère actuel est le premier ou si le caractère précédent est un espace
        if (i === 0 || sentence[i - 1] === ' ') {
            // Mettre en majuscule le caractère actuel et l'ajouter à la phrase
            capitalizedSentence += sentence[i].toUpperCase();
        } else {
            // Sinon, ajouter le caractère tel quel à la phrase
            capitalizedSentence += sentence[i];
        }
    }

    return capitalizedSentence;
};
