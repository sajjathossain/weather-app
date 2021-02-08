import React, { Component } from 'react'
import "./About.css"

export class About extends Component {
    render() {
        return (
            <div className="container mt-4 mb-4 d-flex flex-column justify-content-center">
               <table className="table table-borderless h5 ">
                   <thead>
                        <tr>
                            <td colSpan="2" className="text-center h1">About</td>
                        </tr>
                    </thead>
                    <tbody>
                       <tr>
                           <td className="text-left">
                               <b>Developer :</b>
                           </td>
                           <td className="text-right">
                               <p>Sajjat Hossain</p>
                           </td>
                       </tr>
                       <tr>
                           <td className="text-left">
                               <b>Date of development :</b>
                           </td>
                           <td className="text-right">
                               <p>07/02/2021</p>
                           </td>
                       </tr>
                       <tr>
                           <td className="text-left">
                               <b>Technologies :</b>
                           </td>
                           <td className="text-right">
                               <p>React, Bootstrap, FreeWeatherAPI</p>
                           </td>
                       </tr>
                       <tr>
                           <td className="text-left">
                               <b>Github :</b>
                           </td>
                           <td className="text-right">
                               <a href="https://github.com/sajjathossain" className="editLinks" target="_blank">sajjathossain</a>
                           </td>
                       </tr>
                   </tbody>
               </table>
            </div>
        )
    }
}

export default About
