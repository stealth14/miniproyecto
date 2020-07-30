var preguntas =[
    "¿Por qué hacer ejercicio diario?",
    "¿Cuál es el mejor tipo de ejercicio para perder peso?",
    "¿Cuál es el músculo más utilizado en el cuerpo humano?",
    "Quienes sudan mucho y de manera abundante, también pierden mucho peso",
    "¿Qué son exactamente las agujetas en el deporte?",
    "¿Cuál es el músculo más grande?",
    "¿Qué se debe hacer en caso de calambres?",
    "¿Los aliemntos dietéticos son buenos para la salud?"
];
var respuestas =[
    ["Todas las anteriores.","Mejor calidad de vida.","Fortaleze tus músculos.","Salud."],
    ["Ejercicios aeróbicos.","Ejercicios de flexibilidad.","Ejercicicos espaciales.","Ejercicios de fuerza y resistencia."],
    ["Músculo cardiaco.","Gluteos."," Músculos lisosgracias.","Triceps."],
    ["No","Si","Talvez","Nunca"],
    ["Son cuerdas que se utilizan para asujetar el calzado.","Es un tipo de ejerccio relacionado con el fortalecimiento de los todillos y rodillas.","Son pequeños desgarros que sufren las fibras musculares al estar expuestas a una sobrecarga.","Ninguna de las anteriores"],
    ["Gluteus maximus.","Latissimus dorsi.","Corazón","Muslo"],
    ["Realizar ejercicios de flexibilidad de todo el cuerpo antes de entrenar.","Calentar previamente antes de entrenar.","Tomar un suplemento de magnesio de forma regular antes del entrenamiento.","Matener un entrenamiento fuerte pero constante sin sobrecarga."],
    ["No","Si","Talvez","Nunca"]
];
let distancia = 0;
var color = 0;
jugar();
var res_correcta;

//chente
function jugar(){
    var indice_aleatorio = Math.floor(Math.random()*preguntas.length);
    var res_posible = respuestas[indice_aleatorio];

    var posiciones = [0,1,2,3];
    var res_reordenadas =[];
    var verificarrepedida=false;
    for (i in res_posible) {
        var posicion_aleatorio = Math.floor(Math.random()*posiciones.length);
        if(posicion_aleatorio==0 && verificarrepedida==false){
            res_correcta=i;
            verificarrepedida=true;
            //alert(i);
        }
        res_reordenadas[i] = res_posible[posiciones[posicion_aleatorio]];
        posiciones.splice(posicion_aleatorio, 1);
    }

    var texto_respuestas="";
    for(i in res_reordenadas){
        texto_respuestas += '<input type ="radio" name="respuesta" value="'+i+'"><label>'+ res_reordenadas[i]+'</label><br>';
    }
    //alert(preguntas[indice_aleatorio]);
    document.getElementById("pregunta").innerHTML= preguntas[indice_aleatorio];
    document.getElementById("respuestas").innerHTML = texto_respuestas;

}

var contestar="";
function validar(){
    var valida = $("input[type=radio]:checked").val();
    if (valida==res_correcta) {
        //alert("Muy bien");
        $('.penitencia-show').toggleClass('penitencia-hide penitencia-show')
        contestar='<h4 class="text-success">¡Haz acertado!</h4>';
        document.getElementById("contestar").innerHTML=contestar;
        animarAvatar();
        jugar();

    }else{
        //alert("Que mal");
        contestar='<h4 class="text-danger">¡Haz fallado!</h4>';
        document.getElementById("contestar").innerHTML=contestar;
        mostrarPenitencia();
        jugar();
    }
    
    
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
    $('.penitenciaRealizar').html('');
    $('.penitencia-hide').toggleClass('penitencia-hide penitencia-show');
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
        'Realize 10 sentadillas',
        'Realize 10 lagartijas',
        'Realize 2 minutos de estiramiento',
        'Realize 3 minutos de estiramient',
        'Realize 8 lagartijas',
        'Realize 2 minutos de estiramiento',
        'Realize 4 sapitos',
        'Mantenga la posición vaca/gato por 1 minuto',
        'Realize 5 flexiones de pecho',
        'Realize 5 flexiones de triceps',
        "Mantenga la posición plancha por 10 minuto"
    ]
    $('.penitenciaRealizar').append(penitencias[numberPenitencia]);
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
