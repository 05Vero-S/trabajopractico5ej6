let inputs,
reloj,
horas,
minutos,
segundos,
reiniciar;

window.addEventListener('load',() =>{
    inputs = Array.from(document.getElementById('numero'));
    reloj = document.querySelector('.reloj');

});

function iniciarTemporizador(){
    pausarTemporizador();
    configTemporizador();
    cuentaRegre();

}

function pausarTemporizador(){
    horas=Number(inputs[0].value);
    minutos=Number(inputs[1].value);
    segundos=Number(inputs[2].value);
}

function configTemporizador(){
    reloj.innerHTML = `<p class='numero'>${horas > 9? horas :('0' + horas)} </p><span>hs</span><p class='numero'>${minutos > 9? minutos :('0' + minutos)} </p><span>hs</span><p class='numero'>${segundos > 9? segundos :('0' + segundos)} </p><span>hs</span>`

    document.title = `${horas > 9? horas :('0' + horas)}:${minutos > 9? minutos :('0' + minutos)}:${segundos > 9? segundos :('0' + segundos)}`;
}

function cuentaRegre (){
    reiniciar = setInterval(runner,1000);
}

function runner(){
    if (segundos > 0) {
        segundos--;
    } else {
        if (minutos > 0) {
            segundos = 59;
            minutos--;
        } else {
            if (horas > 0 ) {
                segundos = 59;
                minutos = 59;
                horas--;
            } else {
            alert('Tiempo terminado');
            }
        }
    }

    configTemporizador();
}

function pararTemporizador(){
    clearInterval(reiniciar);
    location.reload();
}