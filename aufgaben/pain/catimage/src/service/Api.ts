import axios, {AxiosInstance} from "axios";

const catAPI : AxiosInstance = axios.create({
    baseURL: 'https://api.thecatapi.com/v1/images',
    timeout: 10000,
    headers: {'X-Custom-Header': 'foobar'}
})
export default catAPI;