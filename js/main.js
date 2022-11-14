/*const listadoProductos = "../productos.json";

fetch(listadoProductos)
    .then(respuesta => respuesta.json())
    .then(datos => {
        datos.forEach( elementos => {
                productos.push(elementos)
        })        
    })
    .catch(error => console.log(error))
    .finally( () => console.log("Proceso Finalizado"))

console.log("productos: ",productos)
console.log("productos.modelo: ",productos.modelo)*/


document.addEventListener('DOMContentLoaded', ()=>{
    fetchData();
})
let productos = []
const listadoProductos = "./productos.json";
const fetchData = async () => {
    try{
        const res = await fetch(listadoProductos)
        const data = await res.json()
        setCatalogo(data);
        setEventos();
    }catch(error){
        console.log(error)
    }finally{
        console.log("Proceso finalizado")
    } 
}

const itemsList = document.getElementById("resultado");

const setCatalogo = (datos) => {
    datos.forEach( elementos => {
        productos.push(elementos)
    })
    for (let producto of productos) {
        console.log("Pinto el body con innerHTML")
        itemsList.innerHTML += 
                `<div class="card producto title-image" id="resultado">
                    <img src=${producto.imagen} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Tipo: ${producto.dispositivo}</h5>
                        <h5 class="card-model">Modelo: ${producto.modelo}</h5>
                        <img src="${productos.imagen}" alt="">
                        <div class="precio">
                            <p>Precio: $</p>
                            <p class="card-text"> ${producto.valor}</p>
                        </div>
                        <div class="contenedorBotonCarrito">
                            <button class="botonCarrito">Agregar al carrito</button>
                        </div>
                    </div>
                </div>`
    }
}
const resultado = document.getElementById("resultado"); //toma el valor de los elementos cargados

const formulario = document.getElementById("formulario"); //toma el valor del input del buscador



const filtrar = () =>{

    resultado.innerHTML = '';
    
    const texto = formulario.value.toLowerCase();//guarda el contenido del input y lo pasa todo a minuscula
    for ( let producto of productos ){
        let nombre = producto.dispositivo.toLowerCase(); //guarda el contenido del las cards y lo pasa todo a minuscula
        let nombre2 = producto.modelo.toLowerCase();
        if ( nombre.indexOf(texto) !== -1 || nombre2.indexOf(texto)!== -1){
            resultado.innerHTML += `
            <div class="card producto" id="resultado">
                <img src=${producto.imagen} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Tipo: ${producto.dispositivo}</h5>
                    <h5 class="card-model">Modelo: ${producto.modelo}</h5>
                    <div class="precio">
                        <p>Precio: $</p>
                        <p class="card-text"> ${producto.valor}</p>
                    </div>
                    <div class="contenedorBotonCarrito">
                            <button class="botonCarrito">Agregar al carrito</button>
                    </div>
                </div>
            </div>
            `
        }
    }
        if ( resultado.innerHTML === '' ){
                console.log("Pregunto si está vacío")
                resultado.innerHTML = `<li class="colorBlanco">Producto no encontrado</li>`
            }
}

formulario.addEventListener('keyup', filtrar);
filtrar();

