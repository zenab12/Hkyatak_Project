import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';

const  CreatePost = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [imageUrl, setImage] = useState('');
    const [videoUrl, setVideo] = useState('');
    const [tags,setTags]=useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let userName=JSON.parse(localStorage.getItem("userToken")).user.username
        ;
        const data = { title, body,imageUrl,videoUrl,tags,userName };

        if(data){
        const response = await axios.post('https://back-end-vercel-1ftq1wkfp-harity.vercel.app/posts', data);
        console.log(response.data);
        
        if(response.status == 201 || 200)
        {
            window.location.replace("/feed");
        }
    }
        
        
    };
    return (
        <div className="Sign Contact create-post">
        <div className="container">
          <div className="form">
          
          <h1>Create<span>Blog</span></h1>
          <p>I am here Dear to  listen to your secret ... </p>
          
          <form onSubmit={handleSubmit}>
            <div className='input-container'>
                <label>Title:</label>
                <input required type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div  className='input-container'>
                <label>Body:</label>
                <textarea  required value={body} onChange={(e) => setBody(e.target.value)} />
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
            
            <button type="submit">
            {/* <NavLink to="/feed" className="link navLink"> */}
            Create Post
            {/* </NavLink> */}
          </button>
            </form>
            
        </div>
        </div>
        </div>
      );
      
    
}

export default CreatePost;


  // {
    //   "title": "Metaverse",
    //   "body": "In science fiction, the metaverse is a hypothetical iteration of the Internet as a single, universal, and immersive virtual world that is facilitated by the use of virtual reality and augmented real…",
    //   "userId": 1,
    //   "imageUrl": "https://odindesignthemes.com/vikinger-dark/img/cover/04.jpg",
    //   "tags": [
    //     "Stream",
    //     " StrikerGO",
    //     "Outlaws",
    //     "Gaming"
    //   ],
    //   "id": 1
    // },
    // {
    //   "title": " Metaverse",
    //   "body": "In science fiction, the metaverse is a hypothetical iteration of the Internet as a single, universal, and immersive virtual world that is facilitated by the use of virtual reality and augmented real…",
    //   "videoUrl": "https://www.youtube.com/embed/rk-wIgg9fNk",
    //   "userId": "2",
    //   "tags": [
    //     "Stream",
    //     " StrikerGO",
    //     "Outlaws"
    //   ],
    //   "id": 2
    // },
    // {
    //   "title": "Secret",
    //   "body": "Sorry everyone, but from now on, I will only be able to edit and upload one design tutorial per month. This happens because I'm having a lot on my plate right now and recording and editing the tutorials requiere a lot of attention.\n\n",
    //   "imageUrl": "https://odindesignthemes.com/vikinger/img/cover/10.jpg",
    //   "videoUrl": "",
    //   "tags": "gaming,stream",
    //   "id": 4
    // },
    // {
    //   "title": "ADD post",
    //   "body": "Hello world",
    //   "imageUrl": "https://dw9to29mmj727.cloudfront.net/promo/2016/6225-SeriesHeaders_NARSHP_2000x800.jpg",
    //   "videoUrl": "",
    //   "tags": "Narotu , Cartoon",
    //   "id": 5
    // }