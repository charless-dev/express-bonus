
let cursos = [
	{
		id: 1,
		nombre: 'Fundamentos de Node Js',
		duracion: '36 Horas',
		valor: 250.000
	},
	{
		id: 2,
		nombre: 'Fundamentos de JavaScript',
		duracion: '46 Horas',
		valor: 350.000
	},	
	{
		id: 3,
		nombre: 'Fundamentos de MongoDB',
		duracion: '20 Horas',
		valor: 200.000
	}
];

let listarCursos = (cursos) => {
	var tiempo = 2000;
	for (let i = 0; cursos.length>i; i++) {
		setTimeout(function(){
			console.log("-------------------" + '\n' + "Id: " + cursos[i].id + '\n' + "Nombre: " + cursos[i].nombre + '\n' + "Duración: " + cursos[i].duracion + '\n' + "Valor: " + cursos[i].valor);
		},(tiempo*(i+1)));
	}
}

module.exports = {
	cursos,
	listarCursos
}