/*
** WHILE **
let numero = 0;

while (numero < ) {
    numero++;
    document.write(numero)
}


 ** (declarar ; condicion; ejecutar) **
for (let i = 6; i >= 0; i--) {

document.write(i + "<br>") ;
}

for (let i = 0; i < 20; i++) {


    if (i==11) {
        continue; ** PARA SALTAR O BREAK PARA FRENAR EL BUCLE ** 
    }
    document.write(i + "<br>") ;
    }

    

 ** ARRAYS **
    let animales = ["gato","perro","tiranosaurio rex"];


    for (animal in animales){ **recorre las posiciones**
        document.write(animal + "<br>"); 
    }

    for (animal of animales){ **recorre los elementos**
        document.write(animal + "<br>");
    }

let array1 = ["maria","josefa","roberta"];
let array2 = ["pedro","marcelo",array1];

 ** LABEL **
forGeneral:
for (let array in array2) {
    if (array == 2) {
        for (let array of array1){
            document.write(array + "<br>");
            break forGeneral;
        }
    }else {
       
        document.write(array2[array] + "<br>");
     
    }
}


 ** FUCTION **
function saludar(){
    respuesta = prompt("Hola Pablo, como fue tu dia?");
    if (respuesta == "bien") {
        ("Buenisimo!!");
    } else{
        alert("Esperemos que mejore!");
    }
}

saludar()


function saludar(){
    alert("hola");
    return "todo ok ejecutado"
    }

let saludo = saludar();

document.write(saludo);


let num1 = 32;
let num2 = 12;

function suma(){
let res = num1 + num2;

document.write(res);
}
suma();


** PARAMETROS PARA FUNCTION ** 
function suma(num1, num2) {
    let res = num1 + num2;
    document.write(res);
    document.write("<br>");
}

suma(88,11);


const saludar = function(nombre){
    let frase =`Hola ${nombre}! Como estas?`;
    document.write(frase)
}

saludar("pablo")
 ** FUNCTION FLECHA **
 let saludar = (nombre)=>{
    let frase =`Hola ${nombre}! Como estas?`;
    document.write(frase);
}

saludar("Pablo")

** COFLA - CAPITULO 2 - PROBLEMA 1 **
let free = false;

const validarCliente = (time)=>{
    let edad = prompt("Cual es tu edad?");
    if (edad > 18) {
        if (time >= 2 && time < 7 && free == false) {
            alert("Podes pasar Gratis porque sos la primer persona despues de las 2 am");
            free = true;
        }else{
            alert(`son las ${time}hs y podes pasar PERO tenes que pagar`);
        }
    }else {
        alert("Sos menor, no podes pasar!")
    }
}

validarCliente(23);
validarCliente(20);
validarCliente(3);
validarCliente(5);
validarCliente(7);
validarCliente(8);


** COFLA - CAPITULO 2 - PROBLEMA 2 **

let cantidad = prompt("cuantos alumnos son?");
let alumnosTotales = [];

for (i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt("Nombre del Alumno " + (i + 1)), 0];

}

const tomarAsistencia = (nombre, p) => {
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P") {
        alumnosTotales[p][1]++; 
    }
}

for (i = 0; i < 30; i++) {
    for (alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0], alumno);
    }
}

for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    _________Presentes: ${alumnosTotales[alumno][1]} <br>
    _________Ausencias: ${30 - alumnosTotales[alumno[1]]}`;
    if (30 - alumnosTotales[alumno][1] > 18) {
        resultado+= "REPROBADO POR INASISTENCIAS <br><br>";
    } else {
        resultado+= "<br><br>"
    }
    document.write(resultado);
}



** COFLA - CAPITULO 2 - PROBLEMA 3 ( CALCULADORA ) ** 


const sumar = (num1,num2)=> {
    return parseInt(num1) + parseInt(num2);
}
const restar = (num1,num2)=> {
    return parseInt(num1) - parseInt(num2);
}
const dividir = (num1,num2)=> {
    return parseInt(num1) / parseInt(num2);
}
const multiplicar = (num1,num2)=> {
    return parseInt(num1) * parseInt(num2);
}

alert("Que operacion queres hacer?");
let operacion = prompt("1:SUMA, 2:RESTA, 3:DIVISION, 4:MULTIPLICACION");
if (operacion == 1) {
    let numero1 = prompt("primer numero para sumar");
    let numero2 = prompt("segundo numero para sumar");
    resultado = sumar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 2) {
    let numero1 = prompt("primer numero para sumar");
    let numero2 = prompt("segundo numero para sumar");
    resultado = restar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 3) {
    let numero1 = prompt("primer numero para sumar");
    let numero2 = prompt("segundo numero para sumar");
    resultado = dividir(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 4) {
    let numero1 = prompt("primer numero para sumar");
    let numero2 = prompt("segundo numero para sumar");
    resultado = multiplicar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}

else {
    alert("no se ha encontrado la operacion");
}
*/

