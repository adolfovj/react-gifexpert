import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

  // Cada componente tiene su propio estado
  const [inputValue, setInputValue] = useState('')

  const onInputChange = ( {target} ) => {
    // console.log(event.target.value);
    setInputValue( target.value );
  }

  const onSubmit = ( event ) => {
    // Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo.
    event.preventDefault();

    //console.log(setCategories);
    if( inputValue.trim().length <= 1) return; // Si hay menos de un caracter no se adiciona
    // Insertar avlor en el arreglo, que entra en el argumento setCategories
    //setCategories( categories => [ inputValue, ...categories ]);

    console.log('BBb');
    onNewCategory( inputValue.trim() );
     // console.log(inputValue)
     setInputValue(""); // Limpieza después de insertar
  }

  return (
    // el form tiene el refresh para evitar eso se pone event.preventDefault(); en la funcion
    <form onSubmit={ onSubmit }> 
      <input 
          type="text" 
          placeholder="Buscar Gifts"
          value= { inputValue }
          // onChange={ (event) => onInputChange(event) }
          // Argumentos iguales queda asi
          onChange={ onInputChange }
      />
    </form>

  )
}