//chente
function respuestavalida() {
  var valida;

  //procesar pregunta

  return valida
}

function confirmar() {

  if( respuestavalida() ) {

    //chequear si es al ultima
    //animar muñeco
    //avanzar siguiente
  } else {
    mostrarPenitencia();
  }

}

//ronny
function animarPersonaje() {

}

//diego
$( document ).ready( function() {

  let numberPenitencia;

  function mostrarPenitencia() {

    numberPenitencia = Math.floor( Math.random() * (21 - 1) ) + 1;
    const penitencias = [
      'Realize 5 sentadillas',
      'Realize 10 saltos de tijeras',
      'Realize 5 lagartijas',
      'Realize 6 sapitos',
      'Realize 15 saltos de tijeras',
      'realize 8 abdominales',
      'Realize 20 segundos de posicion plancha',
      'Realize 15 segundos de posicion plancha',
      'Realize 15 segundos de posicion plancha lateral',
      'realize 10 sentadillas',
      'realize 10 lagartijas',
      'realize 2 minutos de estiramiento',
      'realize 3 minutos de estiramient',
      'realize 8 lagartijas',
      'realize 2 minutos de estiramiento',
      'Realize 4 sapitos',
      'mantenga la posición vaca/gato por 1 minuto',
      'realize 5 flexiones de pecho',
      'realize 5 flexiones de triceps',
      "mantenga la posición plancha por 10 minuto"
    ]

    //sacar aleatorio del 1 al 3

    //$( '#penitencia' ).append( penitencias[numberPenitencia] );

  }

  $( '.verificarRespuesta' ).on( 'click', function() {
    $( '.opsy' ).html( 'Oopsy!!' );
    $( '#penitencia' ).append( penitencias[numberPenitencia] );
  } )
} )