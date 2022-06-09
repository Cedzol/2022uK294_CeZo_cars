import * as React from "react";
import {useEffect, useState} from "react";
import DataService from "./Serices/DataService";
import {useNavigate, useParams} from "react-router-dom";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import "./Details.css"

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

function CarDetail () {

    let {id} = useParams();

    const navigate = useNavigate();
    const [detail, setCarData] = useState<Car>()

    useEffect(() => {
        if (loop == 0) {
            DataService(localStorage.getItem("token")).getCarById(id).then((carData) => setCarData(carData.data))
            setLoop(1)
        }
    }, [detail])

    function handleBack(){
        navigate("/cars")
    }

    function handleEdit(detail : Car){
        navigate("/cars/edit/" + detail.id)
    }
    const [loop, setLoop] = useState(0)



    return (
        <div>
            <div>
                <PrimarySearchAppBar/>
            </div>
            {detail == null? null :
                <div>
                    <div className={"inlineCar"}>
                        <div className="detailCard">
                            <div className={"details"}>
                                <p><b>Name: </b>{detail.Name}</p>

                                <p><b>MPG: </b>{detail.Miles_per_Gallon}</p>

                                <p><b>Cylinders: </b>{detail.Cylinders}</p>

                                <p><b>Displacement: </b>{detail.Displacement}</p>

                                <p><b>Horsepower: </b>{detail.Horsepower}</p>

                                <p><b>Lbs: </b>{detail.Weight_in_lbs}</p>

                                <p><b>Acceleration: </b>{detail.Acceleration}</p>

                                <p><b>Date: </b>{detail.Year}</p>

                                <p><b>Origin: </b>{detail.Origin}</p>

                                <p><b>Id: </b>{detail.id}</p>
                            </div>
                        </div>
                    </div>
                    <div className={"center"}>
                        <div className={"inline"}>
                            <button className={"edit"} onClick={() => handleEdit(detail)}>Edit</button>
                        </div>
                        <div className={"inline"}>
                            <button className={"back"} onClick={() => handleBack()}>Back</button>
                        </div>
                    </div>
                </div>
            }
        </div>
        )
}

export default CarDetail;

