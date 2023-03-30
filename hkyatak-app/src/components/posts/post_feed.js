import { NavLink } from "react-router-dom";
import Nabvar from "../common/navbar";
import dots from "../../assets/images/posts/dots.svg";
import comment from "../../assets/images/posts/comment.svg";
import like from "../../assets/images/posts/like.svg";
import share from "../../assets/images/posts/share.svg";
import like2 from "../../assets/images/posts/like2.svg";
import like3 from "../../assets/images/posts/like3.svg";
import { useEffect, useState } from "react";
import axios from "axios";

const Feed = () => {
  const [Posts, setPost] = useState([]);
  const [Tags, setTags] = useState([]);
  let blogs = [];
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
    console.log(tags)
  }, []);
  
  console.log(Tags);

  return (
    <section className="Feed">
      <Nabvar />
      <div className="container">
        <div className="section-banner">
          <img
            className="section-banner-icon"
            src={require("../../assets/images/newsfeed-icon.png")}
            alt="newsfeed-icon"
          />
          <p className="section-banner-title">Newsfeed</p>
          <p className="section-banner-text">
            Check what your friends have been up to!
          </p>
        </div>

        <div className="Grid">
          {Posts.map((post) =>  {
          return (
            <div className="blog-box" key={post.id}>
              <div className="blog-box-top">
                <div className="blog-box-top-status">
                  <div className="user-status">
                    <a className="link user-status-avatar" href="/profile">
                      <div className="user-avatar">
                        <div className="user-avatar-content hexagon image">
                          <div
                            className="image"
                            style={{
                              // require("../../assets/images/posts/sanaa.jpg")`,"
                              //localStorage.getItem("ProfileImg")
                              //JSON.parse(localStorage.getItem("userToken"))?JSON.parse(localStorage.getItem("userToken")).user.imageUrl:require("../../assets/images/posts/sanaa.jpg")
                              "background": `url(${localStorage.getItem("ProfileImg")?localStorage.getItem("ProfileImg"):require("../../assets/images/posts/sanaa.jpg")})`
                            }}
                          >
                            {/* <img src={require("../../assets/images/form/viking.png")} /> */}
                          </div>
                        </div>

                        <div className="user-avatar-progress"></div>

                        <div className="user-avatar-progress-border"></div>

                        <div className="user-avatar-badge hexagon double">
                          <div className="user-avatar-badge-border"></div>
                          <div className="user-avatar-badge-content">
                            <p className="user-avatar-badge-text">12</p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <div className="blog-box-status-content">
                      <p className="user-status-title">
                        <a className="link" href="/profile">
                          Sanaa Abdelhamied
                        </a>
                        {post.title}
                        {/* uploaded a
                       <span>video</span> */}
                      </p>
                      <p className="user-status-text">2 minutes ago</p>
                    </div>
                  </div>
                </div>

                <div className="blog-box-top-settings">
                  <div className="blog-box-top-settings-icon">
                    <img src={dots} />
                  </div>

                  <ul className="dropdown blog-box-top-settings-dropdown">
                    <li className="dropdown-link">Edit Post</li>
                    <li className="dropdown-link">Delete Post</li>
                  </ul>
                </div>
              </div>

              <div className="blog-box-mid">
                <p className="blog-box-status-text">
                  {post.body}
                </p>

                <div className="iframe-wrap">
                  {post.videoUrl ? (
                    <iframe src={post.videoUrl}></iframe>
                  ) : (
                    <img src={post.imageUrl} />
                  )}
                </div>

                <div className="blog-box-status-content">
                  <ul className="tag-list">
                    {
                    typeof(post.tags) != "string"?
                    post.tags.map((tag,ind) => (
                      <li key={ind}>
                        <NavLink className="tag-item" to="/feed">
                          {tag}
                        </NavLink>
                      </li>)):
                       post.tags.split(",").map((tag,ind) => (
                        <li  key={ind}>
                          <NavLink className="tag-item" to="/feed">
                            {tag}
                          </NavLink>
                        </li>))                      
                      }
                  </ul>
                </div>
              </div>
              <div className="blog-box-bottom">
                <div className="blog-statistics">
                  <ul className="blog-statistics-wrap">
                    <li className="likes">
                      <ul>
                        <li className="like">
                          <img
                            src={require("../../assets/images/posts/like.png")}
                          />
                        </li>
                        <li className="love">
                          <img
                            src={require("../../assets/images/posts/love.png")}
                          />
                        </li>
                        <li>20</li>
                      </ul>
                    </li>

                    <li className="comments_share">
                      <ul>
                        <li>
                          <span>2</span>Comments
                        </li>
                        <li>
                          <span>0</span>Shares
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="blog-options">
                  <ul className="blog-option-wrap">
                    <li className="blog-option reaction-options-dropdown-trigger">
                      {/*Like react */}
                      <img src={like} className="blog-option-icon icon-react" />
                      <p className="blog-option-text">React!</p>
                    </li>
                    <li className="blog-option">
                      {/*comment icon */}
                      <img
                        src={comment}
                        className="blog-option-icon icon-comment"
                      />
                      <p className="blog-option-text">Comment</p>
                    </li>
                    <li className="blog-option">
                      {/*comment icon */}
                      <img
                        src={share}
                        className="blog-option-icon icon-share"
                      />
                      <p className="blog-option-text">Share</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )})}
          
        </div>
      </div>
    </section>
  );
};

