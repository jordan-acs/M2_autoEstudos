function ordenar() {
    
    var resultado = ""
    var lista = document.querySelector("#box1").value;
    var arrayLista = lista.split(",")
    arrayLista.sort(function (a, b) {
        return a - b;
    });
    for (i = 0; i != arrayLista.length; i++) {
        resultado += " " + arrayLista[i];
    }
    var numeroEscolhido = document.querySelector("#numeroEscolhido").value;
    var i
    var j
    var focoPosicao = 1
    // var foco = document.querySelector("#box2").value;
    for (j = 0; numeroEscolhido != arrayLista[j]; j++) {
        focoPosicao++
    }

    document.getElementById("resposta1").innerHTML = `A sequencia ordenada é ${resultado}`;
    document.getElementById("resposta2").innerHTML = `O número escolhido está na posição ${focoPosicao}`;
}