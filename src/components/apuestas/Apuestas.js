import React, {Component} from 'react';
import Global from "../../Global";
import axios from "axios";
import {NavLink} from "react-router-dom";

class Apuestas extends Component {

    url=Global.apiApuesta
    state={
        apuestas:null
    }
    cargarApuestas=()=>{
        let request="api/Apuestas"

        axios.get(this.url+request).then(response=>{

            console.log(response.data)

            this.setState({
                apuestas:response.data
            })
        })
    }

    componentDidMount() {
        this.cargarApuestas()
    }

    render() {
        return (
            <div className="text-center">
                <h1>Apuestas</h1>
                <button className="bg-danger mb-3">
                    <NavLink className="text-decoration-none text-dark" to="/createapuesta">
                        Crear Apuesta
                    </NavLink>
                </button>
                {

                   this.state.apuestas &&


                    <table className=" text-center table table-striped">
                        <thead>
                        <tr>
                            <th className="bg-primary">Usuario</th>
                            <th className="bg-primary">Resultado</th>
                            <th className="bg-primary">Fecha</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                            this.state.apuestas.map((apuesta,index) => {
                                return(<tr key={index}>
                                    <td>{apuesta.usuario}</td>
                                    <td>{apuesta.resultado}</td>
                                    <td>{apuesta.fecha}</td>

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

export default Apuestas;