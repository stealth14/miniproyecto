//chente
function respuestavalida(){
    var valida;

    //procesar pregunta

    return valida
}

function confirmar(){

    if(respuestavalida()){

        //chequear si es al ultima
        //animar muñeco
        //avanzar siguiente
    }
    else{
        mostrarPenitencia();
    }

}

//ronny
function animarPersonaje(){

}

//diego
function mostrarPenitencia(){

    var indice = Math.random(10-2);

    const penitencias = [
        'haga sentadillas',
        'haga saltos',
        'lagartijas',
        'aplausos'
    ]

    //sacar aleatorio del 1 al 3

    $('#penitencia').append(penitencias[indice]);

}

mostrarPenitencia();