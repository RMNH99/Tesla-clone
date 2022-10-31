import BackButton from "../BackButton";
import m3 from "../images/tesla-model-y.jpg";

const ModelY=()=>{
    return(
        <div className="section2" style={{backgroundImage: `url(${m3})`}}>
            <div className="menu-pages">
            <div>
            <h1>This is a Model Y Page</h1>
            <BackButton/>
         </div>
        </div>
        </div>
    );
    }
    export default ModelY;