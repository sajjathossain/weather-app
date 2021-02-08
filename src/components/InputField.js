import React from 'react'

const InputField = ({checkWeather, getLocation}) => {
    return (
        <form className="mt-2 pt-2 container form-group d-flex flex-row">
            <input type="text"name="loc" placeholder="Enter your location*" className="form-control" onChange={getLocation} />
            <input type="button" name="sub" onClick={checkWeather} className="ml-2 btn btn-primary" value="Check" />
        </form>         
    )
}

export default InputField
