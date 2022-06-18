function calcular(){
    var num = Number(document.getElementById("value").value)
    var turno =  document.querySelector('input[name="turno"]:checked').value;
    var morning = 200
    var night = 100
    var value = document.getElementById("Value")

    console.log(num)
    console.log(turno)

    if(turno == "Diurno"){
        if(num > 50){
            var total1 = (morning*0.6)*num
            console.log(total1)
            value.innerHTML = total1
        }
        else{
            var total1 = morning*num
            console.log(total1)  
            value.innerHTML = total1
        }
    }
    else {
        if(num > 50){
            var total2 = (night*0.8)*num
            console.log(total2)
            value.innerHTML = total2
        }
        else{
            var total2 = night*num
            console.log(total2)
            value.innerHTML = total2
        }
    }
}