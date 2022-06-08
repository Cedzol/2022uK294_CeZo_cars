
import './App.css';
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CarList from "./CarList";
import * as React from "react";
import CarDetail from "./CarDetail";
import Edit from "./Edit";


function App() {

  return (
    <div className="App">

        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<PrimarySearchAppBar/>}/>
                <Route path={"/cars"} element={<CarList/>}/>
                <Route path={"/cars/:id"} element={<CarDetail/>}/>
                <Route path={"/cars/edit/:id"} element={<Edit/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
