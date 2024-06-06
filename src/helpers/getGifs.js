export const getGifs = async( category ) => {
    const api_key = 'hEnBSPPg38vQQ3hHEdkpmgjrXL6a2Ys0';
    const limit = 10;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ api_key }&q=${ category }&limit=${ limit }`;
    const response = await fetch( url ); 
    const { data } = await response.json();
    
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }))

    return gifs;
}