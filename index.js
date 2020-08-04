$("#denuevo").hide();
var progress = 0;

var preguntas = [
    "¿Por qué hacer ejercicio diario?",
    "¿Cuál es el mejor tipo de ejercicio para perder peso?",
    "¿Cuál es el músculo más utilizado en el cuerpo humano?",
    "¿Quienes sudan mucho y de manera abundante, también pierden mucho peso?",
    "¿Qué son exactamente las agujetas en el deporte?",
    "¿Cuál es el músculo más grande?",
    "¿Qué se debe hacer para evitar calambres?",
    "¿Los alimentos dietéticos son buenos para la salud?",
    "¿Cuánto tiempo se necesita para crear un hábito?",
    "¿Qué son los suplementos dietéticos"];
var respuestas = [
    ["Todas.", "Mejor calidad de vida.", "Fortalece tus músculos.", "Salud."],
    ["Ejercicios aeróbicos.", "Ejercicios de flexibilidad.", "Ejercicicos espaciales.", "Ejercicios de fuerza y resistencia."],
    ["Músculo cardiaco.", "Gluteos.", " Músculos lisos.", "Triceps."],
    ["No.", "Si.", "Talvez.", "Nunca."],
    ["Desgarros que sufren las fibras musculares.","Cuerdas para asujetar el calzado.", "Ejercicio de los tobillos y rodillas.","Ninguna."],
    ["Gluteus maximus.", "Latissimus dorsi.", "Corazón", "Muslo"],
    ["Tomar un suplemento de magnesio.","Ejercicios de flexibilidad antes de entrenar.", "Calentar previamente antes de entrenar.", "Entrenamiento constante y sin sobrecarga."],
    ["Son buenos con control de un nutricionista.", "No son buenos para la salud.", "Son buenos, por ser sustitutos energéticos que no engordan.", "Ni buenos, ni malos."],
    ["66 días.", "56 días.", "21 días.", "40 días."],
    ["Alimentos cuyo objetivo es complementar un régimen normal.", "Nutrientes: vitaminas y minerales.", "Son alimentos que ayudan a nuestro cuerpo a perder peso.", "Suplementos vitamínicos que ayudan a una dieta."]
];
let distancia = 0;
var color = 0;
jugar();
var res_correcta;
//response selection
var selectedResponse;

//cronometro
var min = 0;
var s = 0;
var ms = 0;
//referencia a funcion de intervalo
var ref;

const iniciarContador = () => {

    ref = setInterval(() => {
        if (ms < 59) {
            $('#cronometro h3').html(`${min < 10 ? `0${min}` : min}:${s < 10 ? `0${s}` : s}:${ms < 10 ? `0${ms}` : ms}`);
            ms++;
        } else {
            ms = 0;

            if (s < 59) {
                s++;
            } else {
                s = 0;
                min++;
            }
        }

    }, 10);
}

const reiniciarContador = () => {
    $('#cronometro h3').html('00:00:00');
    clearInterval(ref);
    ref = null;
    min = 0;
    ms = 0;
    s = 0;

}

const reiniciarProgressbar = () => {
    progress = 0;
}

const detenerContador = () => {
    //detener contador
    clearInterval(ref);
}


//chente
function jugar() {
    var indice_aleatorio = Math.floor(Math.random() * preguntas.length);
    var res_posible = respuestas[indice_aleatorio];

    var posiciones = [0, 1, 2, 3];
    var res_reordenadas = [];
    var verificarrepedida = false;
    for (i in res_posible) {
        var posicion_aleatorio = Math.floor(Math.random() * posiciones.length);
        if (posicion_aleatorio == 0 && verificarrepedida == false) {
            res_correcta = i;
            verificarrepedida = true;
            //alert(i);
        }
        res_reordenadas[i] = res_posible[posiciones[posicion_aleatorio]];
        posiciones.splice(posicion_aleatorio, 1);
    }

    var texto_respuestas = "";
    for (i in res_reordenadas) {
        texto_respuestas += '<input type ="radio" name="respuesta" value="' + i + '"><label>' + res_reordenadas[i] + '</label><br>';
    }
    //alert(preguntas[indice_aleatorio]);
    $('#pregunta').empty();
    $('#pregunta').append(preguntas[indice_aleatorio]);

    //agrega opciones de respuesta
    $('#responses').html('');

    res_reordenadas.forEach(
        (res_reordenada, index) => {
            $('#responses').append(
                `<option value="${index}">${res_reordenada}</option>`
            )
        }
    )

}

