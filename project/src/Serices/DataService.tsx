import {AxiosInstance} from "axios";
import {defaultAxiosInstance} from "../Api"

type Car = {
    Name: string,
    Miles_per_Gallon: number,
    Cylinders: number,
    Displacement: number,
    Horsepower: number,
    Weight_in_lbs: number,
    Acceleration: number,
    Year: string,
    Origin: string,
    id: number
}

const DataService = (token : string | null, api: AxiosInstance = defaultAxiosInstance) => ({

    getAllCars: async () => {
        const data = await api.get("/cars", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return data
    },

    getCarById: async (id : string | undefined) => {
        const data = await api.get("/cars/" + id, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return data
    },

    updateCar: async (car : Car) => {
        console.log(car)
        const data = await api.put("/cars/" + car.id, {
            Name: car.Name,
            Miles_per_Gallon: car.Miles_per_Gallon,
            Cylinders: car.Cylinders,
            Displacement: car.Displacement,
            Horsepower: car.Horsepower,
            Weight_in_lbs: car.Weight_in_lbs,
            Acceleration: car.Acceleration,
            Year: car.Year,
            Origin: car.Origin,
            id: car.id
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return data
    },

    deleteCar: async (car : Car) => {
        const data = await api.delete("/cars/" + car.id, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return data
    }
})

export default DataService;