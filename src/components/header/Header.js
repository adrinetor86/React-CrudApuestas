import React, {Component} from 'react';
import Global from "../../Global";
import axios from "axios";
import logo from "../../assets/images/champions.png"
import {NavLink} from "react-router-dom";
class Header extends Component {

    state={
        equipos:[]
    }
    url=Global.apiApuesta

    cargarSelectEquipos=()=>{
        let request="api/Equipos"

        axios.get(this.url+request).then(response=>{
            this.setState({
                equipos:response.data
            });
        })
    }

    componentDidMount() {
        this.cargarSelectEquipos();
    }

    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">

                            <img src={logo} alt="Bootstrap" style={{width:"40px",height:"40px"}}/>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Champions</a>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active text-decoration-none" aria-current="page" to="/">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-decoration-none" to="/apuestas">
                                        Apuestas
                                    </NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button"
                                       data-bs-toggle="dropdown" aria-expanded="false">
                                        Ver Equipos
                                    </a>
                                    <ul className="dropdown-menu">
                                        {
                                            this.state.equipos.map((equipo, index) => {
                                                return <li key={index} className="nav-item">
                                                    <NavLink to={"/equipo/"+equipo.idEquipo}>{equipo.nombre}</NavLink>
                                                </li>
                                            })
                                        }
                                    </ul>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>

            </header>
        );
    }
}

export default Header;