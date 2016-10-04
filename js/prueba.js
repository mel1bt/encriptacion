/*
<div class="publicacion">
					<div class="encPub">
						<div class="col s3 ">
							<img class="imgPub" src="img/perfil.jpg" alt="">
						</div>
						<div class="col s9">
							<span class="title">Usuario</span>
							<div class="msjPub">
								Hola					
							</div>
						</div>
					</div>
					<div class="comentario center">
						<textarea class="textComm" placeholder="Escribe un comentario"></textarea>
					</div>
				</div>
*/

/*
var contador = 1;

function cargaPagina() {
	var boton = document.getElementById("enviar");
	boton.addEventListener("click", agregarMensaje);
}

function agregarMensaje(evento) {
	evento.preventDefault();

	var texto = document.getElementById("mensaje");
	var mensajes = document.getElementById("mensajes");

	var divHorizontal = document.createElement("div");
	divHorizontal.classList.add("card", "horizontal");

	var divTarjeta = document.createElement("div");
	divTarjeta.classList.add("card-stacked");

	var divContenido = document.createElement("div");
	divContenido.classList.add("card-content");

	var checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.id = "check" + contador;
	checkbox.addEventListener("click", tacharTexto);

	var etiqueta = document.createElement("label");
	etiqueta.setAttribute("for", "check" + contador);
	etiqueta.textContent = texto.value;

	var icono = document.createElement("i");
	icono.classList.add("material-icons", "right");
	icono.textContent = "delete";
	icono.addEventListener("click", eliminarMensaje);

	divContenido.appendChild(checkbox);
	divContenido.appendChild(etiqueta);
	divContenido.appendChild(icono);

	divTarjeta.appendChild(divContenido);

	divHorizontal.appendChild(divTarjeta);

	mensajes.appendChild(divHorizontal);

	/* 
	// Mala práctica para performance 
	mensajes.innerHTML += '<div class="card horizontal">' +
							'<div class="card-stacked">' +
								'<div class="card-content">' +
									'<input type="checkbox" id="check' + contador + '">' +
									'<label for="check' + contador + '">' + texto + '</label>' +
									'<i class="material-icons right">delete</i>' +
								'</div>' +
							'</div>' +
						'</div>';
	*//*
	texto.value = "";
	contador++;
}

function tacharTexto() {
	this.nextSibling.classList.toggle("tachado");
}

function eliminarMensaje() {
	// this = <i>icono</i>
	// this.parentElement = divContenido
	// this.parentElement.parentElement = divTarjeta
	// this.parentElement.parentElement.parentElement = divHorizontal
	var divHorizontal = this.parentElement.parentElement.parentElement;
	divHorizontal.parentElement.removeChild(divHorizontal);
}



*/


