import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditPost = (props) => {
const handleClick = () => {
    toast.success("Your Post updated successfully", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 2000,
    });
    };
  const [title, setTitle] = useState(props.post.title);
  const [body, setBody] = useState(props.post.body);
  const [imageUrl, setImage] = useState(props.post.imageUrl);
  const [videoUrl, setVideo] = useState(props.post.videoUrl);
  const [tags,setTags]=useState(props.post.tags);


  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedPost = {
      id: props.post.id,
      userName:props.post.userName,
      userId:props.post.userId,
      title: title,
      body: body,
      imageUrl:imageUrl,
      videoUrl:videoUrl,
      tags:tags
    };
    axios.put(`http://localhost:3001/posts/${props.post.id}`, updatedPost)
      .then(response => {
        props.onEdit(response.data);
    //    window.location.reload();
    toast.success("Your Post updated successfully", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 2000,
    });
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className='Sign Contact'>
    <form className='Sign Contact' onSubmit={handleSubmit}>
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
      <button type="submit" >Save</button>
    </form>
    </div>
  );
};

export default EditPost;