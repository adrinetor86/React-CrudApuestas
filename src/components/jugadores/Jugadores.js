import React, {Component} from 'react';
import Global from "../../Global";
import axios from "axios";
import {NavLink} from "react-router-dom";

class Jugadores extends Component {

    url=Global.apiApuesta
    state={
        jugadores:null
    }
    cargarJugadores=()=>{

    let request="/api/Jugadores/JugadoresEquipos/"+this.props.idequipo

    axios.get(this.url+request).then((response) => {
        this.setState({
            jugadores: response.data,
        })
    })
    }

    componentDidMount() {
        this.cargarJugadores()
    }

    render() {
        return (
            <div>
                <h1>Jugadores</h1>

                {
                    this.state.jugadores &&
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>Jugador</th>
                            <th>posicion</th>
                            <th>imagen</th>
                            <th>fechaNacimiento</th>
                            <th>pais</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.jugadores.map((jugador, index) =>{
                                return(<tr key={index}>
                                    <td>{jugador.nombre}</td>
                                    <td>{jugador.posicion}</td>
                                    <td><img src={jugador.imagen} style={{height:"25%",width:"50%"}}/></td>
                                    <td>{jugador.fechaNacimiento}</td>
                                    <td>{jugador.pais}</td>
                                    <td>
                                        <button>
                                            <NavLink className="text-decoration-none" to={"/jugador/"+jugador.idJugador}>Detalles</NavLink>
                                        </button>
                                    </td>
                                </tr>)
                            })
                        }
                        </tbody>
                    </table>
                }
            </div>
        );
    }
}

export default Jugadores;