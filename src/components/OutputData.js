import React from 'react'
import './OutputData.css'

const OutputData = ({ option, value }) => {
    return (
        <tr>
           <td>{option}</td> 
           <td>{value}</td> 
        </tr>
    )
}

export default OutputData
