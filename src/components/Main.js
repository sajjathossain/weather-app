import React, { Component, useState, useEffect } from 'react'
import InputField from './InputField'
import OutputField from './OutputField'

let myInfo;

export class Main extends Component {

    constructor(props) {
        super(props)
        this.checkWeather = this.checkWeather.bind(this)
        this.state = {isLoading: true, infos: ""}
    }

   
    location = (e) => {
        myInfo = e.target.value
    }
    
    async checkWeather() {
        const weatherApi = `http://api.weatherapi.com/v1/current.json?key=fa8588f468884cab9dc184829210602&q=${myInfo}`;     
        const response = await fetch(weatherApi);
        const data = await response.json();

        this.setState({isLoading: false, infos: data})

    }

    
    render() {
       

        return (
            <div>
                <InputField checkWeather={this.checkWeather} getLocation={this.location} />
                {this.state.isLoading === true ? <h3 className="container mb-3 alert alert-warning font-weight-bold d-flex justify-content-center ">No Data</h3> : <OutputField data={this.state.infos} />}
            </div>
        )
    }
}

export default Main


