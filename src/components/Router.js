import React, {Component} from 'react';
import {BrowserRouter, Route, Routes, useParams} from "react-router-dom";
import App from "../App";
import Header from "./header/Header";
import Home from "./home/Home";
import Equipos from "./equipos/Equipos";
import Jugadores from "./jugadores/Jugadores";
import DatosJugador from "./datosjugador/DatosJugador";
import Apuestas from "./apuestas/Apuestas";
import CreateApuesta from "./createapuesta/CreateApuesta";

class Router extends Component {
    render() {

        function EquipoElement(){
            let{idequipo}=useParams()

            return<Equipos idequipo={idequipo}/>
        }
        function JugadoresElement(){
            let{idequipo}=useParams()

            return<Jugadores idequipo={idequipo}/>
        }
        function DatosJugadorElement(){
            let{idjugador}=useParams()

            return<DatosJugador idjugador={idjugador}/>
        }
        return (
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/equipo/:idequipo" element={<EquipoElement/>}></Route>
                    <Route path="/jugadores/:idequipo" element={<JugadoresElement/>}></Route>
                    <Route path="/jugador/:idjugador" element={<DatosJugadorElement/>}></Route>
                    <Route path="/createapuesta" element={<CreateApuesta/>}></Route>
                    <Route path="/apuestas" element={<Apuestas/>}></Route>

                </Routes>
            </BrowserRouter>
        );
    }
}

export default Router;