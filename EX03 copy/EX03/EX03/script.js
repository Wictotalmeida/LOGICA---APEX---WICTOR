
let valor1 = parseFloat(prompt('DIGITE UM NUMERO'))
let valor2 = parseFloat(prompt('Digite outro numero'))
let op = parseFloat(prompt(`1 - Soma
2 - Subtração
3 - Multiplicação
4 - Divisão`))

if (op == 1) {
    document.write(valor1 + valor2)
} else if (op == 2) {
    document.write(valor1 - valor2)
} else if (op == 3) {
    document.write(valor1 * valor2)
} else if (op == 4) {
    document.write(valor1 / valor2)
} else if (op == 5) {
    document.write(valor1 % valor2)
}