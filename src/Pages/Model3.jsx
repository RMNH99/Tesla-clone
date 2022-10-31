
import BackButton from "../BackButton";
import ms from "../images/tesla-model-3.jpg";
const Model3=()=>{

    return(
        <div className="section2" style={{backgroundImage: `url(${ms})`}}>
            <div className="menu-pages">
            <div>
            <h1>This is a Model 3 Page</h1>
            <BackButton/>
         </div>
        </div>
        </div>
    );
    }
    export default Model3;