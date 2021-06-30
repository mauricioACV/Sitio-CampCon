const typed = new Typed('.typed', {
    strings: ['Seguridad Industrial y Demarcaciones Viales <br><i>Compromiso y calidad asegurada...</i>'],
	stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 50, // Velocidad en mlisegundos para poner una letra,
	startDelay: 500, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 30000, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '_', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});


const LottieContainer = document.querySelector('.LottieContainer')

var lottieAnimation = bodymovin.loadAnimation({
	container: LottieContainer, // ID del div
	path: './svg/watermelon-pack-animation-03.json', // Ruta fichero .json de la animación
	renderer: 'svg', // Requerido
	loop: true, // Opcional
	autoplay: true, // Opcional
	name: "Hello World", // Opcional
  })