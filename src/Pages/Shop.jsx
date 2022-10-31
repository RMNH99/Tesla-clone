import BackButton from "../BackButton";
import ma from "../images/tesla-accesories.jpg";

const Shop=()=>{
    return(
        <div className="section2" style={{backgroundImage: `url(${ma})`}}>
            <div className="menu-pages">
            <div>
            <h1>This is a Shop Page</h1>
            <BackButton/>
            </div>
        </div>
        </div>
    );
    }
    export default Shop;