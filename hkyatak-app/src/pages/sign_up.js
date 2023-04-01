import { NavLink } from "react-router-dom";
import SignUp from "../components/auth/sign_up";

const Register = () => {
  return (
    <div className="Sign">
    <div className="container">
      <div className="image">
      {/* <img src={sign_up}/> */}
      <img src={require("../assets/images/SignLight.png")}/>
      </div>
      <div className="form">
      
      <h1>Sign<span>Up</span></h1>
      <p>Join us today and you will be happy :) </p>
      <SignUp />
      
      <p className="log">Already Have an account <NavLink to="/login">LogIn</NavLink></p>

      </div>
    </div>
    </div>
  );
};
export default Register;
