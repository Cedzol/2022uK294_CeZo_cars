import * as React from "react";
import {useEffect, useState} from "react";
import DataService from "./Serices/DataService";
import {Link, useNavigate, useParams} from "react-router-dom";
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

    const navigate = useNavigate();

    function handleBack(){
        navigate("/cars")
    }

    function handleEdit(detail : Car){
        navigate("/cars/edit/" + detail.id)
    }

    let {id} = useParams();
    console.log(id)
    const [loop, setLoop] = useState(0)

    // @ts-ignore
    const getCar: () => Car = async () => {
        if (loop === 0) {
            DataService(localStorage.getItem("token")).getCarById(id)
                .then((data) => setDetail(data.data))
                .catch(function (error) {
                    console.log(error);
                });
            setLoop(1);
        }
        return detail
    }
    const [detail, setDetail] = useState<Car>(getCar())
    console.log(detail)

    return (
        <div>
            <PrimarySearchAppBar/>
        <div>
            <div className={"inlineCar"}>
                <div className="detailCard">
                    <div className={"details"}>
                        <p><b>Name: </b>{detail.Name}</p>

                        <p><b>MPG: </b>{detail.Miles_per_Gallon}</p>

                        <p><b>Horsepower: </b>{detail.Horsepower}</p>

                        <p><b>Cylinders: </b>{detail.Cylinders}</p>

                        <p><b>Year: </b>{detail.Year}</p>

                        <p><b>Id: </b>{detail.id}</p>
                    </div>
                </div>
            </div>
        </div>
            <div className={"center"}>
                <div className={"inline"}><button className={"edit"} onClick={()=> handleEdit(detail)}>Edit</button></div>
                <div className={"inline"}><button className={"back"} onClick={()=> handleBack()}>Back</button></div>

            </div>
        </div>
    )
}

export default CarDetail;