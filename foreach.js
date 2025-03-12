function contar() { // responsável por contar os números (da variável criada)
    let numero = 0; // inicializa a variável número com 0
    let txtNumeroFinal = document.getElementById("txtNumeroFinal"); // div pega o elemento de entrada pelo id
    let divNumeros = document.getElementById("divNumeros"); // obtém a div que os números serão exibidos

    divNumeros.innerHTML = ""; // limpa o conteúdo da div antes de exibir os números

    for (var i = numero; i <= txtNumeroFinal.value; i++) { // loop de contagem de 0 até o número citado // i = i + 1
        divNumeros.innerHTML += i + "<br/>"; // += vai fazer com que a variável receba ela mesma + o valor desejado
    }
}

document.getElementById("txtNumeroFinal").addEventListener('keyup', function(event) {
    if (event.keyCode == 13) { 
        contar(); // esse bloco é para o enter funcionar 
    } else {
        if (
            isNaN(event.key) &&
            event.keyCode != 8  && // código da tecla backspace
            event.keyCode != 35 && // tecla end
            event.keyCode != 36 && // tecla home
            event.keyCode != 37 && // tecla seta para esquerda
            event.keyCode != 38 && // tecla seta para cima
            event.keyCode != 39 && // tecla seta para direita
            event.keyCode != 40 && // tecla seta para baixo
            event.keyCode != 46    // tecla delete
        ) { 
            console.log("Não é um número", event.keyCode); // mostra no console que apenas números podem ser digitados
            divNumeros.innerHTML =  "<span style='color: red;'>Não é permitido teclar teclas não numéricas, por favor, digite apenas números e tente novamente!</span>"; 
        }
    }
});
    document.getElementById("txtNumeroFinal").addEventListener('input', function(event) { //esta linha serve para fazer o botão funcionar ao clicar no ENTER   
        if (this.value.length > 3) {
            if (this.value > 999){
                this.value = 999;
                alert ("O número máximo permitido é 999!")
            } else {
            console.log("Tem mais de 3 caracteres");
            this.value = this.value.substring(0,3);
        }
     }
});
