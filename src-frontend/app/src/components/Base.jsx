import Footer from "./Footer"
import React from "react"
import Home from "./Home"
import Navbar from "./Navbar"
import Router from "../Router"

const Base = () => {
    return (
        <>
        <Navbar />
        <div className="container mx-auto mt-4 min-h-screen">
            <Router/>
        </div>
        <Footer />
        </>
    )

}

export default Base