
import './home.css';
import BackButton from "../BackButton";
import my from "../images/tesla-model-s.jpg";

const ModelS=()=>{
    return(
        <div className="section2" style={{backgroundImage: `url(${my})`}}>
            <div className="menu-pages">
            <div>
            <h1>This is a Model S Page</h1>
            <BackButton/>
         </div>
        </div>

      
        </div>
    );
    }
    export default ModelS;