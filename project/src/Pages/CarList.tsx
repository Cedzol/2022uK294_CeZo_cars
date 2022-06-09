import * as React from "react";
import {useEffect, useState} from "react";
import DataService from "../Services/DataService";
import "../StyleSheets/list.css"
import PrimarySearchAppBar from "../Organism/PrimarySearchAppBar";
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

const CarList = () => {

    const [carData, setCarData] = useState([])
    let [filteredData, setFilteredData] = useState([])
    const navigate = useNavigate();

    const handleFilter = (event: any) => {
        const searchWord = event.target.value.toLowerCase();
        let newFilter = carData.filter((value) => {
            return Object.values(value).join("").toLowerCase().includes(searchWord)
        })
        setFilteredData(newFilter);
    }

    if (filteredData.length === 0) {
        filteredData = carData;
    }

    useEffect(() => {
        DataService(localStorage.getItem("token")).getAllCars().then((allCarData) => setCarData(allCarData.data))

    }, [carData])


    function handleDetail(id: number) {
        navigate("/cars/" + id)
    }

    function handleCreate() {
        navigate("/car")
    }

    return (
        <div>
            <PrimarySearchAppBar/>
            <div className={"pad"}>
                {carData.length > 0 ?
                    <div>
                        <button className={"create"} onClick={() => handleCreate()}>Create Car</button>
                        <div className={"inline"}></div>
                            <div className={"inline"}>
                                <label>Search: </label>
                                <input type="text" onChange={handleFilter}/>
                            </div>
                        </div>
                    : null}
            </div>
            {carData.length == 0 ? <p>Try reloading or log in again</p> : null}
            {filteredData.map((car: Car, i: number) => {
                return (<div className={"inlineCar"}>
                        <div className="card">
                            <div key={i}>
                                <p><b>Name: </b>{car.Name}</p>

                                <p><b>Date: </b>{car.Year}</p>

                                <p><b>Id: </b>{car.id}</p>
                                <div className={"inline"}>
                                    <button className={"back"} onClick={() => handleDetail(car.id)}>Details</button>
                                </div>

                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CarList;