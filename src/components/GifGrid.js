import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
 import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {categoria}) => {
  // const [images, setImages] = useState([]);
  // //Solo se llame una vez para traer los gifs asi se actulice el componente
  // useEffect(() => {
  //   getGifs(categoria)
  //   .then( imgs => setImages( imgs));
  // }, [ categoria ]);

  //getGifs();

  const { data:images,loading } = useFetchGifs(categoria);
  
  return (
    <>
    <h3 className="animate__animated animate__fadeIn">{categoria}</h3>
    { loading && <p className="animate__animated animate__flash">Loading</p> }
    <div className="card-grid">
        {
          images.map( img => (
            <GifGridItem 
            key = {img.id}
            {...img}/>
          ))
        }
    </div>
    </>
  )
}
