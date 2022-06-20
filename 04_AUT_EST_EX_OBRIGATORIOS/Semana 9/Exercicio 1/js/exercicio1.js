function impar_ou_par(){
    var num =document.getElementById("number").value;
    var numValue=parseInt(num[0]);
    if (numValue % 2 === 0){
        document.getElementById("result").innerHTML="O número na casa das centenas é: Par";
    }
    else{
        document.getElementById("result").innerHTML="O número na casa das centenas é: Impar";
    }
}