
const opciones = {
	idCurso: {
		demand: true,
		alias: 'id'
	},
	nombre: {
		demand: true,
		alias: 'name'
	},
	cedula: {
		demand: true,
		alias: 'cc'
	}
};

const argv = require('yargs').command ('inscribir', 'Inscribirme en un curso', opciones).argv;
const {cursos, listarCursos} = require('./cursos');

const express = require("express");
const app = express();

let crearArchivo = (curso) => {
	texto = "El estudiante: " + argv.name + '\n' 
	+ "con CC: " + argv.cc + '\n' 
	+ "se ha matriculado en el curso:" + curso.nombre + '\n' 
	+ "con una duración de: " + curso.duracion + '\n' 
	+ " y un valor de " + curso.valor + '\n' ;
	app.get('/', function(req,res){
		res.send(texto);
	});
}

if (argv.idCurso) {
	let curso = cursos.find( idCurso => idCurso.id == argv.id);
	if (typeof curso === "undefined") {
	  console.log("El Id de curso ingresado no es válido, por favor intente inscribirse nuevemante.");
	} else {
		crearArchivo(curso);
	}	
} else {
	console.log('Listado de cursos ofertados:');
	listarCursos(cursos);
}

app.listen(3000);
