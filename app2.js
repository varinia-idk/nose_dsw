//DATOS JSON´
const productosJSON=[
{
    id:1,
    nombre: "Cafe Moka",
    precio:70.00,
    descripcion: "Exquisito cafe con chocolate",
    imagen:"mokah.jpg"
},
{
    id:2,
    nombre: "Te Verde",
    precio:50.00,
    descripcion: "Hoja de te verde organico",
    imagen:"teverdeh.jpg"
},

{
    id:3,
    nombre: "Smoothie de Frutas",
    precio:40.00,
    descripcion: "Delicioso smoothie de frutas tropicales",
    imagen:"smoothieh.jpg"
},
] 
//funcion principal
function mostrarProductos(){
    const contenedor=document.querySelector("#contenedor-productos")
    //recorrer
    productosJSON.forEach(producto=>{
        //desde javascript se creara un contenedor div
        const card=document.createElement("div")
        //asignar al contenedor uuna clase
        card.classList.add("productos-card")
    
    //contruir la tarjeta
    card.innerHTML=`
    <h2>${producto.nombre}</h2>
    <img src="${producto.imagen}" alt="${producto.nombre}" width="200">
    <p>Precio: $${producto.precio}</p>
    <p>${producto.descripcion}</p>
    <button data-id="${producto.id}">Agregar al carrito</button>
    `
    //agregar la tarjeta al contenedor
    contenedor.appendChild(card);
   }) 
}
//invocar a la funcion
mostrarProductos()