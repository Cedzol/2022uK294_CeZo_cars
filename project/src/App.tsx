import './StyleSheets/App.css';
import PrimarySearchAppBar from "./Organism/PrimarySearchAppBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CarList from "./Pages/CarList";
import * as React from "react";
import CarDetail from "./Pages/CarDetail";
import Edit from "./Pages/Edit";
import CreateCar from "./Pages/CreateCar";


function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<PrimarySearchAppBar/>}/>
                    <Route path={"/cars"} element={<CarList/>}/>
                    <Route path={"/cars/:id"} element={<CarDetail/>}/>
                    <Route path={"/cars/edit/:id"} element={<Edit/>}/>
                    <Route path={"/car"} element={<CreateCar/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
