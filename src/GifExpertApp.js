import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
const GifExpertApp = ({ defaultCategorias =[]})=>{

  // const categorias=['One Punch','Heroe Academia','Dragon Ball'];
  // const [categorias, setCategorias] = useState(['Heroe Academia']);
  const [categorias, setCategorias] = useState( defaultCategorias );
  // const handleAdd = () =>{
  //   //setCategorias([...categorias,'Garfield']);
  //   setCategorias( cats => [...cats,'Garfield']);
  // }

  return(
    <>
    <h2>GifExpertapp</h2>
    <AddCategory setCategorias={setCategorias}/>
    <hr/>
    {/* <button onClick= {handleAdd}>Agregar</button> */}
    <ol>
      { 
        categorias.map( categoria =>
          <GifGrid 
          key={categoria}
          categoria = {categoria}/>
        )
      }
    </ol>
    </>
  )
}
export default GifExpertApp;
//Snippet rafc
// import React from 'react'

// export const GifExpertApp = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }
