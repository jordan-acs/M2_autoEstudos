//var num1=$("#caixa1").val();
//var num2=$("#caixa2").val();
var resultado=0;
function somar(){
    var num1=parseInt($("#caixa1").val());
    var num2=parseInt($("#caixa2").val());
   resultado= num1+num2;
}

function subtrair(){
    var num1=parseInt($("#caixa1").val());
    var num2=parseInt($("#caixa2").val());
    resultado=num1-num2;
}

function multiplicar(){
    var num1=parseInt($("#caixa1").val());
    var num2=parseInt($("#caixa2").val());
    resultado=num1*num2;
}

function dividir(){
    var num1=parseInt($("#caixa1").val());
    var num2=parseInt($("#caixa2").val());
    resultado=num1/num2;
}

function resto(){
    var num1=parseInt($("#caixa1").val());
    var num2=parseInt($("#caixa2").val());
    resultado= num1%num2;
}

function result(){
    $('#answer').html("a resposta é "+ resultado);
}