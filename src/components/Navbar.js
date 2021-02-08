import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import About from './About'
import Main from './Main'
import weather from '../img/weather.png'
import './Navbar.css'


export class Navbar extends React.Component {

    constructor(props) {
        super(props)
        this.toggleView = this.toggleView.bind(this)
        this.state = {isAbout: false, btnPrefix: "text-light btn btn-"}
    }

    toggleView() {
        this.setState({isAbout: !this.state.isAbout, btnPrefix: this.state.btnPrefix})
    }


    render() {
        return (
            <Router>
                <div className="navbar navbar-dark bg-dark d-flex justify-content-space-between">
                    <div className="navbar-brand p-2 font-weight-bold">
                        <img src={weather} className="navIcon" />
                        CWeather 
                    </div>
                    
                    <div className="font-weight-bold" onClick={this.toggleView}>
                        <Link to={this.state.isAbout ? "/" : "/about"} className={this.state.isAbout ? `${this.state.btnPrefix}warning` : `${this.state.btnPrefix}success`} >
                            {this.state.isAbout ? "Back" : "About"}
                        </Link>
                    </div>
                </div>

                <Route exact={true} path="/" component={Main} />
                <Route exact={true} path="/about" component={About} />
            </Router>
        )
    }
}


export default Navbar