/*
class Animal {
    constructor(especie, edad, color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `soy ${this.especie}, tengo ${this.edad}
 años y soy de color ${this.color}`;
    }
    verInfo() {
        document.write(this.info + "<br>");
    }

}

class Perro extends Animal {
    constructor(especie, edad, color, raza) {
        super(especie, edad, color);
        this.raza = null;
    }
    set setRaza(newName) {
        this.raza = newName;
    }
    get getRaza(){
        return this.raza;
    }
    ladrar() {
        alert("Soy un perro!...GUAU!");
    }
}

const perro = new Perro("perro", 5, "marron", "doberman");
const gato = new Animal("gato", 3, "negro");
const pajaro = new Animal("pajaro", 15, "verde");

perro.setRaza = "Pedro";

document.write(perro.getRaza);
/*
document.write(perro.info + "<br>");
document.write(gato.info + "<br>");
document.write(pajaro.info + "<br>");
*//*
perro.verInfo();
gato.verInfo();
pajaro.verInfo();
perro.ladrar();
gato.ladrar();





**** CAPITULO 3 EJERCICIO 3 COFLA ****





class Celular {
    constructor(color, peso, pantalla, rescam, ram) {
        this.color = color;
        this.peso = peso;
        this.pantalla = pantalla;
        this.rescam = rescam;
        this.ram = ram;
        this.encendido = false;
    }

    btnEncendido() {
        if (this.encendido == false) {
            alert("Celular Iniciando");
            this.encendido = true;
        } else {
            alert("El celular se encuentra Apagado");
            this.encendido = false;
        }
    }

    reiniciar() {
        if (this.encendido == true) {
            alert("Celular Reiniciando");
        } else {
            alert("El celular se encuentra apagado");
        }
    }

    tomarFoto() {
        alert(`Foto tomada en una resolucion de : ${this.rescam}`);
    }
    grabar() {
        alert(`Grabando video en una resolucion de : ${this.rescam}`);
    }
    mInfo() {
        return `
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Resolucion de Pantalla: <b>${this.pantalla}</b><br>
        Memoria Ram: <b>${this.ram}</b><br>
        Resolucion de Camara: <b>${this.rescam}</b><br>`

    }
}

// celular1 = new Celular("rojo","150g","5pulgadas","full hd","2gb");
// celular2 = new Celular("negro","140g","6pulgadas","420","1gb");
// celular3 = new Celular("azul","130g","4pulgadas","720","3gb");
// celular4 = new Celular("verde","120g","5.5pulgadas","hd","4gb");



class altaGamma extends Celular {
    constructor(color, peso, pantalla, rescam, ram, extraCam) {
        super(color, peso, pantalla, rescam, ram);
        this.extraCam = extraCam;
    }
    grabarVideoLento() {
        alert("Estas Grabando en camara lenta");
    }
    reconocimientoFacial() {
        alert("Iniciando reconocimiento facial");
    }
    infoAltaGamma() {
        return this.mInfo() + `Resolucion de camara extra: ${this.extraCam}`
    }
}

celular1 = new altaGamma("azul", "130g", "4pulgadas", "hd", "3gb", "hd");
celular2 = new altaGamma("rojo", "150g", "6pulgadas", "full hd", "4gb", "full hd");


document.write(`
${celular1.infoAltaGamma()} <br><br>
    ${celular2.infoAltaGamma()} <br>
            `);


// celular1.btnEncendido();
// celular1.reiniciar();
// celular1.tomarFoto();
// celular1.grabar();
// celular1.btnEncendido();
class App {
    constructor(descargas, puntuacion, peso) {
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }

    instalar() {
        if (this.instalada == false) {
            this.instalada = true;
            alert("App Instalada");
        }
    }
    desinstalar() {
        if (this.instalada == true) {
            this.instalada = false;
            alert("App Desinstalada");
        }
    }
    abrir() {
        if (this.iniciada == false && this.instalada == true) {
            this.iniciada = true;
            alert("App Iniciada");
        }
    }
    cerrar() {
        if (this.iniciada == true && this.instalada == true) {
            this.iniciada = false;
            alert("App Cerrada");
        }
    }

    appInfo(){
        return `
        Descargas:<b>${this.descargas}</b><br>
        Puntuacion:<b>${this.puntuacion}</b><br>
        Peso:<b>${this.peso}</b><br> 
        `
    }
}


app1 = new App("16.000", "5 estrellas", "900mb");
app2 = new App("10.000", "5 estrellas", "1000mb");
app3 = new App("500", "3 estrellas", "1200mb");
app4 = new App("16.000", "5 estrellas", "900mb");
app5 = new App("8.000", "3 estrellas", "3400mb");
app6 = new App("2.000", "5 estrellas", "1400mb");
app7 = new App("7.000", "4 estrellas", "2400mb");

app1.instalar();
app1.abrir();
app1.cerrar();
app1.desinstalar();

document.write(
    `
<br>
<br>
<br>
    ${app1.appInfo()} <br>
    ${app2.appInfo()} <br>
    ${app3.appInfo()} <br>
    ${app4.appInfo()} <br>
    ${app5.appInfo()} <br>
    ${app6.appInfo()} <br>
    ${app7.appInfo()} <br>
    `
);

CADENAS DE TEXTO ****

buscar dentro de cadenas ---

concate - agrega cadena2 dsp de cadena 1
startWith - devuelve TRUE, si una cadena comienza con los caracteres de otra
endsWith - devuelve TRUE, si una cadena termina con los caracteres de otra
includes - devuelve TRUE, si una cadena puede estar dentro de otra cadena
indexOf - devuelve indice del primer caracter de la cadena, sino existe dev. -1
lastIndexOf - devuelve indice del ultimo caracter de la cadena, sino existe dev. -1

modificar cadenas ---

padStart - rellena de caracteres la cadena, nosotros le indicamos el total de caracteres
padEnd - rellena de caracteres la cadena, nosotros le indicamos el total de caracteres
repeat - repite la cadena las veces que le indiquemos
split - divide en mas cadenas como digamos la cadena seleccionada
substring - con dos parametros (inicio y final) devuelve una nueva cadena de la cadena seleccionada
toLowerCase() - transforma una cadena a minuscula
toUpperCase() - transforma una cadena a mayuscula
toString() - transporma un numero en string
trim - elimina los espacios en blanco al principio y final de una cadena
trimStart - elimina los espacios del principio
trimEnd - elimina los espacios del final



let cadena = "cadena de prueba primera";
let cadena2 = " segunda cadena para primavera"


// resultado = cadena.concat(" Hola!");
// resultado = cadena.startsWith("cade"); 
// resultado = cadena.endsWith("primera");
// resultado = cadena.includes("para");
// resultado = cadena.indexOf("primera");
// resultado = cadena.lastIndexOf("cadena");
// resultado = cadena.padStart(40, "5");
// resultado = cadena.padEnd(40, "5");
// resultado = cadena.repeat(3);
// resultado = cadena.split(" , "); 
// resultado = cadena.substring("primera");
// resultado = cadena.toUpperCase();
// resultado = cadena.toLowerCase();
// resultado = cadena.toString();
// resultado = cadena.trim();
// resultado = cadena.trimEnd();
// resultado = cadena.trimStart();


document.write(resultado);


*** METODOS TRANSFORMADORES DE ARRAY ***

pop() - Remueve el ultimo elemento de un array y lo devuelve.
shift() - Remueve el primer elemento de un array y lo devuelve.
push("ejemplo1","ejemplo2") - Agrega un elemento al final de la lista de un array.
reverse() - Invierte el orden de los elementos de un array.
unshift() - Agrega uno o mas elementos al inicio de un array y devuelve la nueva longitud del array.
sort() - Ordena los elementos de un array localmente y lo devuelve ordenado.
splice() - Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
ej: array.splice(n de posicion del elemento, n de cuantos elementos eliminar, "en el caso de querer agregar")


*** ACCESORES ***
join() - Une todos los elementos de un obj. similar en una cadena y la devuelve.
slice()  Devuelve un nuevo array con una parte del array seleccionado dentro de un nuevo array empezando por Inicio hasta fin (fin no incluido)
ej: array.slice(n de posiscion del primer elemento a aseleccionar, n de posicion del ultimo elemento pero no incluido.

*** DE REPETICION **

filter() - Crea un nuevo array con todos los elementos que cumplan la condicion
forEach() - Ejecuta la funcion indicada una vez por cada elemento del array.




let nombres = ["pedro","maria","jorge"];

let resultado = nombre.pop();

// document.write(resultado);
// document.write(nombres);


**** objeto MATH ****
sqrt() - Devuelve la raiz cuadrada positiva de un numero.
cbrt() - Devuelve la raiz cubica de  un numero.
max() - Devuelve el mayor de cero o mas numeros.
min() - Devuelve el menor de cero o mas numeros.
random() - Devuelve un numero pseudo aleatorio entre 0 y 1
round() - Devuelve el valor de un numero redondeado al numero entero mas cercano
fround() - Devuelve 4kb, la representacion flotante de precision simple mas cercana de un numero
floor() - Devuelve el mayor entero menor que o igual a un numero
trunc() - Devuelve la parte entera del numero x, la eliminacion de los digitos fraccionarios.

ej:

numero = math.sqrt(25); //- 5
numeor = math.cbrt(9); //- 3
numeor = math.max(2,5,8,25,30); //- 30
numeor = math.min(2,5,8,25,30); //- 2
numeor = math.random(); //- 0.25478,etc
numeor = math.round(0.25478); //- 0
numeor = math.fround(); //- 
numeor = math.floor(3.999); //- 3 redondea al entero para abajo
numeor = math.trunc(2.458); //- 2 quita decimales 


**** EJERCICIO COFLA - CAPITULO 4 ****


class Calculadora {
    constructor(){

    }
sumar(num1,num2){
    return parseInt(num1) + parseInt(num2);
}
restar(num1,num2){
    return parseInt(num1) - parseInt(num2);
}
dividir(num1,num2){
    return parseInt(num1) / parseInt(num2);
}
multiplicar(num1,num2){
    return parseInt(num1) * parseInt(num2);
}
potenciar(num1,num2){
    return parseInt(num1) ** parseInt(num2);
}
raizCuadrada(num1){
   parseInt(num1);
    return Math.sqrt(num1)
}
raizCubica(num1){
     parseInt(num1);
     return Math.cbrt(num1)
}
}
const calculadora = new Calculadora();

alert("Que operacion queres hacer?");
let operacion = prompt("1:SUMA, 2:RESTA, 3:DIVISION, 4:MULTIPLICACION, 5:POTENCIAR, 6:RAIZ CUADRADA, 7:RAIZ CUBICA");
if (operacion == 1) {
    let numero1 = prompt("primer numero para sumar");
    let numero2 = prompt("segundo numero para sumar");
    resultado = calculadora.sumar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 2) {
    let numero1 = prompt("primer numero para restar");
    let numero2 = prompt("segundo numero para restar");
    resultado = calculadora.restar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 3) {
    let numero1 = prompt("primer numero para dividir");
    let numero2 = prompt("segundo numero para dividir");
    resultado = calculadora.dividir(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 4) {
    let numero1 = prompt("primer numero para multiplicar");
    let numero2 = prompt("segundo numero para multiplicar");
    resultado = calculadora.multiplicar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 5) {
    let numero1 = prompt("primer numero a potenciar");
    let numero2 = prompt("segundo numero para potenciar");
    resultado = calculadora.potenciar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 6) {
    let numero1 = prompt("Ingrese numero para saber su raiz cuadrada");
    resultado = calculadora.raizCuadrada(numero1);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 7) {
    let numero1 = prompt("Ingrese numero para saber su raiz cubica");
    resultado = calculadora.raizCubica(numero1);
    alert(`Tu resultado es ${resultado}`);
}

else {
    alert("no se ha encontrado la operacion");
}


const obtenerInformacion = (materia)=>{
    materias = {
        fisica: ["profesor1","pedro","pepito","cofla","maria"],
        programacion: ["profesor2","pedro","juan","pepito"],
        logica: ["profesor3","pedro","juan","pepito","cofla","maria"],
        quimica: ["profesor4","pedro","juan","pepito","cofla","maria"]
    }
    if (materias[materia] !== undefined){
        return [materias[materia],materia];
    }else {
        return false;
    }
}
const mostrarInformacion = (materia)=>{
let informacion = obtenerInformacion(materia);

if (informacion !== false) {
    let profesor = informacion[0][0];
    let alumnos = informacion[0];
    alumnos.shift();
document.write (`El profesor de <b>${informacion[1]}</b> es: 
<b style="color:red">${profesor}</b><br>
Los alumnos son: <b>${alumnos}</b><br><br>`);
}
}

mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("quimica");
mostrarInformacion("logica");

**** DOM ****
-- METODOS DE SELECCION DE ELEMENTOS ---
getElementById() - Selecciona un elemento por ID

getElementByTagName() - Selecciona todos los elementos que 
coincidan con el nombre de la etiqueta especificada.

querySelector() - Devuelve el primer elemento que 
coincida con el grupo especificado de selectores.

querySelectorAll() - Devuelve todos los elementos 
que coincidan con el grupo especificado de selectores.


document.getElementById();
document.getElementsByTagName();
document.querySelector();
document.querySelectorAll();
 

let parrafo = document.getElementById("parrafo")

document.write(parrafo);

let divs = document.querySelector(".box-main")

document.write(divs);

--Metodos para DEFINIR, OBTENER y ELIMINAR valores de atributos--
setAttribute() - Modifica el valor de un atributo.
  param1 cual, param2 por cual cambiar.
getAttribute() - Obtiene el valor de un atributo.
  param1, para cual saber.
removeAttribute() - Remueve el valor de un atributo.
  param1 para cual remover.




const rangoEtario = document.querySelector(".rangoEtario");
rangoEtario.setAttribute("type","text"); 


document.write(rangoEtario);



const titulo = document.querySelector("#titulo");

titulo.setAttribute("contentEditable","true");


document.write(rangoEtario);


** MODIFICAR ATRIBUTOS DE INPUT **
className - Muestra/Modifica nombre de clase. 
value - Muestra/Modifica el valor.
type - Muestra/Modifica el tipo.
accept - Muestra/Modifica los archivos que acepta.
form - Muestra/Modifica el attr form (ej. para asociar input por fuera del formulario, asociando form al nombre del formulario)
minLength - Muestra/Modifica la minima cantidad de caracteres del input.
placeholder - Muestra/Modifica el placeholder.
required - Campos requerido



const input = document.querySelector(".input-normal");


input.minLength = "6";
// o
input.setAttribute("minLength","6");


document.write(input.minLength);



*** STYLE ***
const titulo = document.querySelector("#titulo");

 // titulo.style.propiedad css
 titulo.style.padding = "30px";
 titulo.style.background = "#456";
 titulo.style.color = "#111";

**** CLASES, CLASSLIST, metodos CLASSLIST ****
add() - Añade una clasen a un elem html
remove() - Remueve una clase a un elem html
item() - Devuelve la clase del indice especificado a un elem html
contains() - Verifica si ese elemento posee o no la clase especificada a un elem html
replace() - Reemplaza una clase por otra a un elem html
    param1 clase original, param2 clase que reemplaza... es true si existe param1 sino false.

toggle() - Si no tiene la clase especificada, la agrega, si ya la tiene la elimina a un elem html
    ("otra clase","true o false")... si es true y existe no la saca con false alrevez

add() 
remove()
item()
contains()
replace()
toggle()



const titulo = document.querySelector("#titulo");

titulo.classList.add("otraclase"); // agrega la clase "otraclase"
titulo.classList.remove("otraclase"); // remueve la clase "otraclase"
titulo.classList.item(numero_especificidad_de_clases); // da el indice de la clase a consultar.
titulo.classList.contains("otraclase"); // true o false si existe "otraclase"
titulo.classList.replace("otraclase"); // agrega la clase "otraclase"
titulo.classList.toggle("otraclase"); // agrega la clase "otraclase"

const titulo = document.querySelector("#titulo");
titulo.classList.add("grande");

nombreDeClase = "grande";

let valor= titulo.classList.contains(nombreDeClase);

titulo.classList.toggle("grande");

document.write(valor);


*/


document.write("08:44:00")












/*
let cursoJs = ["06:08:42"];
document.write(cursoJs);
*/