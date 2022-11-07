const tbody = document.querySelector('.tbody')
let carritoDeCompras = []
const clickBoton = document.querySelectorAll('.botonCarrito')

clickBoton.forEach(btn => {
    btn.addEventListener('click', alCarrito)
})

function alCarrito(e){
    const boton = e.target;
    const item = boton.closest('.card')
    const tituloItem = item.querySelector('.card-title').textContent;
    const modeloItem = item.querySelector('.card-model').textContent;
    const precioItem = item.querySelector('.card-text').textContent;
    const imgItem = item.querySelector('.card-img-top').src;

    const carritoAux = {
        titulo: tituloItem,
        modelo: modeloItem,
        precio: precioItem,
        img:imgItem,
        cantidad: 1
    } 

    agregarEnCarrito(carritoAux)
}

function agregarEnCarrito(carritoAux){

    const Suma = tbody.getElementsByClassName('sumarCantidad')

    for(let i = 0; i < carritoDeCompras.length; i++){
        if(carritoDeCompras[i].modelo.trim()===carritoAux.modelo.trim()){
            carritoDeCompras[i].cantidad++;
            const valorCantidad = Suma[i]
            valorCantidad.value++;
            carritoTotal();
            return null;
        }
    }
    carritoDeCompras.push(carritoAux);
    renderizarCarrito();
}

function renderizarCarrito(){
    tbody.innerHTML = '';
    carritoDeCompras.map(item =>{
        const tr = document.createElement('tr')
        tr.classList.add('itemCarrito')
        const Content = `
        <td class="table__productos">
            <img src=${item.img} alt="">
            <h6 class="titulo">${item.titulo}</h6>
            <br>
            <h6 class="modelo">${item.modelo}</h6>
        </td>
        <td class="table__precios"><p>${item.precio}</p></td>
        <td class="table_cantidad">
            <input type="number" min="1" value=${item.cantidad} class="sumarCantidad">
        <button class="delete btn btn-danger">Quitar del carrito</button>
        </td>
        `
        tr.innerHTML = Content;
        tbody.append(tr)

        tr.querySelector(".delete").addEventListener('click',removerCarrito)
        tr.querySelector(".sumarCantidad").addEventListener('change',nuevaCantidad)
    })
    carritoTotal()

    //Toastify removido del carrito
    console.log("Voy a quitar un elemento")
    const botonQuitar = document.querySelectorAll(".delete");
    
    for(let h = 0; h < botonQuitar.length; h++){
        botonQuitar[h].addEventListener("click", ()=>{
        Toastify({
            text: "Producto removido del carrito!",
            duration: 3000,
            gravity: "bottom",
            position: "right",
            style: {
                background: "linear-gradient(to right, #FF0000, #FF0000)",
            }
            }).showToast();
        })
    }
    console.log("Boton quitar: ", botonQuitar)
}

function carritoTotal(){
    let total = 0;
    const precio = document.querySelector(`.total`);
    carritoDeCompras.forEach((item)=>{
        const precioTotal = Number(item.precio)
        total = total + precioTotal*(item.cantidad); 
    })

    precio.innerHTML = `Total de la compra: $${total}`;
    agregarStorage();
}

function removerCarrito(e){
    const botonBorrar = e.target
    const tr = botonBorrar.closest(".itemCarrito")
    const modelo = tr.querySelector('.modelo').textContent;
    for(let i = 0; i < carritoDeCompras.length; i++){
        if(carritoDeCompras[i].modelo.trim() === modelo.trim()){
            carritoDeCompras.splice(i,1)
        }
    }
    tr.remove()
    carritoTotal()

}

function nuevaCantidad(e){
    const nuevaSuma = e.target
    const tr = nuevaSuma.closest(".itemCarrito")
    const titulo = tr.querySelector('.titulo').textContent
    carritoDeCompras.forEach(item =>{
        if(item.titulo.trim() ===  titulo){
            nuevaSuma.value < 1 ? (nuevaSuma.value = 1) : nuevaSuma.value;
            item.cantidad = nuevaSuma.value;
            carritoTotal();
        }
    })
}

function agregarStorage(){
    localStorage.setItem('carrito',JSON.stringify(carritoDeCompras))
}

window.onload = function (){
    const storage = JSON.parse(localStorage.getItem('carrito'));
    if(storage){
        carritoDeCompras = storage;
        renderizarCarrito()
    }
}

//vaciar carrito
const vaciar = document.getElementById("vaciar")
    vaciar.addEventListener('click',()=>{
        carritoVacio();
    })

function carritoVacio(){



    carritoDeCompras=[];

    carritoTotal()
    renderizarCarrito()
    console.log(carritoDeCompras)
}

//Sweet alert
const compra = document.getElementById("comprar")

compra.addEventListener("click", () => {
    Swal.fire({
        title: "Su compra fue procesada",
        html: "<p>Las compras por internet tienen un 15% de recargo, disculpe por no avisarle antes.</p>",
        icon: "success",
    });
});


//Toastify agregado al carrito
const botonAgregar = document.querySelectorAll(".botonCarrito");

console.log("boton agregar: ",botonAgregar)
for(let i = 0; i < botonAgregar.length; i++){
    botonAgregar[i].addEventListener("click", ()=>{
    Toastify({
        text: "Agregado al carrito!",
        duration: 3000,
        gravity: "bottom",
        position: "right",
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
        }).showToast();
    })
}



//Toastify carrito vaciado
const botonVaciar = document.getElementById("vaciar");

botonVaciar.addEventListener("click", ()=>{
    Toastify({
        text: "Carrito vaciado!",
        duration: 3000,
        gravity: "top",
        position: "right",
        style: {
            background: "linear-gradient(to right, #FF0000, #FF0000)",
        }
    }).showToast();
})



