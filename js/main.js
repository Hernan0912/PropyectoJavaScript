const productos = [
    {
        dispositivo: 'NOTEBOOK',
        modelo:'ACER A314 22 R3M4 AMD ATHLON SILVER',
        imagen: 'img/acer.png',
        valor: 125000
    },
    {
        dispositivo: 'NOTEBOOK',
        modelo:'PC BOX PCB-GLW2 CELERON UN43T5300AGCZB',
        imagen: 'img/pcBox.png',
        valor: 75000
    },
    {
        dispositivo: 'NOTEBOOK',
        modelo:'POSITIVO BGH AT300N ATOM X5-Z8350',
        imagen: 'img/bgh.png',
        valor: 146000
    },
    {
        dispositivo: 'NOTEBOOK',
        modelo:'GFAST N-100 I4120W INTEL CELERON',
        imagen: 'img/gfast.jfif',
        valor: 150000
    },
    {
        dispositivo: 'NOTEBOOK',
        modelo:'HDC CY-14N3450-464 INTEL CELERON',
        imagen: 'img/hdc.jfif',
        valor: 75000
    },
    {
        dispositivo: 'NOTEBOOK',
        modelo:'HP 240 G8 / 2Q9S5LT INTEL CELERON',
        imagen: 'img/hp.jfif',
        valor: 11000
    },
    {
        dispositivo: 'CELULAR',
        modelo:'SAMSUNG SM-F926B Z FOLD3 NEGRO',
        imagen: 'img/zfold.jfif',
        valor: 400000
    },
    {
        dispositivo: 'CELULAR',
        modelo:'SAMSUNG S22 ULTRA / SM-S908E NEGRO',
        imagen: 'img/s22ultra.jfif',
        valor: 300000
    },
    {
        dispositivo: 'CELULAR',
        modelo:'SAMSUNG S22+ / SM-S906EZKMARO ROSA',
        imagen: 'img/s22plus.jfif',
        valor: 290000
    },
    {
        dispositivo: 'CELULAR',
        modelo:'SAMSUNG GALAXY A03 SM-A032M AZUL AZUL',
        imagen: 'img/a03.jfif',
        valor: 68000
    },
    {
        dispositivo: 'CELULAR',
        modelo: 'SAMSUNG GALAXY A13 SM-A135M NEGRO',
        imagen: 'img/a13.jfif',
        valor: 73000
    },
    {
        dispositivo: 'CELULAR',
        modelo: 'MOTOROLA MOTO G52 XT2221-2 NEGRO NEGRO',
        imagen: 'img/g52.jfif',
        valor: 135000
    },
    {
        dispositivo: 'SMART',
        modelo:'LED TV BGH 32 PULGADAS HD B3219K5',
        imagen: 'img/bghTele.jfif',
        valor: 56000
    },
    {
        dispositivo: 'SMART',
        modelo: 'LED ANDROID TV TCL 32 PULGADAS HD L32S61E-F',
        imagen: 'img/tcl.jfif',
        valor: 53000
    },
    {
        dispositivo: 'SMART',
        modelo:'LED TV PHILIPS 32 PULGADAS HD 32PHD6926/77',
        imagen: 'img/philips.jfif',
        valor: 79000
    },
    {
        dispositivo: 'SMART',
        modelo:'LED TV SAMSUNG 50 PULGADAS 4K UHD 50AU7000',
        imagen: 'img/samsungTele.jfif',
        valor: 82000
    },
    {
        dispositivo: 'SMART',
        modelo:'LED TV SAMSUNG 32 PULGADAS HD UN32T4300AGCZB',
        imagen: 'img/samsungTele2.jfif',
        valor: 70000
    },
    {
        dispositivo: 'SMART',
        modelo:'LED ANDROID TV MOTOROLA 32 PULGADAS HD',
        imagen: 'img/motorolaTele.jfif',
        valor: 67000
    },
    {
        dispositivo: 'SMART',
        modelo:'LED ANDROID TV PHILIPS 32 PULGADAS HD',
        imagen: 'img/philips2.jfif',
        valor: 58000
    },
    {
        dispositivo: 'SMART',
        modelo:'LED TV SAMSUNG 43 PULGADAS FULL HD',
        imagen: 'img/samsungTele3.jfif',
        valor: 53000
    },
]


const producto = document.getElementById("resultado");

const catalogo = () => {
    for (let producto of productos) {
        producto.innerHTML += 
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
        resultado.innerHTML = `<li>Producto no encontrado</li>`
    }

}

formulario.addEventListener('keyup', filtrar)
filtrar();

