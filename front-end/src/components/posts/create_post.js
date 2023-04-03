import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import blog from "../../assets/images/posts/blog.svg"
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
        let userId = JSON.parse(localStorage.getItem("userToken")).user.id;
        let userImg = JSON.parse(localStorage.getItem("userToken")).user.imageUrl;
        const data = { title, body,imageUrl,videoUrl,tags,userName,userId,userImg };

        if(data){
        const response = await axios.post('http://localhost:3001/posts', data);
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
          <p>remember : I am here Dear to  listen to your secret ... </p>
          
          <form className='Sign Contact' onSubmit={handleSubmit}>
                <div className='input-container'>
                <label>Title:</label>
                <div className='form-group'>
                <input required type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 9L9 4M9 9L6.5 7M9 9L11.5 7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10.5861 19.1946C10.5203 18.9868 10.3274 18.8455 10.1094 18.8455H7.55474C7.33675 18.8455 7.14388 18.9868 7.07807 19.1946L6.65978 20.5154C6.59397 20.7233 6.4011 20.8645 6.18311 20.8645H4.72359C4.37391 20.8645 4.13223 20.5148 4.2559 20.1877L7.60741 11.3232C7.68095 11.1287 7.86717 11 8.0751 11H9.58987C9.7974 11 9.98336 11.1282 10.0572 11.3222L13.4308 20.1867C13.5553 20.5139 13.3136 20.8645 12.9635 20.8645H11.4811C11.2631 20.8645 11.0702 20.7233 11.0044 20.5154L10.5861 19.1946ZM7.79577 16.9252C7.75489 17.0541 7.85115 17.1856 7.98642 17.1856H9.66955C9.80482 17.1856 9.90108 17.0541 9.8602 16.9252L9.01863 14.2707C8.95964 14.0846 8.69633 14.0846 8.63734 14.2707L7.79577 16.9252Z" fill="#fff"></path> <path d="M18.1268 20.8645C18.0402 20.8645 17.9763 20.8529 17.9413 20.7736C17.8621 20.5943 17.6066 20.4922 17.4472 20.6064C17.0811 20.8688 16.6326 21 16.1016 21C15.3584 21 14.7409 20.7967 14.2491 20.3902C13.7628 19.9837 13.5196 19.4575 13.5196 18.8117C13.5196 18.0438 13.8147 17.4499 14.4048 17.0298C15.0005 16.6098 15.8557 16.3952 16.9705 16.3862H17.1754C17.4516 16.3862 17.6754 16.1623 17.6754 15.8862V15.7967C17.6754 15.467 17.6071 15.2344 17.4705 15.0989C17.3339 14.9634 17.1344 14.8957 16.8721 14.8957C16.4947 14.8957 16.2402 15.0146 16.1087 15.2523C15.9751 15.494 15.7794 15.7358 15.5032 15.7358H14.1835C13.9074 15.7358 13.6755 15.5083 13.7433 15.2406C13.8596 14.7814 14.1457 14.3887 14.6016 14.0623C15.2191 13.6197 15.9978 13.3984 16.9377 13.3984C17.9104 13.3984 18.6618 13.6084 19.1918 14.0285C19.7274 14.444 19.9951 15.0402 19.9951 15.8171V19.2656C20.0061 19.8979 19.9951 20.3651 19.9951 20.7493C19.9951 20.8129 19.9436 20.8645 19.88 20.8645H18.1268ZM16.618 19.4959C16.8748 19.4959 17.0934 19.453 17.2738 19.3672C17.389 19.3124 17.4853 19.251 17.5626 19.1833C17.6435 19.1124 17.6754 19.0042 17.6754 18.8966V18.0379C17.6754 17.7618 17.4516 17.5379 17.1754 17.5379H17.118C16.7246 17.5379 16.4131 17.6418 16.1836 17.8496C15.9595 18.0574 15.8475 18.3351 15.8475 18.6829C15.8475 19.2249 16.1043 19.4959 16.618 19.4959Z" fill="#fff"></path> </g></svg>
                </div>
            </div>
            <div  className='input-container'>
                <label>Body:</label>
                <div className='form-group'>
                <textarea  required value={body} onChange={(e) => setBody(e.target.value)} />
                </div>
            </div>
            
            <div className='input-container'>
                <label>imageUrl:</label>
                <div className='form-group'>

                <input type="url" value={imageUrl} onChange={(e) => setImage(e.target.value)} />
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.4" d="M22.0206 16.8198L18.8906 9.49978C18.3206 8.15978 17.4706 7.39978 16.5006 7.34978C15.5406 7.29978 14.6106 7.96978 13.9006 9.24978L12.0006 12.6598C11.6006 13.3798 11.0306 13.8098 10.4106 13.8598C9.78063 13.9198 9.15063 13.5898 8.64063 12.9398L8.42063 12.6598C7.71063 11.7698 6.83063 11.3398 5.93063 11.4298C5.03063 11.5198 4.26063 12.1398 3.75063 13.1498L2.02063 16.5998C1.40063 17.8498 1.46063 19.2998 2.19063 20.4798C2.92063 21.6598 4.19063 22.3698 5.58063 22.3698H18.3406C19.6806 22.3698 20.9306 21.6998 21.6706 20.5798C22.4306 19.4598 22.5506 18.0498 22.0206 16.8198Z" fill="#fff"></path> <path d="M6.96984 8.38012C8.83657 8.38012 10.3498 6.86684 10.3498 5.00012C10.3498 3.13339 8.83657 1.62012 6.96984 1.62012C5.10312 1.62012 3.58984 3.13339 3.58984 5.00012C3.58984 6.86684 5.10312 8.38012 6.96984 8.38012Z" fill="#fff"></path> </g></svg>
                </div>
            </div>
            <div className='input-container'>
                <label>videoUrl:</label>
                <div className='form-group'>

                <input type="url" value={videoUrl} onChange={(e) => setVideo(e.target.value)} />
<svg fill="#fff" width="64px" height="64px" viewBox="0 -5 32 32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M31.507,20.862 C31.351,20.954 31.176,21.000 31.000,21.000 C30.833,21.000 30.665,20.958 30.515,20.874 L23.000,16.699 L23.000,20.000 C23.000,21.103 22.102,22.000 21.000,22.000 L2.000,22.000 C0.897,22.000 0.000,21.103 0.000,20.000 L0.000,2.000 C0.000,0.897 0.897,-0.000 2.000,-0.000 L21.000,-0.000 C22.102,-0.000 23.000,0.897 23.000,2.000 L23.000,5.301 L30.515,1.126 C30.822,0.953 31.201,0.958 31.507,1.138 C31.813,1.318 32.000,1.646 32.000,2.000 L32.000,20.000 C32.000,20.354 31.813,20.682 31.507,20.862 ZM30.000,3.700 L22.485,7.874 C22.470,7.883 22.453,7.882 22.437,7.889 C22.376,7.919 22.311,7.933 22.245,7.951 C22.180,7.967 22.117,7.986 22.051,7.990 C22.033,7.991 22.018,8.000 22.000,8.000 C21.954,8.000 21.916,7.980 21.872,7.974 C21.802,7.965 21.736,7.957 21.670,7.933 C21.609,7.912 21.556,7.880 21.500,7.847 C21.446,7.815 21.393,7.785 21.345,7.742 C21.292,7.696 21.252,7.641 21.210,7.584 C21.184,7.549 21.148,7.525 21.126,7.486 C21.117,7.470 21.118,7.452 21.110,7.436 C21.081,7.376 21.067,7.312 21.050,7.246 C21.033,7.181 21.014,7.118 21.010,7.051 C21.009,7.033 21.000,7.018 21.000,7.000 L21.000,2.000 L2.000,2.000 L2.000,20.000 L21.000,20.000 L21.000,15.000 C21.000,14.982 21.009,14.967 21.010,14.949 C21.014,14.883 21.033,14.820 21.050,14.754 C21.067,14.688 21.081,14.624 21.110,14.564 C21.118,14.548 21.117,14.530 21.126,14.514 C21.148,14.475 21.184,14.451 21.210,14.416 C21.252,14.359 21.292,14.305 21.345,14.258 C21.393,14.215 21.445,14.185 21.500,14.153 C21.555,14.120 21.609,14.088 21.670,14.067 C21.736,14.043 21.802,14.035 21.871,14.026 C21.915,14.020 21.954,14.000 22.000,14.000 C22.018,14.000 22.033,14.009 22.051,14.010 C22.117,14.014 22.180,14.033 22.245,14.049 C22.311,14.067 22.376,14.081 22.437,14.110 C22.452,14.118 22.470,14.117 22.485,14.126 L30.000,18.300 L30.000,3.700 Z"></path> </g></svg>                </div>
            </div>
            <div className='input-container'>
                <label>tags:</label>
                <div className='form-group'>

                <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} />
                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#fff" d="M10.2579783,2.00646794 C10.4381945,2.00646794 10.6109777,2.07617271 10.7380774,2.20015073 L19.7531833,10.998129 C19.9396487,11.2187892 20.0259514,11.4895309 19.9931885,11.7726484 C19.9660869,12.0068439 19.8694718,12.221741 19.6711911,12.4458242 L14.2287007,17.6818114 C14.014199,17.8852817 13.7437457,18 13.4465592,18 C13.1711732,18 12.939837,17.90245 12.6533596,17.6818114 L12.4833001,17.5471465 L13.4243922,16.6050097 L17.8611492,12.3395885 C18.0286813,12.1459284 18.1124474,11.9138855 18.1124474,11.6434597 C18.1124474,11.373034 18.0204901,11.1554326 17.8365755,10.9906557 L9.62658497,3.01503224 C9.23058093,2.64479482 8.82205848,2.38384332 8.40101762,2.23217773 C8.10381231,2.12511968 7.83714915,2.06883797 7.67707624,2.03925146 L7.54597231,2.01595878 C7.51125433,2.00948302 7.51031342,2.00742346 7.55265559,2.00676994 L10.2579783,2.00646794 Z M6.81654766,2 C6.9967639,2 7.16954708,2.06970455 7.29664674,2.19368258 L16.3117527,10.9916608 C16.4982181,11.2123211 16.5845208,11.4830627 16.5517579,11.7661803 C16.5246563,12.0003757 16.4280412,12.2152729 16.2297605,12.439356 L10.78727,17.6753432 C10.5727684,17.8788135 10.302315,17.9935318 10.0051286,17.9935318 C9.72974264,17.9935318 9.47346105,17.8962597 9.18698361,17.6756211 L0.204617964,9.16550767 C0.0740980033,9.04184986 0.000507565033,8.87232643 0.000507565033,8.69531758 L0.000803337996,3.35893737 C-0.00937532279,3.02485784 0.0769825179,2.72037321 0.270699622,2.46921136 C0.500257217,2.17158091 0.848238294,2.02412739 1.29861129,2 L6.81654766,2 Z M4.48982737,4.64789569 C3.61009965,4.64789569 2.89693942,5.34399482 2.89693942,6.20267661 C2.89693942,7.0613584 3.61009965,7.75745752 4.48982737,7.75745752 C5.3695551,7.75745752 6.08271533,7.0613584 6.08271533,6.20267661 C6.08271533,5.34399482 5.3695551,4.64789569 4.48982737,4.64789569 Z"></path> </g></svg>
                </div>
            </div>
      <button type="submit" >Save</button>
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