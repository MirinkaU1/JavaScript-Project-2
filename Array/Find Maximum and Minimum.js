function findMax(arr) {
    if (arr.length === 0) {
        throw new Error("Le tableau est vide");
    }
    return Math.max(...arr);
}

function findMin(arr) {
    if (arr.length === 0) {
        throw new Error("Le tableau est vide");
    }
    return Math.min(...arr);
}