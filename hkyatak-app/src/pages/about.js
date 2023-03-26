import { NavLink } from "react-router-dom";
import Nabvar from "../components/common/navbar";

let About = () => {
  return (
    <div className="about">
      <header>
        <Nabvar />

<div className="container">
<div className="content">
          <h2>ABOUT US </h2>
          <p>
            If you want to simulate your life or memories in blogs with Gaming
            style , then Hkyatak is best place for you .
          </p>
          <div className="Buttons">
            <button className="light">
              <NavLink className="navLink" to="/profile" >
              Get Started
              </NavLink>
            </button>
            {/* <button className="light">
              <NavLink className="navLink" to="/about" >
              More
              </NavLink>

            </button> */}
          </div>
        </div>
   <div className="image">
   
   </div>
</div>
       
      </header>
    </div>
  );
};

export default About;
