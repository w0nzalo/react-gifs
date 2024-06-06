import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const getGifsAsync = async() => {
        const newGifs = await getGifs( category );
        setImages(newGifs);
        setIsLoading(false);
    };

    useEffect( () => {
        getGifsAsync();
    }, [ ])
    
    return {
        images,
        isLoading,
    }
}