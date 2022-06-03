import {AxiosInstance} from "axios";
import {defaultAxiosInstance} from "../Api"

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RpQHRlc3QuY2giLCJpYXQiOjE2NTQyNDUxNDksImV4cCI6MTY1NDI0ODc0OSwic3ViIjoiNCJ9.tF55k90rzXIQOtlB1M0GCEmb7TqXd8XCo43cIWzd-Zg";

const tkn = localStorage.getItem("token");



const DataService = (token : string | null, api: AxiosInstance = defaultAxiosInstance) => ({

    getAllCars: async () => {
        const data = await api.get("/cars", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return data
    }
})

export default DataService;