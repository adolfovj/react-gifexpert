import { useState } from "react"
import { AddCategory, GifGrid } from "./components"; // Por defecto se ve la carpeta del index

export const GitExpertApp = () => {

  // HPPK useState
  const [categories, setCategories] = useState([ 'One Punch' ]);

  const onAddCategoty = ( newCategory ) => {

    console.log( 'AAA' );  
    //console.log( newCategory );  

    if ( categories.includes(newCategory) ) return; // valida si la categoria ya existe

    setCategories([ newCategory, ...categories ])

    // Operador Spread aqui es como una copia
    // 1ra forma para insertar un valor en el arreglo, claro falta el key
    //setCategories( [...categories, 'One Peace'] );

    // 2da forma para insertar un valor en el arreglo, claro falta el key
    //setCategories( cat => [ ...cat, 'One Peace'] );
  }

  return (
    <>
       {/* TITULO */}
      <h1>	GitExpertApp </h1>
       {/* INPUT */}
       {/* Adicionando propiedad Envio una funcion llamada setCategories*/}
       <AddCategory 
        onNewCategory= { event => onAddCategoty(event) }
        // setCategories={ setCategories } 
       />

       {/* LISTADO DE TARJETAS O GIFTS */}
        {/* <button onClick={ onAddCategoty } >Agregar</button> */}

            {/* // Es un arreglo de categorias xq se definio useState */}
            {/* map barre los arreglos | obligatorio key | Como es una lista de GifGrid tambien debe ir con key por ser lista*/}
            {   
                
                categories.map( category => (
                  <GifGrid 
                      key={ category } 
                      category={ category }>
                  </GifGrid>
                ))
            }

    
            {/* GIFTS ITEM*/}
    </>
  )
}


