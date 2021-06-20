/* sintaxis de javasacrip
variables-tipos de datos */
console.log("Funcionando...") //presentar por pantalla(consola)
var numero = 15
let numero1; //no definida(undefined) 
let numero2 = null //nula
let entero = 18 //valor numerico entero
let decimal = 2.5 //valor numerico decimal
let string = "Aprendiendo Java" //cadena(texto -- comillas simples('') o dobles(""))
let boolean = false //valor True o False
let fecha = new Date() //toda la fecha
let dd = fecha.getDate(),  //presenta dia
    mm = fecha.getMonth() + 1, //presenta mes
    aa = fecha.getFullYear(), //presenta año
    hoy = `${aa}-${mm}-${dd}` //(`` = cadena solo para adjuntar variables)-->presentar varias variables en una misma cadena (${})
const pi = 3.1416 // valor constante
console.log("Resultado1 =", numero1)
console.log(`Resultado2 = ${numero2}`)
console.log(`Fecha = ${fecha}`)
console.log(`Dia = ${dd} Mes = ${mm} Año = ${aa}`)
console.log("Fecha de hoy: ", hoy)
console.log("Pi: ", pi)
//arreglos, json, objetos
//arreglos
let numeros = [7, 8, 9, 10, 11];
let colores =["orange","grey","black" ]

//objetos con metodo json
const json = {              
    "carros": ["Aveo","Spark"],
    "marca": "Chevrolet"
};
//objetos en js
const estudiante = {
    nombre: "Victor",
    apellido: "Mendoza",
    materias: ['Cons.Software', 'AdminBD'],
    conocimientos: {
        lenguajes: [
            'Python','Java','C++'
        ],
        M_auxiliares: {
            Nivel3:'English', Nivel4:'Ofimatica'
        }
    }
}; 
//agregar variables o reemplazar valores
json.carros="CV"
estudiante.apellido = "Mora"
estudiante.genero = "Masculino"
//Presentar objetos
console.log('objeto json', json, json.carros);
console.log('objeto js',estudiante,estudiante.genero,estudiante.conocimientos.lenguajes[1]);
console.log("presentar NIvel3: ", estudiante.conocimientos.M_auxiliares.Nivel3);

//condicionales

let num1 = 10
let num2 = 0

if (numero1==undefined){
    console.log(`La variable si es '${numero1}'`)
}
if (numero2==null){
    console.log(`La variable si es '${numero2}'`)
}
if (num1==0 || num2==0){
    console.log("Unos de los valores es 0")
}else if (num1==num2){
    console.log(`Los valores si son iguales: ${num1}=${num2}`)
}else{
    console.log(`Los valores no son iguales: ${num1}!=${num2}`)
}

//sentencia switch
let n1 = 7
let n2 = n1 % 0;
switch(n2){
    case 0:
        console.log("Par")
        break;
    case 1:
        console.log("Impar")
        break;
    default:
        if(isNaN(n2))    
            console.log(`${n2}=Error`);
        break;
}
console.log("Salio del Switch")

//Bucles
//while
let i=0
console.log("Bucle while",colores);
while (i < colores.length && colores[i] != "black"){
    console.log(i, colores[i])
    i+=1
}
//for
console.log("Bucle for", colores);
for (let index = 0; index < colores.length; index++) {
    console.log(i, colores[i]);
    
}
//in
console.log("Bucle for con in", colores);
for(let j in colores){
    console.log(j, colores[j])
}
//of
console.log("Bucle for con of, colores");
for(let color of colores){
    console.log(color)
}

const Carros=[
    {"Modelo":"Spark", "Marca":"Chevrolet"},
    {"Modelo":"Santa Fe", "Marca":"Hiunday"},
    {"Modelo":"Eclipse", "Marca":"Toyota"}
]

console.log("Presentacion con of");
for(let carro of Carros){
    console.log(carro)
}
//Recorrido de objetos iterables
console.log("Foreach");
Carros.forEach(carro => console.log(carro.Modelo))
//map
const cars=Carros.map(car => car.Modelo)
console.log("Map", cars);
//filter
const car=Carros.filter(car => car.Modelo != "Spark")
console.log("Filter", car);
//find
const oneCar = Carros.find(car => car.Modelo === "Spark")
console.log("Find", oneCar);
//Funciones
function sumar(){
    console.log("Suma",7+9);
}
sumar()
const suma = () =>{
    console.log("Suma con Arrow Funcion", 7+4);
}
suma()
function multiplicar(nu1,nu2){
    return nu1*nu2
}
let respuesta = multiplicar(4,6)
console.log("Si arrow", respuesta);
const mult = (nu1,nu2) => nu1 * nu2 
console.log("arrow",mult(4,7));

function dividir(n1,n2=3){
    let r=0
    try {
        r=n1/n2
    } catch (error) {
        console.log("Ocurrio un error", error.message);
    }
    return r
}
r = dividir(9)
console.log(r);
r = dividir(91,8)
console.log(r);
r = dividir(4,0)
console.log(r);

const div = (n1,n2=5) =>{
    let r=0
    try {
        r=n1/n2
    } catch (error) {
        console.log("Ocurrio un error", error.message);
    }
    return r
}
console.log(div(25));
//fecth --> Sirve para consumir api(respuiesta del servidor que entrega una respuesta con datos para ser consumidos)
fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(resp => resp.json())
    .then(datos =>{
        //console.log(datos.results);
        //datos.results.forEach(poke=> console.log(poke.name,poke.url))
    })
    .catch(error => console.log("Error de api", error))

// async await: devuelve un objeto asincronico

const obtenerDatos = async () =>{
    try {
        const resp= await fetch('https://pokeapi.co/api/v2/pokemon/')
        const datos = await resp.json()
        //console.log("Async await");
        //datos.results.forEach(poke=> console.log(poke.name,poke.url))
    } catch (error) {
        console.log("Error de api", error)
    }
}
obtenerDatos()
//DOM
let contenido = document.getElementById('contenido')
let variable = document.getElementById('variable')
console.log(contenido);
console.log(variable);
variable.innerHTML = 'Enteros, Decimales, String, Booleanas, Fechas';
variable.style.color = "grey"
variable.style.background = "#000"
console.log(variable);
let concepto = document.querySelector('.desarrollo')
console.log(concepto);