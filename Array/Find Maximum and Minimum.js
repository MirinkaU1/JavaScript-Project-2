// Fonction pour trouver le nombre maximum dans un tableau
const findMax = (num) => {
    let maxValue = num[0];

    for (let index = 1; index < num.length; index++) {
        if (num[index] > maxValue) {
            maxValue = num[index];
        }
    }
    return `Le nombre maximum est ${maxValue}`;
};

//Exemple:
console.log(findMax([1, 20, 3, 4, 5, 6, 7, 8, 9, 10]));


// Fonction pour trouver le nombre minimum dans un tableau
const findMin = (num) => {
    let minValue = num[0];

    for (let index = 1; index < num.length; index++) {
        if (num[index] < minValue) {
            minValue = num[index];
        }
    }
    return `Le nombre minimum est ${minValue}`;
};

//Exemple:
console.log(findMin([1, 20, 3, 4, 5, 6, 7, 8, 9, 10]));

