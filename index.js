
var color = 0;

//chente
function respuestavalida() {
    var valida;

    //procesar pregunta

    return valida
}

function confirmar() {

    if (respuestavalida()) {

        animarAvatar();
    } else {
        mostrarPenitencia();
    }

}

//ronny
const animarAvatar = () => {
    cambiarColor();

	$( "#avatar" ).animate({
        left: `+=75`,
      }, 1000, function() {
        // Animation complete.
        console.log( "animated!" );
      });

}
const reiniciarAvatar = () => {
	$( "#avatar" ).animate({
        left: `-=${300}`,
      }, 1000, function() {
        // Animation complete.
        console.log( "animated!" );
      });
}

const cambiarColor = () => {
    const colors = [
        '#73F2A4',
        '#ba68c8',
        '#64b5f6',
        '#e6ee9c'
    ];
    if(color==colors.length-1){color=0}
    
    $( ".panelanimacion" ).animate({        
        backgroundColor:colors[color],
      },300,function(){
          console.log('color changed');
          color++;
      });
}

const pulsacion = () =>{
    setInterval(()=>cambiarTamanio({width:'120px',height:'120px'}),200);

    setInterval(()=>cambiarTamanio({width:'100px',height:'100px'}),100);
}

const cambiarTamanio = (dimensiones) =>{
    $( "#avatar" ).animate({
        width: dimensiones.width,
        height: dimensiones.height
      }, 200, function() {
        // Animation complete.
        console.log( "animated!" );
      });
}

//diego

function mostrarPenitencia() {

    numberPenitencia = Math.floor(Math.random() * (21 - 1)) + 1;
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

    console.log(penitencias[numberPenitencia]);
    $('.opsy').html('');
    $('.opsy').append(penitencias[numberPenitencia]);

}


let numberPenitencia;
$('#mostrarPenitencia').on('click', function () {
    mostrarPenitencia();
});


  $(document).ready(
      ()=>{
            $('#btn-animar').on(
                'click',animarAvatar
            )

            $('#btn-reiniciar').on(
                'click',reiniciarAvatar
            )

            $('#btn-pulsacion').on(
                'click',pulsacion
            )
            
            $('#btn-color').on(
                'click',cambiarColor
            )
            
      }
  )
