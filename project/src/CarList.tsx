import * as React from "react";
import {useEffect, useState} from "react";
import DataService from "./Serices/DataService";
import "./list.css"
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import {useNavigate} from "react-router-dom";

const CarList = () => {

    type Car = {
        Name : string,
        Miles_per_Gallon : number,
        Cylinders : number,
        Displacement : number,
        Horsepower : number,
        Weight_in_lbs : number,
        Acceleration : number,
        Year : string,
        Origin : string,
        id : number
    }

    const [carData, setCarData] = useState([])
    let [filteredData, setFilteredData] = useState([])

    const getToken = () => {
        return localStorage.getItem("token")
    }

    const handleFilter = (event : any) => {
        const searchWord = event.target.value.toLowerCase();
        let newFilter = carData.filter((value) => {
            return Object.values(value).join("").toLowerCase().includes(searchWord)
        })
        setFilteredData(newFilter);
    }

    if (filteredData.length === 0) {
        filteredData = carData;
    }

    const navigate = useNavigate();

    useEffect(() => {
        const tok = getToken();
        DataService(tok).getAllCars().then((allCarData) => setCarData(allCarData.data))

    }, [carData])


    function handleDetail(id : number){
        navigate("/cars/" + id)
    }

    function handleCreate() {
        navigate("/car")
    }

    return (
        <div>
            <PrimarySearchAppBar/>
            <div className={"pad"}>
                {carData.length > 0 ? <button className={"create"} onClick={() => handleCreate()}>Create Car</button>: null}
                <div className={"inline"}></div>
                <label>Search: </label>
                <input type="text" onChange={handleFilter}/>
            </div>
            {carData.length == 0? <p>Try reloading or login in again</p> : null}
            {filteredData.map((car : Car, i : number) => {
                return (<div className={"inlineCar"}>
                        <div className="card">
                                <div key={i}>
                                    <p><b>Name: </b>{car.Name}</p>

                                    <p><b>Date: </b>{car.Year}</p>

                                    <p><b>Id: </b>{car.id}</p>
                                    <div className={"inline"}><button className={"back"} onClick={()=> handleDetail(car.id)}>Details</button></div>

                                </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CarList;