function check(){
    var number=document.getElementById("num").value;
    if (number.length<14){
        document.getElementById("answer").innerHTML="formato errado"
    }
    else if(number.length>14){
        document.getElementById("answer").innerHTML="formato errado"
    }
    else if((number[0]!="(") && (number[3]!=")") && (number[10]!="-") ){
        document.getElementById("answer").innerHTML="formato errado"
    }
    else{
        document.getElementById("answer").innerHTML="formato correto"
    }
}