import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Nabvar from "../common/navbar";

import dots from "../../assets/images/posts/dots.svg";
import comment from "../../assets/images/posts/comment.svg";
import like from "../../assets/images/posts/like.svg";
import share from "../../assets/images/posts/share.svg";
import like2 from "../../assets/images/posts/like2.svg";
import like3 from "../../assets/images/posts/like3.svg";
import stream from "../../assets/images/posts/stream.svg";
import badges from "../../assets/images/posts/badges.svg";
import events from "../../assets/images/posts/events.svg";
import groups from "../../assets/images/posts/groups.svg";
import member from "../../assets/images/posts/member.svg";
import overview from "../../assets/images/posts/overview.svg";
import quests from "../../assets/images/posts/quests.svg";
import feed from "../../assets/images/posts/feed.svg";
import forum from "../../assets/images/posts/forum.svg";
import smile from "../../assets/images/posts/emoji.svg";

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
    console.log(tags);
  }, []);

  console.log(Tags);

  return (
    <>
      <Nabvar />
      <section className="Feed">
        <aside
          id="navigation-widget-small"
          className="navigation-widget navigation-widget-desktop closed sidebar left delayed"
        >
          <a className="user-avatar online" href="/profile">
            <div className="user-avatar-content hexagon image">
              <div
                className="image"
                style={{
                  background: `url(${require("../../assets/images/posts/sanaa.jpg")})`,
                }}
              ></div>
            </div>
            <div className="user-avatar-badge hexagon double">
              <div className="user-avatar-badge-border"></div>
              <div className="user-avatar-badge-content">
                <p className="user-avatar-badge-text">12</p>
              </div>
            </div>
          </a>

          <ul className="menu small">
            <li className="menu-item active">
              <a
                className="menu-item-link text-tooltip-tfr"
                href="/feed"
                dataTitle="Newsfeed"
              >
                <div className="menu-item-link-icon icon-newsfeed active">
                  <img src={feed} alt="" />
                </div>
                <div className="xm-tooltip">
                  <p className="xm-tooltip-text">Newsfeed</p>
                </div>
              </a>
            </li>
            <li className="menu-item">
              <a
                className="menu-item-link text-tooltip-tfr"
                href="/feed"
                dataTitle="Overview"
              >
                <div className="menu-item-link-icon icon-newsfeed">
                  <img src={overview} alt="" />
                </div>
                <div className="xm-tooltip">
                  <p className="xm-tooltip-text">Overview</p>
                </div>
              </a>
            </li>
            <li className="menu-item">
              <a
                className="menu-item-link text-tooltip-tfr"
                href="/feed"
                dataTitle="Groups"
              >
                <div className="menu-item-link-icon icon-newsfeed">
                  <img src={groups} alt="" />
                </div>
                <div className="xm-tooltip">
                  <p className="xm-tooltip-text">Groups</p>
                </div>
              </a>
            </li>
            <li className="menu-item">
              <a
                className="menu-item-link text-tooltip-tfr"
                href="/feed"
                dataTitle="Members"
              >
                <div className="menu-item-link-icon icon-newsfeed">
                  <img src={member} alt="" />
                </div>
                <div className="xm-tooltip">
                  <p className="xm-tooltip-text">Members</p>
                </div>
              </a>
            </li>

            <li className="menu-item">
              <a
                className="menu-item-link text-tooltip-tfr"
                href="/feed"
                dataTitle="Badges"
              >
                <div className="menu-item-link-icon icon-newsfeed">
                  <img src={badges} alt="" />
                </div>
                <div className="xm-tooltip">
                  <p className="xm-tooltip-text">Badges</p>
                </div>
              </a>
            </li>

            <li className="menu-item">
              <a
                className="menu-item-link text-tooltip-tfr"
                href="/feed"
                dataTitle="Streams"
              >
                <div className="menu-item-link-icon icon-newsfeed">
                  <img src={stream} alt="" />
                </div>
                <div className="xm-tooltip">
                  <p className="xm-tooltip-text">Streams</p>
                </div>
              </a>
            </li>

            <li className="menu-item">
              <a
                className="menu-item-link text-tooltip-tfr"
                href="/feed"
                dataTitle="Events"
              >
                <div className="menu-item-link-icon icon-newsfeed">
                  <img src={events} alt="" />
                </div>
                <div className="xm-tooltip">
                  <p className="xm-tooltip-text">Events</p>
                </div>
              </a>
            </li>

            <li className="menu-item">
              <a
                className="menu-item-link text-tooltip-tfr"
                href="/feed"
                dataTitle="Forums"
              >
                <div className="menu-item-link-icon icon-newsfeed">
                  <img src={forum} alt="" />
                </div>
                <div className="xm-tooltip">
                  <p className="xm-tooltip-text">Forums</p>
                </div>
              </a>
            </li>
          </ul>
        </aside>
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
            <div className="Grid-left-aside">
              <div className="profile-Completion">
                <ul>
                  <li className="image">59%</li>
                  <li className="content">
                    <h2 className="content-heading">profile completion</h2>
                    <p className="content-title">Noor Atia</p>
                    <p className="content-text">
                      Complete your profile by filling profile info fields,
                      completing quests & unlocking badges
                    </p>
                  </li>
                  <li className="statistics">
                    <ul>
                      <li>
                        <h3>15/20</h3>
                        <h4>Quests</h4>
                        <h5>COMPLETED</h5>
                        <img src={require("../../assets/images/posts/completedq-s.png")} alt="" />
                      </li>
                      <li>
                        <h3>15/30</h3>
                        <h4>Badges</h4>
                        <h5>UNLOCKED</h5>
                        <img src={require("../../assets/images/posts/unlocked-badge.png")} alt="" />
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="badges">
                <ul>
                  <li className="heading">
                    <h2>Featured Badges</h2>
                  </li>
                  <li className="image">
                    <img src={require("../../assets/images/posts/uexp-b.png")} alt="" />
                    <div className="tooltip">
                      <span>+</span> 20 EXP
                    </div>
                  </li>
                  <li className="content">
                    <h2 className="content-heading">Universe Explorer</h2>
                    <p className="content-text">
                      Joined and posted on 20 different groups
                    </p>
                  </li>
                  <li className="progress-container"></li>
                  <li>17/20</li>
                </ul>
              </div>

              <div className="members">
                <ul>
                  <li className="heading">
                    <h2> Members</h2>
                  </li>

                  <li className="content">
                    <div className="content-image-text">
                      <a className="image user-avatar online" href="/profile">
                        <div className="user-avatar-content hexagon image">
                          <div
                            className="image"
                            style={{
                              background: `url(${require("../../assets/images/posts/sanaa.jpg")})`,
                            }}
                          ></div>
                        </div>

                        <div className="user-avatar-badge hexagon double">
                          <div className="user-avatar-badge-border"></div>
                          <div className="user-avatar-badge-content">
                            <p className="user-avatar-badge-text">15</p>
                          </div>
                        </div>
                      </a>

                      <div className="text">
                        <h3>Zien Muhammad</h3>
                        <p>24.5K profile views</p>
                      </div>
                    </div>
                    <div className="content-icon">
                      <img src={smile} alt="" />
                    </div>
                  </li>
                  <li className="content">
                    <div className="content-image-text">
                      <a className="image user-avatar online" href="/profile">
                        <div className="user-avatar-content hexagon image">
                          <div
                            className="image"
                            style={{
                              background: `url(${require("../../assets/images/posts/sanaa.jpg")})`,
                            }}
                          ></div>
                        </div>

                        <div className="user-avatar-badge hexagon double">
                          <div className="user-avatar-badge-border"></div>
                          <div className="user-avatar-badge-content">
                            <p className="user-avatar-badge-text">15</p>
                          </div>
                        </div>
                      </a>

                      <div className="text">
                        <h3>Zien Muhammad</h3>
                        <p>24.5K profile views</p>
                      </div>
                    </div>
                    <div className="content-icon">
                    <img src={smile} alt="" />
                    </div>
                  </li>

                  <li className="content">
                    <div className="content-image-text">
                      <a className="image user-avatar online" href="/profile">
                        <div className="user-avatar-content hexagon image">
                          <div
                            className="image"
                            style={{
                              background: `url(${require("../../assets/images/posts/sanaa.jpg")})`,
                            }}
                          ></div>
                        </div>

                        <div className="user-avatar-badge hexagon double">
                          <div className="user-avatar-badge-border"></div>
                          <div className="user-avatar-badge-content">
                            <p className="user-avatar-badge-text">15</p>
                          </div>
                        </div>
                      </a>

                      <div className="text">
                        <h3>Zien Muhammad</h3>
                        <p>24.5K profile views</p>
                      </div>
                    </div>
                    <div className="content-icon">
                    <img src={smile} alt="" />
                    </div>
                  </li>

                  <li className="content">
                    <div className="content-image-text">
                      <a className="image user-avatar online" href="/profile">
                        <div className="user-avatar-content hexagon image">
                          <div
                            className="image"
                            style={{
                              background: `url(${require("../../assets/images/posts/sanaa.jpg")})`,
                            }}
                          ></div>
                        </div>

                        <div className="user-avatar-badge hexagon double">
                          <div className="user-avatar-badge-border"></div>
                          <div className="user-avatar-badge-content">
                            <p className="user-avatar-badge-text">15</p>
                          </div>
                        </div>
                      </a>

                      <div className="text">
                        <h3>Zien Muhammad</h3>
                        <p>24.5K profile views</p>
                      </div>
                    </div>
                    <div className="content-icon">
                    <img src={smile} alt="" />
                    </div>
                  </li>
                  <li className="content">
                    <div className="content-image-text">
                      <a className="image user-avatar online" href="/profile">
                        <div className="user-avatar-content hexagon image">
                          <div
                            className="image"
                            style={{
                              background: `url(${require("../../assets/images/posts/sanaa.jpg")})`,
                            }}
                          ></div>
                        </div>

                        <div className="user-avatar-badge hexagon double">
                          <div className="user-avatar-badge-border"></div>
                          <div className="user-avatar-badge-content">
                            <p className="user-avatar-badge-text">15</p>
                          </div>
                        </div>
                      </a>

                      <div className="text">
                        <h3>Zien Muhammad</h3>
                        <p>24.5K profile views</p>
                      </div>
                    </div>
                    <div className="content-icon">
                    <img src={smile} alt="" />
                    </div>
                  </li>
                </ul>
              </div>

              <div className="quests">
                <ul>
                  <li className="heading">
                    <h2>open quests</h2>
                  </li>
                  <li className="content">
                    <div className="image-text">
                      <img src={require("../../assets/images/posts/openq-s.png")} alt="" />
                      <div className="text">
                        <h3>Nothing to hide</h3>
                        <p>
                          You have completed all your profile information fields
                        </p>
                      </div>
                    </div>

                    <div className="progress-container"></div>
                  </li>
                  <li className="content">
                    <div className="image-text">
                    <img src={require("../../assets/images/posts/openq-s.png")} alt="" />
                      <div className="text">
                        <h3>Social King</h3>
                        <p>
                          You have linked at least 8 social networks to your
                          profile
                        </p>
                      </div>
                    </div>
                    <div className="progress-container"></div>
                  </li>
                  <li className="content">
                    <div className="image-text">
                    <img src={require("../../assets/images/posts/openq-s.png")} alt="" />
                      <div className="text">
                        <h3>  Buffed Profile</h3>
                        <p>
                       You have posted every day for at least 30 days
                  in a row
                        </p>
                      </div>
                    </div>
                    <div className="progress-container"></div>
                  </li>
                  
                  <li className="content">
                    <div className="image-text">
                    <img src={require("../../assets/images/posts/openq-s.png")} alt="" />
                      <div className="text">
                        <h3>  Hear the People</h3>
                        <p>
                        You have created and posted your first poll
                        </p>
                      </div>
                    </div>
                    <div className="progress-container"></div>
                  </li>
                  
                  <li className="content">
                    <div className="image-text">
                    <img src={require("../../assets/images/posts/openq-s.png")} alt="" />
                      <div className="text">
                        <h3> Store Manager</h3>
                        <p>
                        You have uploaded at least 10 items in your shop
                        </p>
                      </div>
                    </div>
                    <div className="progress-container"></div>
                  </li>  
                  
                  <li className="btn">
                   <button className="quests">
                   see all quests
                   </button>
                  </li>
                </ul>
              </div>
            </div>

<div className="blog-container">
            {Posts.map((post) => {
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
                                  background: `url(${
                                    localStorage.getItem("ProfileImg")
                                      ? localStorage.getItem("ProfileImg")
                                      : require("../../assets/images/posts/sanaa.jpg")
                                  })`,
                                }}
                              >
                                {/* <img src={require("../../assets/images/form/viking.png")} /> */}
                              </div>
                            </div>

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
                    <p className="blog-box-status-text">{post.body}</p>

                    <div className="iframe-wrap">
                      {post.videoUrl ? (
                        <iframe src={post.videoUrl}></iframe>
                      ) : (
                        <img src={post.imageUrl} />
                      )}
                    </div>

                    <div className="blog-box-status-content">
                      <ul className="tag-list">
                        {typeof post.tags != "string"
                          ? post.tags.map((tag, ind) => (
                              <li key={ind}>
                                <NavLink className="tag-item" to="/feed">
                                  {tag}
                                </NavLink>
                              </li>
                            ))
                          : post.tags.split(",").map((tag, ind) => (
                              <li key={ind}>
                                <NavLink className="tag-item" to="/feed">
                                  {tag}
                                </NavLink>
                              </li>
                            ))}
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
                          <img
                            src={like}
                            className="blog-option-icon icon-react"
                          />
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
              );
            })}
            </div>
            
            <div className="Grid-right-aside">
              <div className="overview">
              <h2>Profile views</h2>
              <h3>800</h3>
              <p>in the last month</p>
              
              </div>
              <div className="profile-Completion">
                <ul>
                  <li className="heading">
                  <h2>Reactions recieved</h2>
                  </li>
                  <li className="statistics">
                    <ul>
                      <li>
                      <img src={require("../../assets/images/posts/like.png")} alt="" />
                        <h3>12.500</h3>
                        <h5>Likes</h5>
                      </li>
                      <li className="center-line">
                      </li>
                      <li>
                                            <img src={require("../../assets/images/posts/love.png")} alt="" />
                        <h3>50.500</h3>
                        <h5>Love</h5>
                      </li>
                    </ul>
                    <ul>
                      <li>
                      <img src={require("../../assets/images/posts/dislike.png")} alt="" />
                        <h3>500</h3>
                        <h5>disLikes</h5>
                      </li>
                      <li className="center-line">
                      </li>
                      <li>
                      <img src={require("../../assets/images/posts/happy.png")} alt="" />
                        <h3>5.500</h3>
                        <h5>Happy</h5>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

            

              <div className="members">
                <ul>
                  <li className="heading">
                    <h2> Groups</h2>
                  </li>

                  <li className="content">
                    <div className="content-image-text">
                      <a className="image user-avatar online" href="/profile">
                        <div className="user-avatar-content hexagon image">
                          <div
                            className="image"
                            style={{
                              background: `url(${require("../../assets/images/posts/sanaa.jpg")})`,
                            }}
                          ></div>
                        </div>

                      </a>

                      <div className="text">
                        <h3>Dragon</h3>
                        <p>265 members</p>
                      </div>
                    </div>
                    <div className="content-icon">
                      <img src={groups} alt="" />
                    </div>
                  </li>
                  <li className="content">
                    <div className="content-image-text">
                      <a className="image user-avatar online" href="/profile">
                        <div className="user-avatar-content hexagon image">
                          <div
                            className="image"
                            style={{
                              background: `url(${require("../../assets/images/posts/sanaa.jpg")})`,
                            }}
                          ></div>
                        </div>

                      </a>

                      <div className="text">
                        <h3>Dragon</h3>
                        <p>265 members</p>
                      </div>
                    </div>
                    <div className="content-icon">
                      <img src={groups} alt="" />
                    </div>
                  </li>
                  <li className="content">
                    <div className="content-image-text">
                      <a className="image user-avatar online" href="/profile">
                        <div className="user-avatar-content hexagon image">
                          <div
                            className="image"
                            style={{
                              background: `url(${require("../../assets/images/posts/sanaa.jpg")})`,
                            }}
                          ></div>
                        </div>

                      </a>

                      <div className="text">
                        <h3>Dragon</h3>
                        <p>265 members</p>
                      </div>
                    </div>
                    <div className="content-icon">
                      <img src={groups} alt="" />
                    </div>
                  </li>
                  <li className="content">
                    <div className="content-image-text">
                      <a className="image user-avatar online" href="/profile">
                        <div className="user-avatar-content hexagon image">
                          <div
                            className="image"
                            style={{
                              background: `url(${require("../../assets/images/posts/sanaa.jpg")})`,
                            }}
                          ></div>
                        </div>

                      </a>

                      <div className="text">
                        <h3>Dragon</h3>
                        <p>265 members</p>
                      </div>
                    </div>
                    <div className="content-icon">
                      <img src={groups} alt="" />
                    </div>
                  </li>
                  <li className="content">
                    <div className="content-image-text">
                      <a className="image user-avatar online" href="/profile">
                        <div className="user-avatar-content hexagon image">
                          <div
                            className="image"
                            style={{
                              background: `url(${require("../../assets/images/posts/sanaa.jpg")})`,
                            }}
                          ></div>
                        </div>

                      </a>

                      <div className="text">
                        <h3>Dragon</h3>
                        <p>265 members</p>
                      </div>
                    </div>
                    <div className="content-icon">
                      <img src={groups} alt="" />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="badges">
                <ul>
                  <li className="heading">
                    <h2>Featured Badges</h2>
                  </li>
                  <li className="image">
                    <img src={require("../../assets/images/posts/uexp-b.png")} alt="" />
                    <div className="tooltip">
                      <span>+</span> 20 EXP
                    </div>
                  </li>
                  <li className="content">
                    <h2 className="content-heading">Universe Explorer</h2>
                    <p className="content-text">
                      Joined and posted on 20 different groups
                    </p>
                  </li>
                  <li className="progress-container"></li>
                  <li>17/20</li>
                </ul>
              </div>
              <div className="quests">
                <ul>
                  <li className="heading">
                    <h2>open quests</h2>
                  </li>
                  <li className="content">
                    <div className="image-text">
                      <img src={require("../../assets/images/posts/openq-s.png")} alt="" />
                      <div className="text">
                        <h3>Nothing to hide</h3>
                        <p>
                          You have completed all your profile information fields
                        </p>
                      </div>
                    </div>

                    <div className="progress-container"></div>
                  </li>
                  <li className="content">
                    <div className="image-text">
                    <img src={require("../../assets/images/posts/openq-s.png")} alt="" />
                      <div className="text">
                        <h3>Social King</h3>
                        <p>
                          You have linked at least 8 social networks to your
                          profile
                        </p>
                      </div>
                    </div>
                    <div className="progress-container"></div>
                  </li>
                  <li className="content">
                    <div className="image-text">
                    <img src={require("../../assets/images/posts/openq-s.png")} alt="" />
                      <div className="text">
                        <h3>  Buffed Profile</h3>
                        <p>
                       You have posted every day for at least 30 days
                  in a row
                        </p>
                      </div>
                    </div>
                    <div className="progress-container"></div>
                  </li>
                  
                  <li className="content">
                    <div className="image-text">
                    <img src={require("../../assets/images/posts/openq-s.png")} alt="" />
                      <div className="text">
                        <h3>  Hear the People</h3>
                        <p>
                        You have created and posted your first poll
                        </p>
                      </div>
                    </div>
                    <div className="progress-container"></div>
                  </li>
                  
                  <li className="content">
                    <div className="image-text">
                    <img src={require("../../assets/images/posts/openq-s.png")} alt="" />
                      <div className="text">
                        <h3> Store Manager</h3>
                        <p>
                        You have uploaded at least 10 items in your shop
                        </p>
                      </div>
                    </div>
                    <div className="progress-container"></div>
                  </li>  
                  
                  <li className="btn">
                   <button className="quests">
                   see all quests
                   </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
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
                <div className="reaction-option text-tooltip-tft" dataTitle="Like" style="position: relative;">
                  <!-- REACTION OPTION IMAGE -->
                  <img className="reaction-option-image" src="img/reaction/like.png" alt="reaction-like">
                  <!-- /REACTION OPTION IMAGE -->
                <div className="xm-tooltip" style="whiteSpace: nowrap; position: absolute; z-index: 99999; top: -28px; left: 50%; margin-left: -22px; opacity: 0; visibility: hidden; transform: translate(0px, 10px); transition: all 0.3s ease-in-out 0s;"><p className="xm-tooltip-text">Like</p></div></div>
                <!-- /REACTION OPTION -->

                <!-- REACTION OPTION -->
                <div className="reaction-option text-tooltip-tft" dataTitle="Love" style="position: relative;">
                  <!-- REACTION OPTION IMAGE -->
                  <img className="reaction-option-image" src="img/reaction/love.png" alt="reaction-love">
                  <!-- /REACTION OPTION IMAGE -->
                <div className="xm-tooltip" style="whiteSpace: nowrap; position: absolute; z-index: 99999; top: -28px; left: 50%; margin-left: -23.5px; opacity: 0; visibility: hidden; transform: translate(0px, 10px); transition: all 0.3s ease-in-out 0s;"><p className="xm-tooltip-text">Love</p></div></div>
                <!-- /REACTION OPTION -->

                <!-- REACTION OPTION -->
                <div className="reaction-option text-tooltip-tft" dataTitle="Dislike" style="position: relative;">
                  <!-- REACTION OPTION IMAGE -->
                  <img className="reaction-option-image" src="img/reaction/dislike.png" alt="reaction-dislike">
                  <!-- /REACTION OPTION IMAGE -->
                <div className="xm-tooltip" style="whiteSpace: nowrap; position: absolute; z-index: 99999; top: -28px; left: 50%; margin-left: -28px; opacity: 0; visibility: hidden; transform: translate(0px, 10px); transition: all 0.3s ease-in-out 0s;"><p className="xm-tooltip-text">Dislike</p></div></div>
                <!-- /REACTION OPTION -->

                <!-- REACTION OPTION -->
                <div className="reaction-option text-tooltip-tft" dataTitle="Happy" style="position: relative;">
                  <!-- REACTION OPTION IMAGE -->
                  <img className="reaction-option-image" src="img/reaction/happy.png" alt="reaction-happy">
                  <!-- /REACTION OPTION IMAGE -->
                <div className="xm-tooltip" style="whiteSpace: nowrap; position: absolute; z-index: 99999; top: -28px; left: 50%; margin-left: -27.5px; opacity: 0; visibility: hidden; transform: translate(0px, 10px); transition: all 0.3s ease-in-out 0s;"><p className="xm-tooltip-text">Happy</p></div></div>
                <!-- /REACTION OPTION -->

                <!-- REACTION OPTION -->
                <div className="reaction-option text-tooltip-tft" dataTitle="Funny" style="position: relative;">
                  <!-- REACTION OPTION IMAGE -->
                  <img className="reaction-option-image" src="img/reaction/funny.png" alt="reaction-funny">
                  <!-- /REACTION OPTION IMAGE -->
                <div className="xm-tooltip" style="whiteSpace: nowrap; position: absolute; z-index: 99999; top: -28px; left: 50%; margin-left: -27px; opacity: 0; visibility: hidden; transform: translate(0px, 10px); transition: all 0.3s ease-in-out 0s;"><p className="xm-tooltip-text">Funny</p></div></div>
                <!-- /REACTION OPTION -->

                <!-- REACTION OPTION -->
                <div className="reaction-option text-tooltip-tft" dataTitle="Wow" style="position: relative;">
                  <!-- REACTION OPTION IMAGE -->
                  <img className="reaction-option-image" src="img/reaction/wow.png" alt="reaction-wow">
                  <!-- /REACTION OPTION IMAGE -->
                <div className="xm-tooltip" style="whiteSpace: nowrap; position: absolute; z-index: 99999; top: -28px; left: 50%; margin-left: -24px; opacity: 0; visibility: hidden; transform: translate(0px, 10px); transition: all 0.3s ease-in-out 0s;"><p className="xm-tooltip-text">Wow</p></div></div>
                <!-- /REACTION OPTION -->

                <!-- REACTION OPTION -->
                <div className="reaction-option text-tooltip-tft" dataTitle="Angry" style="position: relative;">
                  <!-- REACTION OPTION IMAGE -->
                  <img className="reaction-option-image" src="img/reaction/angry.png" alt="reaction-angry">
                  <!-- /REACTION OPTION IMAGE -->
                <div className="xm-tooltip" style="whiteSpace: nowrap; position: absolute; z-index: 99999; top: -28px; left: 50%; margin-left: -26.5px; opacity: 0; visibility: hidden; transform: translate(0px, 10px); transition: all 0.3s ease-in-out 0s;"><p className="xm-tooltip-text">Angry</p></div></div>
                <!-- /REACTION OPTION -->

                <!-- REACTION OPTION -->
                <div className="reaction-option text-tooltip-tft" dataTitle="Sad" style="position: relative;">
                  <!-- REACTION OPTION IMAGE -->
                  <img className="reaction-option-image" src="img/reaction/sad.png" alt="reaction-sad">
                  <!-- /REACTION OPTION IMAGE -->
                <div className="xm-tooltip" style="whiteSpace: nowrap; position: absolute; z-index: 99999; top: -28px; left: 50%; margin-left: -21.5px; opacity: 0; visibility: hidden; transform: translate(0px, 10px); transition: all 0.3s ease-in-out 0s;"><p className="xm-tooltip-text">Sad</p></div></div>
                <!-- /REACTION OPTION -->
              </div>
              <!-- /REACTION OPTIONS --> */
}
