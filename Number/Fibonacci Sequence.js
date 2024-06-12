function fibonacciSequence(numbers) {
    let sequence = [];
    if (numbers >= 1) {
        sequence.push(0);
    }
    if (numbers >= 2) {
        sequence.push(1);
    }
    for (let i = 2; i < numbers; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence;
}