import axios, {AxiosInstance} from "axios";

export const defaultAxiosInstance : AxiosInstance = axios.create({
        baseURL: "http://localhost:3030"
    }
)