var contestar = "";
function validar() {
    console.log(selectedResponse);
    console.log(res_correcta);


    if (selectedResponse == res_correcta) {
        $('.penitencia').hide();
        //alert("Muy bien");
        contestar = '<h4 class="text-success">¡Correcto!</h4>';
        document.getElementById("contestar").innerHTML = contestar;
        animarAvatar();
        reiniciarProgressbar();
        jugar();
        
    } else {
        $('.penitencia').show();

        //alert("Que mal");
        contestar = '<h4 class="text-danger">¡Fallaste!</h4>';
        document.getElementById("contestar").innerHTML = contestar;
        mostrarPenitencia();
        reiniciarProgressbar();
        pulsacionColor();
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
    var ancho = $('.panelanimacion').width()
    const tramo = ancho * 0.2;


    $("#avatar").animate({
        left: `+=${tramo}`,
    }, 300, function () {
        distancia += tramo;

        if (distancia > (ancho - (ancho * 0.2))) {
            const cron = $('#cronometro h3')
            contestar = `<h4 class="text-success">Ganaste el juego!! Tu tiempo fué ${cron.html()}</h4>`;
            //deshabilita 
            $("#cont").prop('disabled', true);
            $('#denuevo').show();

            document.getElementById("contestar").innerHTML = contestar;
            $('.penitencia').hide();
            reiniciarAvatar();
            detenerContador();
            reiniciarContador();
        }
        // Animation complete.
        console.log("animated!");
    });

}
const reiniciarAvatar = () => {

    $("#avatar").animate({
        left: `-=${distancia}`,
    }, 300, function () {
        // Animation complete.
        distancia = 0;
        console.log("animated!");
    });
}

const cambiarColor = () => {
    const colors = [
        '#64b5f6',
        '#73F2A4',
        '#ba68c8',
        '#e6ee9c'
    ];
    if (color == colors.length - 1) { color = 0 }

    $(".panelanimacion").animate({
        backgroundColor: colors[color],
    }, 300, function () {
        console.log('color changed');
        color++;
    });
}

const pulsacion = () => {
    setInterval(() => cambiarTamanio({ width: '120px', height: '120px' }), 200);

    setInterval(() => cambiarTamanio({ width: '100px', height: '100px' }), 100);
}

const cambiarTamanio = (dimensiones) => {
    $("#avatar").animate({
        width: dimensiones.width,
        height: dimensiones.height
    }, 200, function () {
        // Animation complete.
        console.log("animated!");
    });
}

const pulsacionColor = () => {
    const colors = [
        '#73F2A4',
        '#ba68c8',
        '#64b5f6',
        '#e6ee9c'
    ];
    if (color == colors.length - 1) { color = 0 }

    $(".panelanimacion").animate({
        backgroundColor: 'red',
    }, 50, function () {

        $(".panelanimacion").animate({
            backgroundColor: colors[color],
        }, 300);

    });
}

//diego

function mostrarPenitencia() {

    numberPenitencia = Math.floor(Math.random() * (21 - 1)) + 1;
    const penitencias = [
        'Completa 5 sentadillas',
        'Completa 10 saltos de tijeras',
        'Completa 5 lagartijas',
        'Completa 6 sapitos',
        'Completa 15 saltos de tijeras',
        'Completa 8 abdominales',
        'Completa 20 segundos de posicion plancha',
        'Completa 15 segundos de posicion plancha',
        'Completa 15 segundos de posicion plancha lateral',
        'Completa 10 sentadillas',
        'Completa 10 lagartijas',
        'Completa 2 minutos de estiramiento',
        'Completa 3 minutos de estiramient',
        'Completa 8 lagartijas',
        'Completa 2 minutos de estiramiento',
        'Completa 4 sapitos',
        'Mantenga la posición vaca/gato por 1 minuto',
        'Completa 5 flexiones de pecho',
        'Completa 5 flexiones de triceps',
        "Mantenga la posición plancha por 10 minuto"
    ]

    console.log(penitencias[numberPenitencia]);
    $('.opsy').html('');
    $('.opsy').append(penitencias[numberPenitencia]);
}


let numberPenitencia;
$('#mostrarPenitencia').on('click', function () {
    mostrarPenitencia();
});
const jugarDenuevo = () => {
    $("#cont").prop('disabled', false);
    reiniciarContador();
    iniciarContador();
    $("#denuevo").hide();
}


$(document).ready(
    () => {
        $('#btn-animar').on(
            'click', animarAvatar
        )

        $('#btn-reiniciar').on(
            'click', reiniciarAvatar
        )

        $('#btn-pulsacion').on(
            'click', pulsacion
        )

        $('#btn-color').on(
            'click', cambiarColor
        )
        $('#denuevo').on(
            'click', jugarDenuevo
        )


        //on change del selector de respuesta
        $("#responses").change(function () {
            selectedResponse = $(this).children("option:selected").val();
        });

        iniciarContador();


        setInterval(() => {
            progress = progress + 1;

            if (progress == 100) {
                jugar();
                progress = 0;
            }
            $(function () {
                $("#prog").css("width", `${progress}%`);
            });

        }, 100);



    }
)


