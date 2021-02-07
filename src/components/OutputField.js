import React from 'react'
import OutputData from './OutputData'
import './OutputField.css'

const OutputField = ({data}) => {
    return (
        <>
            <div className="mb-2 wIcon container d-flex flex-row justify-content-around">
                <p className="text-success font-weight-bold">{data.current.condition.text}</p>
                <img src={data.current.condition.icon} />
            </div>

            <table className="mt-2 table table-bordered text-center container">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Option</th>
                        <th scope="col">Value</th>
                    </tr>
                </thead>
                <tbody>
                    <OutputData option={"City"} value={data.location.name} />
                    <OutputData option={"Country"} value={data.location.country} />
                    <OutputData option={"Temprature (C)"} value={data.current.temp_c} />
                    <OutputData option={"Temperature (F)"} value={data.current.temp_f} />
                    <OutputData option={"Wind Per Killometer"} value={data.current.wind_kph} />
                    <OutputData option={"Feels Like (C)"} value={data.current.feelslike_c} />
                    <OutputData option={"Humidity"} value={data.current.humidity} />
                    <OutputData option={"Day/Night"} value={data.current.is_day ? "Day" : "Night" } />
                </tbody>

            </table>
        </>
    )
}

export default OutputField
