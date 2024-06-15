//Fonction Find Maximum
function findMax(num) {
    maxValue = num[0];

    for (index = 1; index < num.length; index++) {
        if (num[index] > maxValue) {
            maxValue = num[index];
        }
    }
    return 'Le nombre maximum est ' + maxValue;
}
//Exemple:
console.log(findMax([1, 20, 3, 4, 5, 6, 7, 8, 9, 10]));


//Fonction Find Minimum
function findMin(num) {
    minValue = num[0];

    for (index = 1; index < num.length; index++) {
        if (num[index] < minValue) {
            minValue = num[index];
        }
    }
    return 'Le nombre minimum est ' + minValue;
}
//Exemple:
console.log(findMin([1, 20, 3, 4, 5, 6, 7, 8, 9, 10]));

