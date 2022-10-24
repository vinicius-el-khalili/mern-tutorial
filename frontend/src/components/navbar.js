import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
const Navbar = ()=>{
    return(
        <div className="navbar">
            <Link to="/">
                <h1>Home</h1>
            </Link>
        </div>
    )
}
export default Navbar