import BackButton from "../BackButton";
import mr from "../images/tesla-solarpannels.jpg";

const SolarPannels=()=>{
    return(
        <div className="section2" style={{backgroundImage: `url(${mr})`}}>
            <div className="menu-pages">
            <div>
            <h1>This is a Solar Pannel Page</h1>
            <BackButton/>
         </div>
        </div>
        </div>
    );
    }
    export default SolarPannels;