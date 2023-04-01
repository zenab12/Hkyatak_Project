import { NavLink } from "react-router-dom";

import LogIn from "../components/auth/log_in";
const Logging = () => {
  return (
  <div className="Sign">
    <div className="container">
      
   
      <div className="image">
      {/* <img src={sign_up}/> */}
      <img src={require("../assets/images/SignLight.png")}/>
      </div>
      <div className="form">
      
      <h1>Welcome<span>back</span></h1>
      <p>Join us today and you will be happy :) </p>
      <LogIn />
      
      <p className="log"> Do you Haven't an account ?  <NavLink to="/signup">SignUp</NavLink></p>

      </div>
    </div>
    </div>
  );
};
export default Logging;
