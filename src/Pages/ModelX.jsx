
import BackButton from "../BackButton";
import mx from "../images/tesla-model-x.jpg";

const ModelX=()=>{
    return(
        <div className="section2" style={{backgroundImage: `url(${mx})`}}>
        <div className="menu-pages">
        <div>
            <h1>This is a Model X Page</h1>
            <BackButton/>
         </div>
    </div>
    </div>
    );
    }
    export default ModelX;