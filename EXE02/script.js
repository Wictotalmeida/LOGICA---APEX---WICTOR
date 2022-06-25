let media = 0
let nota1 = parseFloat(prompt('Nota 1:'))
let nota2 = parseFloat(prompt('Nota 2:'))
let nota3 = parseFloat(prompt('Nota 3:'))
media = (nota1 + nota2 + nota3) / 3
if (media > 7) {
    document.write('Aprovado com media maior que 7')
}
else if (media < 7) {
    document.write('reprovado com nota menor que 7')
} else {
    document.write('Você passou de ano nota 7')
}
