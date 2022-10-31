import React from "react";
import {NavLink} from "react-router-dom";
import logo from "../images/teslalogo.png";

function TopMenu() {
    // ........................To Open Menu......................
    const set =()=>{
      document.querySelector('.blur-bg').className ='blur-bgaactive';
      document.querySelector('.sidebar').className='sidebaractive';
  }
  return (
    
    <header>
            <div className="logo">
                <NavLink to="/"><img src={logo} alt="Logo" /></NavLink>
            </div>
            <nav className="center showdesktop">
                <NavLink to="/models" className="navlinks">Model S</NavLink>
                <NavLink to="/model3" className="navlinks">Model 3</NavLink>
                <NavLink to="/modelx" className="navlinks">Model X</NavLink>
                <NavLink to="/modely" className="navlinks">Model Y</NavLink>
                <NavLink to="/solarroof" className="navlinks">Solar Roof</NavLink>
                <NavLink to="/solarpannel" className="navlinks">Solar Pannel</NavLink>
            </nav>

            <nav className="right">
                <NavLink to="/shop" className="showdesktop navlinks">Shop</NavLink>
                <NavLink to="/account" className="showdesktop navlinks">Account</NavLink>
                <span className="navlinks" id="menu" onClick={set}>Menu</span>
            </nav>
    </header>
);
}
export default TopMenu;