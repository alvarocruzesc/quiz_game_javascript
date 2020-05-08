
var preguntas = [
    '¿Cual es mi color favorito?', 
    '¿Como se llama mi 1er gato?', 
    '¿A que le tengo mas miedo en la vida?',
    '¿Cual es mi comida favorita?'
];

var opciones = new Array(preguntas.length);

var res0 = [2, 'verde', 'blanco', 'azul', 'blanco'];
var res1 = [4, 'juan topo', 'peluchin', 'gordo', 'batman'];
var res2 = [4, 'arañas', 'oscuridad', 'suegra', 'puerco'];
var res3 = [4, 'plato paceño', 'silpancho', 'fricase', 'fritanga'];

opciones[0] = res0;
opciones[1] = res1;
opciones[2] = res2;
opciones[3] = res3;



//for(var i=0 ; i<nroTotal; i++){


    aleatorio = Math.floor(Math.random()*(preguntas.length));
    seleccion = preguntas[aleatorio];
    document.getElementById('preguntaId').innerHTML = seleccion;
    preguntas.splice(aleatorio, 1); 

//}


const productList = document.getElementById('resp-preguntas');
const element = document.createElement('div');

        element.innerHTML = `

            <div class=" container d-block mt-1 p-2 bg-primary text-white" id="1">
            ${opciones[aleatorio][1]}
            </div>

             <div class=" container d-block mt-1 p-2 bg-primary text-white" id="2">
             ${opciones[aleatorio][2]}
             </div>

            <div class=" container d-block mt-1 p-2 bg-primary text-white " id="3">
            ${opciones[aleatorio][3]}
            </div>

            <div class=" container d-block mt-1 p-2 bg-primary text-white" id="4">
            ${opciones[aleatorio][4]}
            </div>

        `;

productList.appendChild(element);

//VARIABLES IMPORTANTES
var elegido=0;  //Es la  varible elegida por el usuario
var correccionCompleta=0;

//agregar el evento click
document.getElementById("resp-preguntas").addEventListener('click', function(e){
    console.log(e.target);
    console.log(e.target.id);

    if(correccionCompleta==0){
        for(var i=1 ; i<=4 ; i++){
    
            if(e.target.id==i){
                document.getElementById(i).className = `container d-block mt-1 p-2 bg-warning text-white`;
                elegido = i;
            }else{
                document.getElementById(i).className = `container d-block mt-1 p-2 bg-primary text-white`;
            }
        }
    }
 });


 //CORRECCION DE LA RESPUESTA CORRECTA
document.getElementById("btnListo").addEventListener("click", function() {

    if(elegido == 0){
        alert("Seleccione un opcion por favor");
    }
    else{
        console.log('El elegido es: '+elegido);
        console.log(opciones[aleatorio][0]);
        
        if(elegido == opciones[aleatorio][0]){
            console.log('tiene la respuesta correcta');
            document.getElementById(elegido).className = `container d-block mt-1 p-2 bg-success text-white`;    //reemplaza el div que se desea
            document.getElementById('btnListo').disabled=true;  //Se deshabilita el boton una vez presionado
            correccionCompleta=1;
            prueba();
        }else{
            console.log('la respuesta correcta no es correcta');
            document.getElementById(elegido).className = `container d-block mt-1 p-2 bg-danger text-white`;
            document.getElementById('btnListo').disabled=true;
            correccionCompleta=1;
            prueba();
        }

    }
});


function prueba(){
    document.getElementById("btnSiguiente").addEventListener("click", function() {
        alert('se activo el boton siguiente')
    });

}
