import React, { Component } from 'react'
import Navbar from './Navbar'
import Main from './Main'
import Footer from './Footer'

export class App extends Component {
    render() {
        return (
            <div className="d-flex flex-column">
                <Navbar />
                <Main />
                <Footer />
            </div>
        )
    }
}

export default App
