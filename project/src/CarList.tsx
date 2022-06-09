import * as React from "react";
import {useEffect, useState} from "react";
import DataService from "./Serices/DataService";
import "./list.css"
import LoginService from "./Serices/LoginService";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import {Link, useNavigate} from "react-router-dom";

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
    const getToken = () => {
        return localStorage.getItem("token")
    }

    const navigate = useNavigate();

    useEffect(() => {
        const tok = getToken();
        DataService(tok).getAllCars().then((allCarData) => setCarData(allCarData.data))

    }, [carData])

    function handleDetail(id : number){
        navigate("/cars/" + id)
    }

    return (
        <div>
            <PrimarySearchAppBar/>
            {carData.map((car : Car, i : number) => {
                return (<div className={"inlineCar"}>
                        <div className="card">
                                <div key={i}>
                                    <b>Name:</b>
                                    <p >{car.Name}</p>

                                    <b >Id:</b>
                                    <p >{car.id}</p>

                                    <b >Year:</b>
                                    <p >{car.Year}</p>
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