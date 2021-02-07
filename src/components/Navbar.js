import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div className="navbar navbar-dark bg-dark d-flex justify-content-space-between">
                <div className="navbar-brand h2 font-weight-bold">CWeather</div>
                <div className="font-weight-bold"><a href="#about" className="text-light btn btn-success">About</a></div>
            </div>
        )
    }
}

export default Navbar