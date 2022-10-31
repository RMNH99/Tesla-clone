import BackButton from "../BackButton";
import mp from "../images/teslaroof.jpg";

const SolarRoof=()=>{
    return(
        <div className="section2" style={{backgroundImage: `url(${mp})`}}>
        <div className="menu-pages">
        <div>
            <h1>This is a Solar Roof Page</h1>
            <BackButton/>
         </div>
    </div>
    </div>
    );
    }
    export default SolarRoof;