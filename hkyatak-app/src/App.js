import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import SignUp from "./components/auth/sign_up.js";
import Register from "./pages/sign_up";
import Logging from "./pages/log_in";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Error from "./pages/error";
import About from "./pages/about";
import Contact from "./pages/contact";
import Feed from "./components/posts/post_feed";
import CreatePost from "./components/posts/create_post";
import Nabvar from "./components/common/navbar";
import { useState } from "react";
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
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Logging />} />
            <Route path="/navbar" element={<Nabvar />}/>
            <Route path="/signup" element={<Register/>} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/create_post" element={<CreatePost />} />
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
