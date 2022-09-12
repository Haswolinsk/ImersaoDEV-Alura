var nome = "André"
var texto = "Media Final"

var primeiraNota = 6
var segundaNota = 6
var terceiraNota = 6
var quartaNota = 5.9

var notaFinal = ((primeiraNota + segundaNota + terceiraNota + quartaNota) / 4).toFixed(1)


console.log(nome + " sua nota foi "+ notaFinal)
if (notaFinal > 6 || notaFinal == 6) {
    console.log("Parabens voce passou!!!")
} else{
    console.log("Voce não passou...")
    console.log("Boa sorte na recuperação :]")
}


/* 
.toFixed serve para mostrar as casas decimais apos a virgula
console.log serve para escrever o resultado no console da pagina
*/