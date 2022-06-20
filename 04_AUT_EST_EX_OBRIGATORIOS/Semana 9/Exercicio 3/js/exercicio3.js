function ordena(){
    var nomes=document.getElementById("name").value;
    nomes = nomes.split(", ");
    var ordem = nomes.sort();
    document.getElementById("result").innerHTML = ordem;
    console.log(nomes);
    }