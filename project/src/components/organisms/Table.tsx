import React from "react";
import './bar.css';
import {useEffect, useState} from 'react';
import {Interface} from "readline";

interface Car{
    Name : string,
    Miles_per_Gallon : number,
    Cylinders : number,
    Displacement : number
    Horsepower : number
    Weight_in_lbs : number,
    Acceleration : number,
    Year : string,
    Origin : string,
    id : number
}

export default function Table(){


    const [data, setData] = useState([]);
    let [filteredData, setFilteredData] = useState([]);


    if (filteredData.length === 0) {
        filteredData = data
    }

    useEffect(() => {
        datas()
    }, [data])

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com',
            'X-RapidAPI-Key': '4828a51c7emshd22e543db25105fp1de3cfjsn3daea2e5070a'
        }
    };

    const datas = async () => {
        const response = await fetch('https://restcountries.com/v2/all', options);
        setData(await response.json());
    }

    return (
        <div>
            {filteredData.map((data) => {
                return (
                    <div className={"table"}>
                        <div>
                            <table className={"dataResult"}>
                                <tr className="list-group-items">
                                    <td>
                                        <p>Id: {data.id}</p>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

