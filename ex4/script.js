let n1 = parseFloat(prompt("Digite um numero: "))
let n2 = parseFloat(prompt("Digite um numero: "))
let n3 = parseFloat(prompt("Digite um numero: "))
if (n1 > n2 && n1 > n3) {
    document.write("O maior entre eles é:" + n1)
}
if (n1 < n2 && n2 > n3) {
    document.write("O maior entre eles é:" + n2)
}
if (n1 < n2 && n2 < n3) {
    document.write("O maior entre eles é:" + n3)
}
