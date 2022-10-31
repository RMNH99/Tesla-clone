import React from "react";
import { Route, Routes } from 'react-router-dom';
import TopMenu from "./Pages/TopMenu";
import Footer from "./Pages/Footer";

// ...................................Pages..................................

import Home from "./Pages/home";
import Model3 from "./Pages/Model3";
import ModelS from "./Pages/ModelS";
import ModelX from "./Pages/ModelX";
import ModelY from "./Pages/ModelY";
import SolarPannels from "./Pages/SolarPannels";
import SolarRoof from "./Pages/SolarRoof";
import Account from "./Pages/Account";
import Shop from "./Pages/Shop";
import Comman from "./Pages/CommanPage";
import Sidebar from "./Sidebar";



function App() {
  // ........................To Close Menu......................
  const close=()=>{
    document.querySelector('.blur-bgaactive').className ='blur-bg';
    document.querySelector('.sidebaractive').className='sidebar';
}

  return (
<>
<TopMenu/>
<div className="blur-bg" onClick={close}></div>
<Sidebar/>
<Routes>
  <Route exact path="/" element={<Home/>} />
  <Route path="/models" element={<ModelS/>} />
  <Route path="/model3" element={<Model3/>} />
  <Route path="/modelx" element={<ModelX/>} />
  <Route path="/modely" element={<ModelY/>} />
  <Route path="/solarroof" element={<SolarRoof/>}  />
  <Route path="/solarpannel" element={<SolarPannels/>}/>
  <Route path="/shop" element={<Shop/>} />
  <Route path="/account" element={<Account/>} />
  <Route path="/cmn" element={<Comman/>} />
  <Route element={<Home/>}/>
</Routes>
<div className='absolute'>
<Footer/>
</div>
</>
  );
}

export default App;
