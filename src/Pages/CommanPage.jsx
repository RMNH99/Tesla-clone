import React from "react";
import BackButton from "../BackButton";
import lg from "../images/logo.png";

const Comman=()=>{
    return(
        <div className="menu-pages">
            <div>
            <img src={lg} alt="logo" />
            <h3>This is a Common Page</h3>
            <BackButton/>
            </div>
    </div>
    );
    }
    export default Comman;