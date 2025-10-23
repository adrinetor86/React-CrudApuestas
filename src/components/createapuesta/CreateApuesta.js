import React, {Component} from 'react';
import axios from "axios";
import Global from "../../Global";
import {Navigate} from "react-router-dom";

class CreateApuesta extends Component {

    state = {
        status:false
    }
    url=Global.apiApuesta
    cajaUsuario =React.createRef();
    cajaFecha =React.createRef();
    cajaResultado1 =React.createRef();
    cajaResultado2 =React.createRef();

    crearApuesta = (event) => {
        event.preventDefault();
        let request="api/Apuestas"
        let resultado= this.cajaResultado1.current.value +" - "+ this.cajaResultado2.current.value;

        let apuesta= {
            idApuesta: 0,
            usuario: this.cajaUsuario.current.value,
            resultado: resultado,
            fecha: this.cajaFecha.current.value
        }

        axios.post(this.url+request,apuesta).then(response => {
            console.log("Creado")
        })
    }


    render() {

        return (
            <div>
                <h1>CREAR APUESTA</h1>

                {
                    this.state.status === true &&

                    <Navigate to="apuestas"/>
                }
                <form>

                    <label htmlFor="">Usuario: </label>
                    <input placeholder="Usuario" ref={this.cajaUsuario} type="text"/>

                    <label htmlFor="">Equipo 1:</label>
                    <input type="text" placeholder={"Madrid 2"} ref={this.cajaResultado1}/>

                    <label htmlFor="">Equipo 2: </label>
                    <input type="text" placeholder={"3 Barcelona"} ref={this.cajaResultado2}/>

                    <label htmlFor="">Fecha: </label>
                    <input type="text" placeholder="dd/mm/aaaa" ref={this.cajaFecha} />
                    <button onClick={this.crearApuesta}>Crear Apuesta</button>
                </form>
            </div>
        );
    }
}

export default CreateApuesta;