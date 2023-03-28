import { NavLink } from "react-router-dom";
import dots from "../../assets/images/posts/dots.svg";
import Nabvar from "../common/navbar";
const Feed = () => {
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
          <div className="blog-box">
            <div className="blog-box-top">
              <div className="blog-box-top-status">
                <div className="user-status">
                  <a className="link user-status-avatar" href="/profile">
                    <div className="user-avatar">
                      <div className="user-avatar-content">
                        <div className="image">
                          <img src={require("../../assets/images/form/viking.png")} />
                        </div>
                      </div>

                      <div className="user-avatar-progress"></div>

                      <div className="user-avatar-progress-border"></div>

                      <div className="user-avatar-badge">
                        <div className="user-avatar-badge-border"></div>
                        <div className="user-avatar-badge-content">
                          <p className="user-avatar-badge-text">12</p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div className="blog-box-status-content">
                    <p className="user-status-title">
                      <a className="link" href="/profile">Zien Muhammad</a> uploaded a
                      <span>video</span>
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
                Hi to everyone! Check out my latest video of the outlaws
                expansion for Court Striker GO. I'm really excited because my
                last video had almost 50.000 views.
              </p>

              <div className="iframe-wrap">
                <iframe
                  src="https://www.youtube.com/embed/rk-wIgg9fNk"
                  allowfullscreen=""
                ></iframe>
              </div>

              <div className="blog-box-status-content">
                <ul className="tag-list">
                  <li>
                    <NavLink className="tag-item" to="/feed">
                      Stream
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="tag-item" to="/feed">
                      StrikerGO
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="tag-item" to="/feed">
                      Outlaws
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="tag-item" to="/feed">
                      Gaming
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="blog-box-bottom">
            <div className="blog-options">
              <div className="blog-option-wrap">
                <div className="blog-option reaction-options-dropdown-trigger">
                  {/*Like react */}
                  <img src="" className="blog-option-icon icon-react" />
                  <p className="blog-option-text">React!</p>
                </div>
                <div className="blog-option">
                  {/*comment icon */}
                  <img src="" className="blog-option-icon icon-comment" />
                  <p className="blog-option-text">Comment</p>
                </div>
                <div className="blog-option">
                  {/*comment icon */}
                  <img src="" className="blog-option-icon icon-share" />
                  <p className="blog-option-text">Share</p>
                </div>
              </div>
            </div>
          </div>
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
