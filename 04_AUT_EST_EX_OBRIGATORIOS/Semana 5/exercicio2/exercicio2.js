const notas=[100,50,20,10,5,2,1] 
function calcular(){
    var valor=parseInt($('#box1').val());
    var texto="";
    
    for(var i=0; i<7; i++){
        
        var qtd_notas = Math.floor(valor/notas[i]);
        valor = valor%notas[i];
        console.log(qtd_notas + " notas de " + notas[i]);
        texto += qtd_notas + " notas de " + notas[i] + "<BR>";
    }
    console.log(texto);
    $('#answer').html(texto);
}