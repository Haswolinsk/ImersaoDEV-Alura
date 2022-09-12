var easySecret = parseInt(Math.random()*11);

function levelEasy(){
    var resultChute = document.getElementById("Easy")
    var chute = parseInt(document.getElementById("valor").value);

    if (chute == easySecret){
        resultChute.innerHTML = `Você acertou`;
    } else if(chute> 10 || chute <0) {
        resultChute.innerHTML = `Não esqueça de escolher um numero de 0 a 10`;
    }
    else{
        /* duas opções para apresentação q o valor esta errado */
        if (chute > easySecret) {
            resultChute.innerHTML = `A resposta é menor q o chute`
        }else{
            resultChute.innerHTML = `A resposta é maior q o chute`
        }

        /* resultChute.innerHTML = `Tente Novamente`; */
    }
}

/* 
var mediumSecret = parseInt(Math.random()*11);

function levelMedium(){

        ////////teste q deu errado ///////
    objetivo era limitar a quantidade de entradas

    var i = 0;
    do{
        i+=1
    }while (i < 3) {
        var resultChute = document.getElementById("Medium")
        var chute = parseInt(document.getElementById("medio").value);
        if (chute == mediumSecret){
            resultChute.innerHTML = `Você acertou`;
            
        } else if(chute> 10 || chute <0) {
            resultChute.innerHTML = `Não esqueça de escolher um numero de 0 a 10`;
            
        } 
        else{
            if (i == 3) {
                resultChute.innerHTML = `Limite de tentaivas atingido. Você Perdeu:[`;
                
            }else{
                resultChute.innerHTML = `Tente Novamente`;
                
            }    
        }
    }
} 
*/

function levelHard(){
    var hardSecret = parseInt(Math.random()*11);
    var resultChute = document.getElementById("Hard")
    var chute = parseInt(document.getElementById("dificil").value);

    if (chute == hardSecret){
        resultChute.innerHTML = `Você acertou`;
    } else if(chute> 10 || chute <0) {
        resultChute.innerHTML = `Não esqueça de escolher um numero de 0 a 10`;
    }
    else{
        resultChute.innerHTML = `Voce errou :[ O numero correto era ${hardSecret}`;
    }
}