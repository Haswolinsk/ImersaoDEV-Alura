function ConverterDolar() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);

    var valorEmReal = valorEmDolarNumerico * 5.14;

    console.log(valorEmReal.toFixed(2));

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido =`US$ ${valor} convertendo para real é R$ ${valorEmReal}`;
    elementoValorConvertido.innerHTML = valorConvertido;
    
}

function ConverterEuro() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmEuroNumerico = parseFloat(valor);

    var valorEmReal = valorEmEuroNumerico * 5.20;

    console.log(valorEmReal.toFixed(2));

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = `€U: ${valor} convertendo para real é R$ ${valorEmReal}`;
    elementoValorConvertido.innerHTML = valorConvertido;
}
