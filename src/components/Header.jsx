import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () =>{
    const [loginBtn , setLoginBtn] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return(
        <div className="flex justify-between bg-pink-100 shadow-lg px-2">
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL} />
            </div>
            <div className="nav-items flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status:{onlineStatus ? '✔':'🔴'}
                    </li>
                    <li className="px-4"  ><Link to ="/">Home</Link></li>
                    <li className="px-4" ><Link to="/about">About Us</Link></li>
                    <li className="px-4" ><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4" ><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4" >Cart</li>
                    <button className="login-btn" onClick={()=>{
                       loginBtn === "Login"? setLoginBtn("Logout"):setLoginBtn("Login");
                    }}>{loginBtn}</button>
                </ul>
            </div>
        </div>
    );
};
export default Header;