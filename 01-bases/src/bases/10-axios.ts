import axios from "axios";
import { GIFResponse } from "../interfaces/gif.response";

const api_key = '5ZbL5KZrMKrZoq6YxDHHLioXQksdV7Fk';
// const url = `https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`;

export const giphyAPI = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key
    }
});

// export default giphyAPI;

// giphyAPI.get<GIFResponse>('/random')
//     .then( resp => console.log(resp.data.data.images.downsized_large.url) )
//     .catch(err => console.log(err) );