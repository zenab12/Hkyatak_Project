import axios from "axios";
import { useEffect,useState } from "react";
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
import EditPost from "./components/posts/edit_post";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [title, setTitle] = useState('Hkyatak');

  useEffect(() => {
    document.title = title;
  }, [title]);
  
  const [Posts, setPost] = useState([]);
  const [Tags, setTags] = useState([]);
  let tags = [...Tags];
  useEffect(() => {
    const getPosts = async () => {
      let posts = [...Posts];
      posts = await axios.get("http://localhost:3001/posts");
      setPost(posts.data);
      return posts.data;
    };

    getPosts();
    Posts.filter((post) => tags.push(post.tags));
    setTags(tags);
  }, []);

  const handleEdit = (updatedPost) => {
    const updatedPosts = Posts.map((post) =>
      post.id === updatedPost.id ? updatedPost : post
    );
    setPost(updatedPosts);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/posts/${id}`)
      .then(response => {
        setPost(Posts.filter(post => post.id !== id));
      })
      .catch(error => {
        console.log(error);
      });
  };
const loader = document.getElementById('loader');
if(loader){
window.addEventListener('load', () => {
  loader.classList.add('hidden');
});

document.addEventListener('DOMContentLoaded', () => {
  loader.classList.remove('hidden');
});
}
  return (
  
    <div className="App">
      {/* <Register/> */}
      {/* <Logging /> */}
      <ToastContainer/>
      <BrowserRouter>
        {/* <Header /> */}
        <div className="">
        <div id="loader" className="loader-app">
  <div className="logo"></div>
  <div className="loading-text">Loading</div>
  <div className="loading-bar"></div>
</div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Logging />} />
            <Route path="/navbar" element={<Nabvar />}/>
            <Route path="/signup" element={<Register/>} />
            <Route path="/feed" element={<Feed filter="react" posts={Posts} Tags={Tags} handleEdit={handleEdit} handleDelete={handleDelete}/>} />
            <Route path="/create_post" element={<CreatePost />} />

            <Route path="/edit_post" element={<EditPost onEdit={handleEdit} />} />

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
