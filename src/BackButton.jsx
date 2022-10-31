import React from "react";
import { useNavigate } from 'react-router-dom';

const BackButton=()=>{
    let navi=useNavigate();
    return(
            <div className="btn">
                <button onClick={() => navi(-1)}>Back</button>
                <div className="blank"></div>
                <button onClick={() => navi('/')}>Home Page</button>
            </div>
    );
    }
    export default BackButton;