export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    if(b === 0 ){
        throw "Não é possível dividir por zero.";
    }
    return a / b;
}