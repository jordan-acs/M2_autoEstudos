function somar(){
    var valor= Number(document.getElementById("num").value);
    valor+=1
    
    document.getElementById("num").value = String(valor)
  }
  
  function subtrair(){
    var valor = Number(document.getElementById("num").value);
    valor = valor - 1 
   
    document.getElementById("num").value = String(valor)
  }