import Contenedor from './contenedor.js';
const contenedor = new Contenedor()

    let product = {
        title: "Manga Dorohedoro 1",
        price: 2000,
        thumbnail:"https://http2.mlstatic.com/D_NQ_NP_691062-MLA51760448918_092022-O.webp",
    }
//Crea un nuevo producto y lo guarda en el JSON
 contenedor.save(product).then((response) =>{
     console.log(response)
   })

//Muestra todos los productos
// contenedor.getAll().then((response) =>{
//     console.log(response)
//  })

// //Muestra un producto mediante su ID
 //  contenedor.getById(1).then((response) =>{
    //  console.log(response);
   //    })

//Elimina un producto mediante su ID
//  contenedor.deleteById(2).then((response) => {
//      console.log(response);
//       });

//Elimina todos los productos
// contenedor.deleteAll()
