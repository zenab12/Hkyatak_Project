import React, { useState } from 'react';
import fetch from 'node-fetch';
import axios from 'axios';

  
const  CreatePost = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [imageUrl, setImage] = useState('');
    const [videoUrl, setVideo] = useState('');
    const [tags,setTags]=useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { title, body,imageUrl,videoUrl,tags };
        const response = await axios.post('http://localhost:3001/posts', data);
        console.log(response.data);
        setTitle('');
        setBody('');
    };
    return (
        <div className="Sign Contact">
        <div className="container">
          {/* <div className="image">
          {/* <img src={sign_up}/> */}
          {/* <img src={require("../assets/images/SignLight.png")}/>
          </div> */} 
          <div className="form">
          
          <h1>Create<span>Blog</span></h1>
          <p>I am here Dear to  listen to your secret ... </p>
          
          <form onSubmit={handleSubmit}>
            <div className='input-container'>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div  className='input-container'>
                <label>Body:</label>
                <textarea value={body} onChange={(e) => setBody(e.target.value)} />
            </div>
            
            <div className='input-container'>
                <label>imageUrl:</label>
                <input type="url" value={imageUrl} onChange={(e) => setImage(e.target.value)} />
            </div>
            <div className='input-container'>
                <label>videoUrl:</label>
                <input type="url" value={videoUrl} onChange={(e) => setVideo(e.target.value)} />
            </div>
            <div className='input-container'>
                <label>tags:</label>
                <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} />
            </div>
            
            <button type="submit">Create Post</button>
            </form>
          
          <p className="log">Already Have an account <a href='#'>LogIn</a></p>
    
          </div>
        </div>
        </div>
      );
      
    
}

export default CreatePost;