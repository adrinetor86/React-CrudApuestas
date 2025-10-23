import React, {Component} from 'react';
import Global from "../../Global";
import axios from "axios";
import {NavLink} from "react-router-dom";

class DatosJugador extends Component {
    url=Global.apiApuesta

    state={
        jugador: []
    }
    cargarDatos=()=>{
        let request="/api/Jugadores/"+this.props.idjugador


        axios.get(this.url+request).then((response)=>{

            console.log(response.data)
            this.setState({
                jugador:response.data
            })
        })
    }

    componentDidMount() {
        this.cargarDatos()
    }

    render() {
        return (
            <div className="text-center p-5">


                <h1>Jugador</h1>
                <h1>{this.state.jugador.nombre}</h1>
                <img src={this.state.jugador.imagen}/>
                <h1>{this.state.jugador.posicion}</h1>
                <p>Fecha Nacimiento: {this.state.jugador.fechaNacimiento}</p>
                <p>Pais: {this.state.jugador.pais}</p>
                <button>
                    <NavLink className="text-decoration-none" to={"/jugadores/"+this.state.jugador.idEquipo}>Jugadores</NavLink>
                </button>
            </div>
        );
    }
}

export default DatosJugador;