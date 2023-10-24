let listaNumeros = [];
let numMax = 100;
let numeroSecreto = gerarNumero();
console.log(numeroSecreto);
let tentativas = 1;

function exibirTexto(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rat:1.2});
}

function exibirTextoInicial (){
    exibirTexto('h1','Jogo do número secreto');
    exibirTexto('p',`escolha um número de 1 a ${numMax}`);
}
exibirTextoInicial();


function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTexto('h1','acertou');
        let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";
        exibirTexto('p',`você acertou o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativas}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if(chute < numeroSecreto){
            exibirTexto('p',`o numero secreto é maior que ${chute}`);
        }else{
            exibirTexto('p',`o numero secreto é menor que ${chute}`);
        }
        tentativas++;
        apagaNumero();
    }
}

function gerarNumero(){
    let numeroEscolhido = parseInt(Math.random() * numMax +1);
    let quantidadeNumeros = listaNumeros.length;

    if (quantidadeNumeros == numMax){
        listaNumeros = [];
    }

    if (listaNumeros.includes(numeroEscolhido)){
        return gerarNumero();
    }else{
        listaNumeros.push(numeroEscolhido);
        console.log(listaNumeros);
        return numeroEscolhido;
    }
}

function apagaNumero(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reset (){
    tentativas = 1;
    numeroSecreto = gerarNumero();
    console.log(numeroSecreto);
    apagaNumero();
    exibirTextoInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
