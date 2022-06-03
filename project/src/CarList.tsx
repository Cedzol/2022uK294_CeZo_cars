import * as React from "react";
import {useEffect, useState} from "react";
import DataService from "./Serices/DataService";
import "./list.css"

const CarList = ({token}: {token: string | null}) => {
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

    useEffect(() => {
        DataService(token).getAllCars().then((allCarData) => setCarData(allCarData.data))
        console.log(carData)
    }, [carData])

    return (
        <div>
            {carData.map((car : Car) => {
                return (<div className={"inlineCar"}>
                        <div className="card">
                            <table>
                                <tr>
                                    <td>
                                        <b>Name:</b>
                                    </td>
                                    <td>
                                        <p>{car.Name}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><b>Id:</b></td>
                                    <td><p>{car.id}</p></td>
                                </tr>
                                <tr>
                                    <td><b>Year:</b></td>
                                    <td><p>{car.Year}</p></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CarList;