import { GifItem } from './GifItem.jsx';
import { useFectchGifs } from '../hooks/useFectchGifs.js';

export const GifGrid = ({ category }) => {

    const { imagenes, isLoading } = useFectchGifs( category );

    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && ( <h2>Cargando...</h2> )
            }

            <div className='card-grid'>
                { 
                    imagenes.map((image) => (
                        <GifItem  
                            key={ image.id } 
                            { ...image }  
                        />
                    ))
                }
            </div>

        </>
    )
}

