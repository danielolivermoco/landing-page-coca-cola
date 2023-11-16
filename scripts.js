function trocaImagem(num) {
    document.querySelector(".lata-base").src = num;
}

function trocaFundo(num) {
    let fundo = document.querySelector(".sec");
    fundo.style.background = num;
}