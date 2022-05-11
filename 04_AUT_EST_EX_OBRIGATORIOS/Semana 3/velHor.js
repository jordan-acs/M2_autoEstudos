function result(){
    const gravity=10;
    var velocidadeInicial= document.getElementById("v0").value;
    var tMax= velocidadeInicial/gravity;
    var hMax= (parseInt(velocidadeInicial)**2)/(2*gravity);
    document.getElementById("answer").innerHTML+=`o tempo total é ${tMax} segundos e a altura máxima é ${hMax} metros`;
    alert(tMax);
    console.log(tMax);
}
