import AnimatedSVG from "../components/common/animated_svg";
import { NavLink } from "react-router-dom";
import Nabvar from "../components/common/navbar";
let Error=()=>{

    return(
    
        <div className="Home Error">
          <Nabvar />
  
  <div className="container">
  <div className="content">
            <h2>              Sorry Dear, come in another time! </h2>
            <p>
Remmeber That I Wait you....            </p>
            <div className="Buttons">
            
                <button className="light">
                <NavLink className="navLink" to="/" >
Home                </NavLink>
              </button>
              
            
            </div>
          </div>
     <div className="image">
        <img src={require("../assets/images/error.png")}/>
     </div>
  </div>
         
      </div>    )
    }
    
export default Error;