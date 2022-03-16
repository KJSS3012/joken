function validar(nome) {

    const opcoes = ["pedra","papel","tesoura"];
    const escolha = Math.floor(Math.random() * opcoes.length);

    for (let index = 0; index < opcoes.length; index++) {
        document.getElementById(opcoes[index]).classList.remove('vc')
        document.getElementById(opcoes[index]).classList.remove('cpu')
        document.getElementById(opcoes[index]).classList.remove('empate')
    }

    document.getElementById(nome).classList.add('vc')
    document.getElementById(opcoes[escolha]).classList.add('cpu')

    if (nome==opcoes[escolha]) {
        document.getElementById('mensagem').innerHTML = "Empate";
        document.getElementById(nome).classList.add('empate')
        document.getElementById(nome).classList.remove('vc')
        document.getElementById(opcoes[escolha]).classList.remove('cpu')
    }else if(nome=="tesoura"&&opcoes[escolha]=="papel"){
        document.getElementById('mensagem').innerHTML = "Venceu";
    }else if(nome=="pedra"&&opcoes[escolha]=="tesoura"){
        document.getElementById('mensagem').innerHTML = "Venceu";
    }else if(nome=="papel"&&opcoes[escolha]=="pedra"){
        document.getElementById('mensagem').innerHTML = "Venceu";
    }else{
        document.getElementById('mensagem').innerHTML = "Perdeu";
    }
}