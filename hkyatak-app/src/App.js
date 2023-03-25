import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import SignUp from "./components/auth/sign_up.js";
import Register from "./pages/sign_up";
import Logging from "./pages/log_in";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Error from "./pages/error";
function App() {
  return (
    <div className="App">
      {/* <Register/> */}
      {/* <Logging /> */}
      <BrowserRouter>
        {/* <Header /> */}
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Logging />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Error />} />
            {/* <Route path="/about" element={<Outlet />}>
              <Route index element={<About />} />
              <Route path="team" element={<AboutTeam />} />
              <Route path="company" element={<AboutCompany />} />
            </Route> */}
            {/* <Route path="/product/:productid/:country?" element={<Product />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
