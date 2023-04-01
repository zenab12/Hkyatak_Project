import { NavLink } from "react-router-dom";
import Nabvar from "../components/common/navbar";

let Home = () => {
  return (
    <div className="Home">
      <header>
        <Nabvar />

<div className="container">
<div className="content">
          <h2>Adventure Awaits you | Let's Go Dear !! </h2>
          <p>
            If you want to simulate your life or memories in blogs with Gaming
            style , then Hkyatak is best place for you .
          </p>
          <div className="Buttons">
          
              <button className="light">
              <NavLink className="navLink" to={localStorage.getItem("userToken")?"/feed":"/login"} >
              Get Started
              </NavLink>
            </button>
            
          
          </div>
        </div>
   <div className="image">
   
   </div>
</div>
       
      </header>
    </div>
  );
};

export default Home;
