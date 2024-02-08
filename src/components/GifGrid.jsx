
import { useEffect, useState } from 'react';

import { GifItem } from './GifItem';

import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

  // CUSTOM HOOK | Estandar use
  const { images, isLoading  } = useFetchGifs( category );

/********************* este codigo sera nuestro custom hook useFetchGifds
//     const [images, setImages] = useState([]);

//     const getImages = async () => {
//         const newImages = await getGifs( category );
//         setImages( newImages );
//     }

//  // UseEffect | Tiene un callback y una lista de dependencias que son las 
//  //condiciones que se quiere ejecutar el callback
//  // si las dependencias estan vacias se dispara solamente una vez
//   useEffect( () => {
//     //getGifs( category ); // Solamente se ejecuta una vez 
//     getImages();
//   }, []);  
*********************/
  return (
    <>
        <h3>{ category }</h3>
        {
          isLoading && ( <h2 className={ isLoading }>Cargando...</h2> )
        }
        
        <div className="card-grid">
            {
                 images.map( img => (
                    //  <li key={ img.id }>{ img.title } </li>
                    <GifItem key={ img.id }
                      { ...img } // Esparsir todas las propiedades del image
                    ></GifItem>
                 ))
            }            
        </div>
    </>    
  )    
}
