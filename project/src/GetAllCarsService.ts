import {AxiosInstance} from "axios";
import {defaultAxiosInstance} from "./Api"

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNlZHJpYy56b2xsaW5nZXJAZWR1LnRiei5jaCIsImlhdCI6MTY1NDE3MzEzNCwiZXhwIjoxNjU0MTc2NzM0LCJzdWIiOiIzIn0.sVi-vTJxE1Gd7_k0NmFMFqftIFP7fjbwWQ7KhlLKIQ8";

const config = {
    headers: {
        Authorization: `Bearer ${token}`,
    },
};

const GetAllCarsService = (api: AxiosInstance = defaultAxiosInstance) => ({
    getAllCars: async () => {
        const data = await api.get("/cars", config)
        return data
    }
})

export default GetAllCarsService;