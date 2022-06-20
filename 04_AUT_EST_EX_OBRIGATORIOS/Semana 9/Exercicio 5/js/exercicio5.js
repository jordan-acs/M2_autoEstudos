function confere(){
    var first = document.getElementById("first").value;
    var last = document.getElementById("last").value;
    var answer = document.getElementById("answer");
    var text='';
    var divisor;
  
    for(var count=first ; count<=last ; count++){
        divisor=0;
        for(var aux=1 ; aux<=count ; aux++)
            if(count % aux == 0)
                divisor++;
  
        if(divisor==2)
            text += count + "<br>";

    }

    answer.innerHTML = text;
  }