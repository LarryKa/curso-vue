import type { GIFResponse } from "../interfaces/gif.response";
import { giphyAPI } from "./10-axios";

export const getImage = async () => {
    try {
        const resp = await giphyAPI.get<GIFResponse>('/random');
        return resp.data.data.images.downsized_medium.url;
    }catch(error) {
        throw 'Url no encontrado';
    }    
}

// console.log(await getImage());

getImage()
    .then((url) => console.log(url) )
    .catch( error => console.log(error) );