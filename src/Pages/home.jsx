import React from "react";
import "./home.css";
import {NavLink} from "react-router-dom";
import ms from "../images/tesla-model-3.jpg";
import m3 from "../images/tesla-model-y.jpg";
import mx from "../images/tesla-model-x.jpg";
import my from "../images/tesla-model-s.jpg";
import mp from "../images/teslaroof.jpg";
import mr from "../images/tesla-solarpannels.jpg";
import ma from "../images/tesla-accesories.jpg";


const Home=()=>{
return(<>
{/* ...............................................Model 3 ..................................................... */}

      <div className="section" style={{backgroundImage: `url(${ms})`}}>
      <div className="content">
            <h1>Model 3</h1>
            <p>Order Online for <NavLink to="/cmn">Touchless Delivery</NavLink></p>
                <div className="button">
                    <NavLink to="/cmn">Custom Order</NavLink>
                    <NavLink to="/cmn">existing inventory</NavLink>
                </div>
     </div>
      </div>

{/* ...............................................Model Y ..................................................... */}

      <div className="section" style={{backgroundImage: `url(${m3})`}}>
      <div className="content">
            <h1>Model Y</h1>
            <p>Order Online for <NavLink to="/cmn">Touchless Delivery</NavLink></p>
                <div className="button">
                    <NavLink to="/cmn">Custom Order</NavLink>
                    <NavLink to="/cmn">existing inventory</NavLink>
                </div>
     </div>
      </div>

{/* ...............................................Model X ..................................................... */}
      <div className="section" style={{backgroundImage: `url(${mx})`}}>
      <div className="content">
            <h1>Model X</h1>
            <p>Order Online for <NavLink to="/cmn">Touchless Delivery</NavLink></p>
                <div className="button">
                    <NavLink to="/cmn">Custom Order</NavLink>
                    <NavLink to="/cmn">existing inventory</NavLink>
                </div>
     </div>
      </div>

{/* ...............................................Model S ..................................................... */}

      <div className="section" style={{backgroundImage: `url(${my})`}}>
      <div className="content">
            <h1>Model S</h1>
            <p>Order Online for <NavLink to="/cmn">Touchless Delivery</NavLink></p>
                <div className="button">
                    <NavLink to="/cmn">Custom Order</NavLink>
                    <NavLink to="/cmn">existing inventory</NavLink>
                </div>
     </div>
      </div>

{/* ...............................................Solar Pannel ..................................................... */}

      <div className="section" style={{backgroundImage: `url(${mr})`}}>
      <div className="content">
            <h1>Solar Pannel</h1>
            <p>Order Online for <NavLink to="/cmn">Touchless Delivery</NavLink></p>
                <div className="button">
                    <NavLink to="/cmn">Custom Order</NavLink>
                    <NavLink to="/cmn">existing inventory</NavLink>
                </div>
     </div>
    </div>

    {/* ...............................................Solar Roof ..................................................... */}
      <div className="section" style={{backgroundImage: `url(${mp})`}}>
      <div className="content">
            <h1>Solar Roof</h1>
            <p>Order Online for <NavLink to="/cmn">Touchless Delivery</NavLink></p>
                <div className="button">
                    <NavLink to="/cmn">Custom Order</NavLink>
                    <NavLink to="/cmn">existing inventory</NavLink>
                </div>
     </div>
      </div>

{/* ...............................................Accesories..................................................... */}

      <div className="section" style={{backgroundImage: `url(${ma})`}}>
      <div className="content">
            <h1>Accessories</h1>
            <p></p>
                <div className="button2">
                 <NavLink to="/cmn">Shop Now</NavLink>
                </div>         
     </div>

      </div>
</>);
}
export default Home;
