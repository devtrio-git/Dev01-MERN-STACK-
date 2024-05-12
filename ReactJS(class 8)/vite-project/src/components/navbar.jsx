import { NavLink } from "react-router-dom";
import { myContext } from "../context/context";
import { useContext } from "react";
export default function Navbar() {

    const { is_dark, setIsDark } = useContext(myContext);


    return <>
        <nav className={`app_navbar d-flex justify-content-between p-3`}>
            <div>
                {/* <myContext.Consumer>{data =>  <h3>{data.name}</h3>}</myContext.Consumer> */}
                <h1>devtrio</h1>
            </div>
            <div className="d-flex gap-2">
                <span><NavLink to="/">Home</NavLink></span>
                <span><NavLink to="/about">About</NavLink></span>
                <button className="btn btn-primary" onClick={() => setIsDark(!is_dark)}>{is_dark ? "Light" : "Dark"}</button>
            </div>
        </nav>
    </>
}