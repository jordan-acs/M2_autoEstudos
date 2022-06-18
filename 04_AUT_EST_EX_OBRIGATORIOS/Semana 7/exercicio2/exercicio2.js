function trocar() {
    var numero1=document.getElementById("box1").value;
    var numero2=document.getElementById("box2").value;
    
    document.getElementById("box1").value = numero2;
    document.getElementById("box2").value = numero1;
}