
import React from 'react'

// Las propiedades ya vienen esparcidas
export const GifItem = ({ title, url, id }) => {

  //console.log({ title, url, id });
  return (
    <div className='card'>
       {/* alt titulo alternativo si en caso no hay imagen */}
      <img src= { url } alt={ title } />
      <p>{ title } </p>
    </div>
  )
}

