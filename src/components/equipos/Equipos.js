import React, {Component} from 'react';
import Global from "../../Global";
import axios from "axios";
import {NavLink} from "react-router-dom";


class Equipos extends Component {

    url=Global.apiApuesta

    state={
        equipo:[]
    }

    cargarEquipo=()=>{
        let request="/api/Equipos/"+this.props.idequipo;

        axios.get(this.url+request).then((response)=>{

            console.log(response.data);

            this.setState({equipo:response.data});
        })
    }

    componentDidMount() {
        this.cargarEquipo();
    }
    componentDidUpdate(oldProps) {

        if(oldProps.idequipo !== this.props.idequipo){

            this.cargarEquipo();
        }
    }

    render() {

        return (
            <div className="text-center p-5">
                <h1 className="bg-light text-primary">{this.state.equipo.nombre}</h1>
                <img src={this.state.equipo.imagen} className="text-primary" style={{height:"25%",width:"50%"}}/>
                <h3 className="">Champions: {this.state.equipo.champions}</h3>
                <a href={this.state.equipo.web} className="text-primary">Página Web</a>
                <p className="text-primary">{this.state.equipo.descripcion}</p>
                <h1 className="text-primary">Finalista:{this.state.equipo.finalista}</h1>
                <button>
                    <NavLink className="text-decoration-none" to={"/jugadores/"+this.state.equipo.idEquipo}>Jugadores</NavLink>
                </button>
                <button className="bg-info">Volver</button>
            </div>
        );
    }
}

export default Equipos;