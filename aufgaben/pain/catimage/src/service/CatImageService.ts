import {AxiosInstance} from "axios";
import catAPI from "./Api";

export const CatImageService = (api: AxiosInstance = catAPI) => ({
    getRandomCatImage: async () =>{
        const data = await api.get('/search');
        return data['data'][0]['url'];
    }
});
