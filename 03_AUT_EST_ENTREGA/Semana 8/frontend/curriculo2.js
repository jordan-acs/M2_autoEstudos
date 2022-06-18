const button = $('button');

const popup = $('.popup-wrapper')
/*button.addEventListener('click',() => {
    popup.style.display = 'block'
})*/
button.click(function() {
    popup.css('display','block');
});

function openYT() {
    window.open("www.google.com")
}

var getDBResDiv = "#getDB"
/* Função que faz uma requisição GET */
function TestGETDB(){
    var url = "http://127.0.0.1:3060/habilidades";
    var resposta;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor
    resposta = JSON.parse(xhttp.responseText);
    $(getDBResDiv).append("<br /><br />" + JSON.stringify(resposta));
    $(getDBResDiv).append("<br /><br />* Seleção do atributo 'title' do primeiro usuario:<br />" + resposta[0].title);
    //console.log(xhttp.responseText);
}