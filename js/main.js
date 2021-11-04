function asd(){
    var elemento= document.getElementById('fotos');
    var elemento2= document.getElementById("actionbar");
    var element3 = document.getElementById("barraInferior");
    var element4 = document.getElementById("barraSuperior");
    var posicao = elemento.offsetTop-window.scrollY;
    if(posicao<100){
        elemento2.style.position = 'fixed';
        elemento2.style.width = '100%';
        elemento2.style.top = '40px';
        elemento2.style.backgroundColor = 'white';
        elemento.style.marginTop = '45px';
        
    }else{
        elemento2.style.position = 'static';
        elemento.style.marginTop = '0px';
        element3.style.display = 'flex';
    }
}