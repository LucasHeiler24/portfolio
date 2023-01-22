const msg = "Lucas Heiler";
let titulo = document.querySelector('.titulo');
for(var i=0; i<msg.length; i++){
    (function(pos){
        setTimeout(function(){
           titulo.innerHTML += msg.charAt(pos);
        },500*pos);
    })(i);
}
function mostra(id){
    if(document.getElementById(id).style.display == 'block'){
        document.getElementById(id).style.display = 'none';
        document.getElementById('b' + id).value="Mostrar mais";
    }
    else{ document.getElementById(id).style.display = 'block';
    document.getElementById('b' + id).value="Mostrar menos";
    }
}
$('#btn-mostrar').click(
    function(){
        $('#caixa').toggle()
    }
)
$('#btn-css').click(
    function(){
        $('#caixa-2').toggle()
    }
)
$('#btn-js').click(
    function(){
        $('#caixa-3').toggle()
    }
)
$('#btn-jquery').click(
    function(){
        $('#caixa-4').toggle()
    }
)
$('#btn-php').click(
    function(){
        $('#caixa-5').toggle()
    }
)
$('#btn-pyton').click(
    function(){
        $('#caixa-6').toggle()
    }
)
const btnMobile = document.getElementById('menu-mobile');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);

function menuAbre(){
    let ul = document.querySelector('.navbar ul');

    if(ul.classList.contains("open")){
        ul.classList.remove("open");
    }
    else {
        ul.classList.add("open");
    }
}