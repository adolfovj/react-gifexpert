import { useEffect, useState } from "react";
import { getGifs } from "../herlpers/getGifs";


export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true )
    
    const getImages = async () => {
        const newImages = await getGifs( category );
        setImages( newImages );
        isLoading(false);
    }

    // UseEffect | Tiene un callback y una lista de dependencias que son las 
    //condiciones que se quiere ejecutar el callback
    // si las dependencias estan vacias se dispara solamente una vez
    useEffect( () => {
    //getGifs( category ); // Solamente se ejecuta una vez 
    getImages();
    }, []);  

    return {
        // images: images, // propiedad que son iguales se pueden dejar asi":
        images,
        isLoading // es tru porque esta cargando
    }
}


