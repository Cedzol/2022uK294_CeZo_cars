import * as React from "react";
import {useEffect, useState} from "react";
import DataService from "./Serices/DataService";
import {Link, useNavigate, useParams} from "react-router-dom";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import "./Details.css"
import UpdateCar from "./UpdateCar";


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

function Edit () {
    const navigate = useNavigate();

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


    function handleUpdate(car : Car) {
        console.log(car)
        DataService(localStorage.getItem("token")).updateCar(car).then(() => navigate("/cars/" + car.id));
    }

    function handleDelete(car : Car) {
        DataService(localStorage.getItem("token")).deleteCar(car).then(() => navigate("/cars"));
    }

    return (
        
        <div>
            <PrimarySearchAppBar/>
            <div>
                <div className={"inlineCar"}>
                    <div className="editCard">
                        <div>
                            <table>
                                <tr>
                                    <td className={"details"}>
                                        <p><b>Name: </b>{detail.Name}</p>

                                        <p><b>MPG: </b>{detail.Miles_per_Gallon}</p>

                                        <p><b>Cylinders: </b>{detail.Cylinders}</p>

                                        <p><b>Displacement: </b>{detail.Displacement}</p>

                                        <p><b>Horsepower: </b>{detail.Horsepower}</p>

                                        <p><b>Lbs: </b>{detail.Weight_in_lbs}</p>

                                        <p><b>Acceleration: </b>{detail.Acceleration}</p>

                                        <p><b>Year: </b>{detail.Year}</p>

                                        <p><b>Origin: </b>{detail.Origin}</p>

                                        <p><b>Id: </b>{detail.id}</p>
                                    </td>

                                    <td className={"form"}>
                                        <UpdateCar onSubmit={handleUpdate}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <button className={"delete"} onClick={()=> handleDelete(detail)}>Delete</button>
                                    </td>
                                </tr>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit;