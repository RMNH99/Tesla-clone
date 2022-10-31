import React from "react";
import BackButton from "../BackButton";
import lg from "../images/logo.png";

const Account=()=>{
    return(
        <div>
        <div className="menu-pages">
            <div>
            <img src={lg} alt="logo" />
            <h3>This is a Account Page</h3>
            <BackButton/>
            </div>
    </div>
        </div>
        
    );
    }
    export default Account;