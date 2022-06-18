





var resultado1=Math.floor(valor/100);
    var resto=valor%100;

    var resultado2=0;
    var resultado3=0;
    var resultado4=0;
    var resultado5=0;
    var resultado6=0;
    var resultado7=0;

        if(resto!=0){
            resultado2=Math.floor(resto/50);
            resto=resto%50;
        }
        if(resto!=0){
            resultado3=Math.floor(resto/20);
            resto=resto%20;
        }
        if(resto!=0){
            resultado4=Math.floor(resto/10);
            resto=resto%10;
        }
        if(resto!=0){
            resultado5=Math.floor(resto/5);
            resto=resto%5;
        }
        if(resto!=0){
            resultado6=Math.floor(resto/2);
            resto=resto%2;
        }
        if(resto!=0){
            resultado7=resto;
        }