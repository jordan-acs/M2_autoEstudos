function fibonacci(){
    var n = document.getElementById("num").value;
    var fibonacci = [1,1];
  
    for (i = 1; i <=parseInt(n); i++) {
      fibonacci.push(fibonacci[i] + fibonacci[i - 1]);
    }
   for(i=0; i<parseInt(n); i++){
    document.getElementById("result").innerHTML += fibonacci[i]+"," ;
   }
}