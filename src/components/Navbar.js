import React, { Component } from 'react'
import weather from '../../src/img/weather.png'
import './Navbar.css'

export class Navbar extends Component {
    render() {
        return (
            <div className="navbar navbar-dark bg-dark d-flex justify-content-space-between">
                <div className="navbar-brand p-2 font-weight-bold">
                    <img src={weather} className="navIcon" />
                    CWeather 
                </div>
                <div className="font-weight-bold"><a href="#about" className="text-light btn btn-success">About</a></div>
            </div>
        )
    }
}

export default Navbar