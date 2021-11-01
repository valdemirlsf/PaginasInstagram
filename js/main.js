function asd(){
    var elemento= document.getElementById('fotos');
    var elemento2= document.getElementById("actionbar");
    var element3 = document.getElementById("barraInferior");
    var posicao = elemento.offsetTop-window.scrollY;
    console.log(posicao);
    if(posicao<40){
        elemento2.style.position = 'fixed';
        elemento2.style.width = '100%';
        elemento2.style.top = '0';
        elemento2.style.backgroundColor = 'white';
        elemento.style.marginTop = '14%';
        element3.style.display = 'none';
    }else{
        elemento2.style.position = 'static';
        elemento.style.marginTop = '0px';
        element3.style.display = 'flex';
    }
}