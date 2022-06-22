// const button2 = $('button');

// const popup = $('.popup-wrapper')
/*button.addEventListener('click',() => {
    popup.style.display = 'block'
})*/
/* button2.click(function() {
    popup.css('display','block');
}); */

function openYT() {
    window.open("www.google.com")
}


function mostrar(){
    document.getElementById("resposta").innerHTML = "";

    var resposta=[]
    $.ajax({
        url: "http://127.0.0.1:3060/habilidades",
        type: 'GET',
        async: false,
        success: data => {
          data.forEach(habilidade => {
        resposta.push(habilidade);
          });
        }
      });
      resposta.forEach(element => {
        document.getElementById("resposta").innerHTML += element['descricao'] + "<br>"
      })
      
}