
export const getGifs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=m13w0nuRClfddxNlCZrBWx23Qsq4lMlB&q=${ category }&limit=20`;

    // Peticion http
    const resp = await fetch ( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized.url,
    }))

    return gifs;    
}
