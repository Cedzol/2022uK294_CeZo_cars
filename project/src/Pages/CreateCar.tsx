import * as React from "react";
import PrimarySearchAppBar from "../Organism/PrimarySearchAppBar";
import CreateCarForm from "../Organism/CreateCarForm";
import DataService from "../Services/DataService";
import {useNavigate} from "react-router-dom";

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

const CreateCar = () => {
    const navigate = useNavigate();

    const handleCarSubmit = (newCar: Car) => {
        console.log(newCar)
        DataService(localStorage.getItem("token")).postCar(newCar).then(() =>
            navigate("/cars")
        )
        localStorage.setItem("log", "true");
    }

    return (
        <div>
            <PrimarySearchAppBar/>
            <CreateCarForm onSubmit={handleCarSubmit}/>
        </div>
    )
}

export default CreateCar;