export default Feed;

{
  /* <!-- CONTENT ACTIONS -->
              <div className="content-actions">
                <!-- CONTENT ACTION -->
                <div className="content-action">
                  <!-- META LINE -->
                  <div className="meta-line">
                    <!-- META LINE LIST -->
                    <div className="meta-line-list reaction-item-list">
                      <!-- REACTION ITEM -->
                      <div className="reaction-item" style="position: relative;">
                        <!-- REACTION IMAGE -->
                        <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/love.png" alt="reaction-love">
                        <!-- /REACTION IMAGE -->
            
                        <!-- SIMPLE DROPDOWN -->
                        <div className="simple-dropdown padded reaction-item-dropdown" style="position: absolute; z-index: 9999; bottom: 38px; left: -16px; opacity: 0; visibility: hidden; transform: translate(0px, 20px); transition: transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s;">
                          <!-- SIMPLE DROPDOWN TEXT -->
                          <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/love.png" alt="reaction-love"> <span className="bold">Love</span></p>
                          <!-- /SIMPLE DROPDOWN TEXT -->
                        
                          <!-- SIMPLE DROPDOWN TEXT -->
                          <p className="simple-dropdown-text">Matt Parker</p>
                          <!-- /SIMPLE DROPDOWN TEXT -->

                          <!-- SIMPLE DROPDOWN TEXT -->
                          <p className="simple-dropdown-text">Destroy Dex</p>
                          <!-- /SIMPLE DROPDOWN TEXT -->

                          <!-- SIMPLE DROPDOWN TEXT -->
                          <p className="simple-dropdown-text">The Green Goo</p>
                          <!-- /SIMPLE DROPDOWN TEXT -->
                        </div>
                        <!-- /SIMPLE DROPDOWN -->
                      </div>
                      <!-- /REACTION ITEM -->

                      <!-- REACTION ITEM -->
                      <div className="reaction-item" style="position: relative;">
                        <!-- REACTION IMAGE -->
                        <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/happy.png" alt="reaction-happy">
                        <!-- /REACTION IMAGE -->
            
                        <!-- SIMPLE DROPDOWN -->
                        <div className="simple-dropdown padded reaction-item-dropdown" style="position: absolute; z-index: 9999; bottom: 38px; left: -16px; opacity: 0; visibility: hidden; transform: translate(0px, 20px); transition: transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s;">
                          <!-- SIMPLE DROPDOWN TEXT -->
                          <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/happy.png" alt="reaction-happy"> <span className="bold">Happy</span></p>
                          <!-- /SIMPLE DROPDOWN TEXT -->
                        
                          <!-- SIMPLE DROPDOWN TEXT -->
                          <p className="simple-dropdown-text">Sandra Strange</p>
                          <!-- /SIMPLE DROPDOWN TEXT -->

                          <!-- SIMPLE DROPDOWN TEXT -->
                          <p className="simple-dropdown-text">Jane Rodgers</p>
                          <!-- /SIMPLE DROPDOWN TEXT -->
                        </div>
                        <!-- /SIMPLE DROPDOWN -->
                      </div>
                      <!-- /REACTION ITEM -->

                      <!-- REACTION ITEM -->
                      <div className="reaction-item" style="position: relative;">
                        <!-- REACTION IMAGE -->
                        <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/like.png" alt="reaction-like">
                        <!-- /REACTION IMAGE -->
            
                        <!-- SIMPLE DROPDOWN -->
                        <div className="simple-dropdown padded reaction-item-dropdown" style="position: absolute; z-index: 9999; bottom: 38px; left: -16px; opacity: 0; visibility: hidden; transform: translate(0px, 20px); transition: transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s;">
                          <!-- SIMPLE DROPDOWN TEXT -->
                          <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/like.png" alt="reaction-like"> <span className="bold">Like</span></p>
                          <!-- /SIMPLE DROPDOWN TEXT -->
                        
                          <!-- SIMPLE DROPDOWN TEXT -->
                          <p className="simple-dropdown-text">Neko Bebop</p>
                          <!-- /SIMPLE DROPDOWN TEXT -->

                          <!-- SIMPLE DROPDOWN TEXT -->
                          <p className="simple-dropdown-text">Nick Grissom</p>
                          <!-- /SIMPLE DROPDOWN TEXT -->

                          <!-- SIMPLE DROPDOWN TEXT -->
                          <p className="simple-dropdown-text">Sarah Diamond</p>
                          <!-- /SIMPLE DROPDOWN TEXT -->

                          <!-- SIMPLE DROPDOWN TEXT -->
                          <p className="simple-dropdown-text">Jett Spiegel</p>
                          <!-- /SIMPLE DROPDOWN TEXT -->

                          <!-- SIMPLE DROPDOWN TEXT -->
                          <p className="simple-dropdown-text">Marcus Jhonson</p>
                          <!-- /SIMPLE DROPDOWN TEXT -->

                          <!-- SIMPLE DROPDOWN TEXT -->
                          <p className="simple-dropdown-text"><span className="bold">and 6 more...</span></p>
                          <!-- /SIMPLE DROPDOWN TEXT -->
                        </div>
                        <!-- /SIMPLE DROPDOWN -->
                      </div>
                      <!-- /REACTION ITEM -->
                    </div>
                    <!-- /META LINE LIST -->
            
                    <!-- META LINE TEXT -->
                    <p className="meta-line-text">16</p>
                    <!-- /META LINE TEXT -->
                  </div>
                  <!-- /META LINE -->
            
                  <!-- META LINE -->
                  <div className="meta-line">
                    <!-- META LINE LIST -->
                    <div className="meta-line-list user-avatar-list">
                      <!-- USER AVATAR -->
                      <div className="user-avatar micro no-stats">
                        <!-- USER AVATAR BORDER -->
                        <div className="user-avatar-border">
                          <!-- HEXAGON -->
                          <div className="hexagon-22-24" style="width: 22px; height: 24px; position: relative;"><canvas width="22" height="24" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                          <!-- /HEXAGON -->
                        </div>
                        <!-- /USER AVATAR BORDER -->
                    
                        <!-- USER AVATAR CONTENT -->
                        <div className="user-avatar-content">
                          <!-- HEXAGON -->
                          <div className="hexagon-image-18-20" data-src="img/avatar/07.jpg" style="width: 18px; height: 20px; position: relative;"><canvas width="18" height="20" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                          <!-- /HEXAGON -->
                        </div>
                        <!-- /USER AVATAR CONTENT -->
                      </div>
                      <!-- /USER AVATAR -->
            
                      <!-- USER AVATAR -->
                      <div className="user-avatar micro no-stats">
                        <!-- USER AVATAR BORDER -->
                        <div className="user-avatar-border">
                          <!-- HEXAGON -->
                          <div className="hexagon-22-24" style="width: 22px; height: 24px; position: relative;"><canvas width="22" height="24" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                          <!-- /HEXAGON -->
                        </div>
                        <!-- /USER AVATAR BORDER -->
                    
                        <!-- USER AVATAR CONTENT -->
                        <div className="user-avatar-content">
                          <!-- HEXAGON -->
                          <div className="hexagon-image-18-20" data-src="img/avatar/13.jpg" style="width: 18px; height: 20px; position: relative;"><canvas width="18" height="20" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                          <!-- /HEXAGON -->
                        </div>
                        <!-- /USER AVATAR CONTENT -->
                      </div>
                      <!-- /USER AVATAR -->
            
                      <!-- USER AVATAR -->
                      <div className="user-avatar micro no-stats">
                        <!-- USER AVATAR BORDER -->
                        <div className="user-avatar-border">
                          <!-- HEXAGON -->
                          <div className="hexagon-22-24" style="width: 22px; height: 24px; position: relative;"><canvas width="22" height="24" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                          <!-- /HEXAGON -->
                        </div>
                        <!-- /USER AVATAR BORDER -->
                    
                        <!-- USER AVATAR CONTENT -->
                        <div className="user-avatar-content">
                          <!-- HEXAGON -->
                          <div className="hexagon-image-18-20" data-src="img/avatar/22.jpg" style="width: 18px; height: 20px; position: relative;"><canvas width="18" height="20" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                          <!-- /HEXAGON -->
                        </div>
                        <!-- /USER AVATAR CONTENT -->
                      </div>
                      <!-- /USER AVATAR -->
            
                      <!-- USER AVATAR -->
                      <div className="user-avatar micro no-stats">
                        <!-- USER AVATAR BORDER -->
                        <div className="user-avatar-border">
                          <!-- HEXAGON -->
                          <div className="hexagon-22-24" style="width: 22px; height: 24px; position: relative;"><canvas width="22" height="24" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                          <!-- /HEXAGON -->
                        </div>
                        <!-- /USER AVATAR BORDER -->
                    
                        <!-- USER AVATAR CONTENT -->
                        <div className="user-avatar-content">
                          <!-- HEXAGON -->
                          <div className="hexagon-image-18-20" data-src="img/avatar/10.jpg" style="width: 18px; height: 20px; position: relative;"><canvas width="18" height="20" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                          <!-- /HEXAGON -->
                        </div>
                        <!-- /USER AVATAR CONTENT -->
                      </div>
                      <!-- /USER AVATAR -->
            
                      <!-- USER AVATAR -->
                      <div className="user-avatar micro no-stats">
                        <!-- USER AVATAR BORDER -->
                        <div className="user-avatar-border">
                          <!-- HEXAGON -->
                          <div className="hexagon-22-24" style="width: 22px; height: 24px; position: relative;"><canvas width="22" height="24" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                          <!-- /HEXAGON -->
                        </div>
                        <!-- /USER AVATAR BORDER -->
                    
                        <!-- USER AVATAR CONTENT -->
                        <div className="user-avatar-content">
                          <!-- HEXAGON -->
                          <div className="hexagon-image-18-20" data-src="img/avatar/08.jpg" style="width: 18px; height: 20px; position: relative;"><canvas width="18" height="20" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                          <!-- /HEXAGON -->
                        </div>
                        <!-- /USER AVATAR CONTENT -->
                      </div>
                      <!-- /USER AVATAR -->
                    </div>
                    <!-- /META LINE LIST -->
            
                    <!-- META LINE TEXT -->
                    <p className="meta-line-text">19 Participants</p>
                    <!-- /META LINE TEXT -->
                  </div>
                  <!-- /META LINE -->
                </div>
                <!-- /CONTENT ACTION -->
            
                <!-- CONTENT ACTION -->
                <div className="content-action">
                  <!-- META LINE -->
                  <div className="meta-line">
                    <!-- META LINE LINK -->
                    <p className="meta-line-link">2 Comments</p>
                    <!-- /META LINE LINK -->
                  </div>
                  <!-- /META LINE -->
            
                  <!-- META LINE -->
                  <div className="meta-line">
                    <!-- META LINE TEXT -->
                    <p className="meta-line-text">0 Shares</p>
                    <!-- /META LINE TEXT -->
                  </div>
                  <!-- /META LINE -->
                </div>
                <!-- /CONTENT ACTION -->
              </div>
              <!-- /CONTENT ACTIONS --> */
}
{
  /*               
              <!-- REACTION OPTIONS -->
              <div className="reaction-options reaction-options-dropdown" style="position: absolute; z-index: 9999; bottom: 54px; left: -16px; opacity: 0; visibility: hidden; transform: translate(0px, 20px); transition: transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s;">
                <!-- REACTION OPTION -->
                <div className="reaction-option text-tooltip-tft" data-title="Like" style="position: relative;">
                  <!-- REACTION OPTION IMAGE -->
                  <img className="reaction-option-image" src="img/reaction/like.png" alt="reaction-like">
                  <!-- /REACTION OPTION IMAGE -->
                <div className="xm-tooltip" style="white-space: nowrap; position: absolute; z-index: 99999; top: -28px; left: 50%; margin-left: -22px; opacity: 0; visibility: hidden; transform: translate(0px, 10px); transition: all 0.3s ease-in-out 0s;"><p className="xm-tooltip-text">Like</p></div></div>
                <!-- /REACTION OPTION -->

                <!-- REACTION OPTION -->
                <div className="reaction-option text-tooltip-tft" data-title="Love" style="position: relative;">
                  <!-- REACTION OPTION IMAGE -->
                  <img className="reaction-option-image" src="img/reaction/love.png" alt="reaction-love">
                  <!-- /REACTION OPTION IMAGE -->
                <div className="xm-tooltip" style="white-space: nowrap; position: absolute; z-index: 99999; top: -28px; left: 50%; margin-left: -23.5px; opacity: 0; visibility: hidden; transform: translate(0px, 10px); transition: all 0.3s ease-in-out 0s;"><p className="xm-tooltip-text">Love</p></div></div>
                <!-- /REACTION OPTION -->

                <!-- REACTION OPTION -->
                <div className="reaction-option text-tooltip-tft" data-title="Dislike" style="position: relative;">
                  <!-- REACTION OPTION IMAGE -->
                  <img className="reaction-option-image" src="img/reaction/dislike.png" alt="reaction-dislike">
                  <!-- /REACTION OPTION IMAGE -->
                <div className="xm-tooltip" style="white-space: nowrap; position: absolute; z-index: 99999; top: -28px; left: 50%; margin-left: -28px; opacity: 0; visibility: hidden; transform: translate(0px, 10px); transition: all 0.3s ease-in-out 0s;"><p className="xm-tooltip-text">Dislike</p></div></div>
                <!-- /REACTION OPTION -->

                <!-- REACTION OPTION -->
                <div className="reaction-option text-tooltip-tft" data-title="Happy" style="position: relative;">
                  <!-- REACTION OPTION IMAGE -->
                  <img className="reaction-option-image" src="img/reaction/happy.png" alt="reaction-happy">
                  <!-- /REACTION OPTION IMAGE -->
                <div className="xm-tooltip" style="white-space: nowrap; position: absolute; z-index: 99999; top: -28px; left: 50%; margin-left: -27.5px; opacity: 0; visibility: hidden; transform: translate(0px, 10px); transition: all 0.3s ease-in-out 0s;"><p className="xm-tooltip-text">Happy</p></div></div>
                <!-- /REACTION OPTION -->

                <!-- REACTION OPTION -->
                <div className="reaction-option text-tooltip-tft" data-title="Funny" style="position: relative;">
                  <!-- REACTION OPTION IMAGE -->
                  <img className="reaction-option-image" src="img/reaction/funny.png" alt="reaction-funny">
                  <!-- /REACTION OPTION IMAGE -->
                <div className="xm-tooltip" style="white-space: nowrap; position: absolute; z-index: 99999; top: -28px; left: 50%; margin-left: -27px; opacity: 0; visibility: hidden; transform: translate(0px, 10px); transition: all 0.3s ease-in-out 0s;"><p className="xm-tooltip-text">Funny</p></div></div>
                <!-- /REACTION OPTION -->

                <!-- REACTION OPTION -->
                <div className="reaction-option text-tooltip-tft" data-title="Wow" style="position: relative;">
                  <!-- REACTION OPTION IMAGE -->
                  <img className="reaction-option-image" src="img/reaction/wow.png" alt="reaction-wow">
                  <!-- /REACTION OPTION IMAGE -->
                <div className="xm-tooltip" style="white-space: nowrap; position: absolute; z-index: 99999; top: -28px; left: 50%; margin-left: -24px; opacity: 0; visibility: hidden; transform: translate(0px, 10px); transition: all 0.3s ease-in-out 0s;"><p className="xm-tooltip-text">Wow</p></div></div>
                <!-- /REACTION OPTION -->

                <!-- REACTION OPTION -->
                <div className="reaction-option text-tooltip-tft" data-title="Angry" style="position: relative;">
                  <!-- REACTION OPTION IMAGE -->
                  <img className="reaction-option-image" src="img/reaction/angry.png" alt="reaction-angry">
                  <!-- /REACTION OPTION IMAGE -->
                <div className="xm-tooltip" style="white-space: nowrap; position: absolute; z-index: 99999; top: -28px; left: 50%; margin-left: -26.5px; opacity: 0; visibility: hidden; transform: translate(0px, 10px); transition: all 0.3s ease-in-out 0s;"><p className="xm-tooltip-text">Angry</p></div></div>
                <!-- /REACTION OPTION -->

                <!-- REACTION OPTION -->
                <div className="reaction-option text-tooltip-tft" data-title="Sad" style="position: relative;">
                  <!-- REACTION OPTION IMAGE -->
                  <img className="reaction-option-image" src="img/reaction/sad.png" alt="reaction-sad">
                  <!-- /REACTION OPTION IMAGE -->
                <div className="xm-tooltip" style="white-space: nowrap; position: absolute; z-index: 99999; top: -28px; left: 50%; margin-left: -21.5px; opacity: 0; visibility: hidden; transform: translate(0px, 10px); transition: all 0.3s ease-in-out 0s;"><p className="xm-tooltip-text">Sad</p></div></div>
                <!-- /REACTION OPTION -->
              </div>
              <!-- /REACTION OPTIONS --> */
}
