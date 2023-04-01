import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Nabvar from "../common/navbar";

import dots from "../../assets/images/posts/dots.svg";
import comment from "../../assets/images/posts/comment.svg";
import like from "../../assets/images/posts/like.svg";
import share from "../../assets/images/posts/share.svg";
import stream from "../../assets/images/posts/stream.svg";
import badges from "../../assets/images/posts/badges.svg";
import events from "../../assets/images/posts/events.svg";
import groups from "../../assets/images/posts/groups.svg";
import member from "../../assets/images/posts/member.svg";
import overview from "../../assets/images/posts/overview.svg";
import feed from "../../assets/images/posts/feed.svg";
import forum from "../../assets/images/posts/forum.svg";
import smile from "../../assets/images/posts/emoji.svg";

const Feed = () => {

setTimeout(()=>{

  function CalendarControl() {
    const calendar = new Date();
    const calendarControl = {
      localDate: new Date(),
      prevMonthLastDate: null,
      calWeekDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      calMonthName: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      daysInMonth: function (month, year) {
        return new Date(year, month, 0).getDate();
      },
      firstDay: function () {
        return new Date(calendar.getFullYear(), calendar.getMonth(), 1);
      },
      lastDay: function () {
        return new Date(calendar.getFullYear(), calendar.getMonth() + 1, 0);
      },
      firstDayNumber: function () {
        return calendarControl.firstDay().getDay() + 1;
      },
      lastDayNumber: function () {
        return calendarControl.lastDay().getDay() + 1;
      },
      getPreviousMonthLastDate: function () {
        let lastDate = new Date(
          calendar.getFullYear(),
          calendar.getMonth(),
          0
        ).getDate();
        return lastDate;
      },
      navigateToPreviousMonth: function () {
        calendar.setMonth(calendar.getMonth() - 1);
        calendarControl.attachEventsOnNextPrev();
      },
      navigateToNextMonth: function () {
        calendar.setMonth(calendar.getMonth() + 1);
        calendarControl.attachEventsOnNextPrev();
      },
      navigateToCurrentMonth: function () {
        let currentMonth = calendarControl.localDate.getMonth();
        let currentYear = calendarControl.localDate.getFullYear();
        calendar.setMonth(currentMonth);
        calendar.setYear(currentYear);
        calendarControl.attachEventsOnNextPrev();
      },
      displayYear: function () {
        let yearLabel = document.querySelector(".calendar .calendar-year-label");
        yearLabel.innerHTML = calendar.getFullYear();
      },
      displayMonth: function () {
        let monthLabel = document.querySelector(
          ".calendar .calendar-month-label"
        );
        monthLabel.innerHTML = calendarControl.calMonthName[calendar.getMonth()];
      },
      selectDate: function (e) {
        console.log(
          `${e.target.textContent} ${
            calendarControl.calMonthName[calendar.getMonth()]
          } ${calendar.getFullYear()}`
        );
      },
      plotSelectors: function () {
        document.querySelector(
          ".calendar"
        ).innerHTML = `<div class="calendar-inner"><div class="calendar-controls">
          <div class="calendar-prev"><a><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path fill="#666" d="M88.2 3.8L35.8 56.23 28 64l7.8 7.78 52.4 52.4 9.78-7.76L45.58 64l52.4-52.4z"/></svg></a></div>
          <div class="calendar-year-month">
          <div class="calendar-month-label"></div>
          <div>-</div>
          <div class="calendar-year-label"></div>
          </div>
          <div class="calendar-next"><a><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path fill="#666" d="M38.8 124.2l52.4-52.42L99 64l-7.77-7.78-52.4-52.4-9.8 7.77L81.44 64 29 116.42z"/></svg></a></div>
          </div>
          <div class="calendar-today-date">Today: 
            ${calendarControl.calWeekDays[calendarControl.localDate.getDay()]}, 
            ${calendarControl.localDate.getDate()}, 
            ${calendarControl.calMonthName[calendarControl.localDate.getMonth()]} 
            ${calendarControl.localDate.getFullYear()}
          </div>
          <div class="calendar-body"></div></div>`;
      },
      plotDayNames: function () {
        for (let i = 0; i < calendarControl.calWeekDays.length; i++) {
          document.querySelector(
            ".calendar .calendar-body"
          ).innerHTML += `<div>${calendarControl.calWeekDays[i]}</div>`;
        }
      },
      plotDates: function () {
        document.querySelector(".calendar .calendar-body").innerHTML = "";
        calendarControl.plotDayNames();
        calendarControl.displayMonth();
        calendarControl.displayYear();
        let count = 1;
        let prevDateCount = 0;
  
        calendarControl.prevMonthLastDate = calendarControl.getPreviousMonthLastDate();
        let prevMonthDatesArray = [];
        let calendarDays = calendarControl.daysInMonth(
          calendar.getMonth() + 1,
          calendar.getFullYear()
        );
        // dates of current month
        for (let i = 1; i < calendarDays; i++) {
          if (i < calendarControl.firstDayNumber()) {
            prevDateCount += 1;
            document.querySelector(
              ".calendar .calendar-body"
            ).innerHTML += `<div class="prev-dates"></div>`;
            prevMonthDatesArray.push(calendarControl.prevMonthLastDate--);
          } else {
            document.querySelector(
              ".calendar .calendar-body"
            ).innerHTML += `<div class="number-item" data-num=${count}><a class="dateNumber">${count++}</a></div>`;
          }
        }
        //remaining dates after month dates
        for (let j = 0; j < prevDateCount + 1; j++) {
          document.querySelector(
            ".calendar .calendar-body"
          ).innerHTML += `<div class="number-item" data-num=${count}><a class="dateNumber">${count++}</a></div>`;
        }
        calendarControl.highlightToday();
        calendarControl.plotPrevMonthDates(prevMonthDatesArray);
        calendarControl.plotNextMonthDates();
      },
      attachEvents: function () {
        let prevBtn = document.querySelector(".calendar .calendar-prev a");
        let nextBtn = document.querySelector(".calendar .calendar-next a");
        let todayDate = document.querySelector(".calendar .calendar-today-date");
        let dateNumber = document.querySelectorAll(".calendar .dateNumber");
        prevBtn.addEventListener(
          "click",
          calendarControl.navigateToPreviousMonth
        );
        nextBtn.addEventListener("click", calendarControl.navigateToNextMonth);
        todayDate.addEventListener(
          "click",
          calendarControl.navigateToCurrentMonth
        );
        for (var i = 0; i < dateNumber.length; i++) {
            dateNumber[i].addEventListener(
              "click",
              calendarControl.selectDate,
              false
            );
        }
      },
      highlightToday: function () {
        let currentMonth = calendarControl.localDate.getMonth() + 1;
        let changedMonth = calendar.getMonth() + 1;
        let currentYear = calendarControl.localDate.getFullYear();
        let changedYear = calendar.getFullYear();
        if (
          currentYear === changedYear &&
          currentMonth === changedMonth &&
          document.querySelectorAll(".number-item")
        ) {
          document
            .querySelectorAll(".number-item")
            [calendar.getDate() - 1].classList.add("calendar-today");
        }
      },
      plotPrevMonthDates: function(dates){
        dates.reverse();
        for(let i=0;i<dates.length;i++) {
            if(document.querySelectorAll(".prev-dates")) {
                document.querySelectorAll(".prev-dates")[i].textContent = dates[i];
            }
        }
      },
      plotNextMonthDates: function(){
       let childElemCount = document.querySelector('.calendar-body').childElementCount;
       //7 lines
       if(childElemCount > 42 ) {
           let diff = 49 - childElemCount;
           calendarControl.loopThroughNextDays(diff);
       }
  
       //6 lines
       if(childElemCount > 35 && childElemCount <= 42 ) {
        let diff = 42 - childElemCount;
        calendarControl.loopThroughNextDays(42 - childElemCount);
       }
  
      },
      loopThroughNextDays: function(count) {
        if(count > 0) {
            for(let i=1;i<=count;i++) {
                document.querySelector('.calendar-body').innerHTML += `<div class="next-dates">${i}</div>`;
            }
        }
      },
      attachEventsOnNextPrev: function () {
        calendarControl.plotDates();
        calendarControl.attachEvents();
      },
      init: function () {
        calendarControl.plotSelectors();
        calendarControl.plotDates();
        calendarControl.attachEvents();
      }
    };
    calendarControl.init();
  }
  
  const calendarControl = new CalendarControl();
},400)

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
    console.log(tags);
  }, []);
    
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
                  background: `url(${localStorage.getItem("ProfileImg")})`,
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
                        <img
                          src={require("../../assets/images/posts/completedq-s.png")}
                          alt=""
                        />
                      </li>
                      <li>
                        <h3>15/30</h3>
                        <h4>Badges</h4>
                        <h5>UNLOCKED</h5>
                        <img
                          src={require("../../assets/images/posts/unlocked-badge.png")}
                          alt=""
                        />
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
                    <img
                      src={require("../../assets/images/posts/uexp-b.png")}
                      alt=""
                    />
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
                      <img
                        src={require("../../assets/images/posts/openq-s.png")}
                        alt=""
                      />
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
                      <img
                        src={require("../../assets/images/posts/openq-s.png")}
                        alt=""
                      />
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
                      <img
                        src={require("../../assets/images/posts/openq-s.png")}
                        alt=""
                      />
                      <div className="text">
                        <h3> Buffed Profile</h3>
                        <p>
                          You have posted every day for at least 30 days in a
                          row
                        </p>
                      </div>
                    </div>
                    <div className="progress-container"></div>
                  </li>

                  <li className="content">
                    <div className="image-text">
                      <img
                        src={require("../../assets/images/posts/openq-s.png")}
                        alt=""
                      />
                      <div className="text">
                        <h3> Hear the People</h3>
                        <p>You have created and posted your first poll</p>
                      </div>
                    </div>
                    <div className="progress-container"></div>
                  </li>

                  <li className="content">
                    <div className="image-text">
                      <img
                        src={require("../../assets/images/posts/openq-s.png")}
                        alt=""
                      />
                      <div className="text">
                        <h3> Store Manager</h3>
                        <p>You have uploaded at least 10 items in your shop</p>
                      </div>
                    </div>
                    <div className="progress-container"></div>
                  </li>

                  <li className="btn">
                    <button className="quests">see all quests</button>
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
                          <a
                            className="link user-status-avatar"
                            href="/profile"
                          >
                            <div className="user-avatar">
                              <div className="user-avatar-content hexagon image">
                                <div
                                  className="image"
                                  style={{
                                    // require("../../assets/images/posts/sanaa.jpg")`,"
                                    //localStorage.getItem("ProfileImg")
                                    //JSON.parse(localStorage.getItem("userToken"))?JSON.parse(localStorage.getItem("userToken")).user.imageUrl:require("../../assets/images/posts/sanaa.jpg")
                                    background: `url(${
                                      localStorage.getItem("userToken")
                                        ? JSON.parse(localStorage.getItem("userToken")).user.imageUrl
                                        : require("../../assets/images/posts/th.jpg")
                                    })`,
                                  }}
                                >
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
                                {post.userName}
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
              
              <div className="categories">
                <ul>
                  <li className="heading">
                    <h2>Categories</h2>
                  </li>

                  <li className="content">
                    <div className="categories">
                      <button className="category">All</button>
                      <button className="category">Life Style</button>
                      <button className="category">Gaming</button>

                      <button className="category">Streams</button>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="calendar"></div>

              <div className="profile-Completion">
                <ul>
                  <li className="heading">
                    <h2>Reactions recieved</h2>
                  </li>
                  <li className="statistics">
                    <ul>
                      <li>
                        <img
                          src={require("../../assets/images/posts/like.png")}
                          alt=""
                        />
                        <h3>12.500</h3>
                        <h5>Likes</h5>
                      </li>
                      <li className="center-line"></li>
                      <li>
                        <img
                          src={require("../../assets/images/posts/love.png")}
                          alt=""
                        />
                        <h3>50.500</h3>
                        <h5>Love</h5>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <img
                          src={require("../../assets/images/posts/dislike.png")}
                          alt=""
                        />
                        <h3>500</h3>
                        <h5>disLikes</h5>
                      </li>
                      <li className="center-line"></li>
                      <li>
                        <img
                          src={require("../../assets/images/posts/happy.png")}
                          alt=""
                        />
                        <h3>5.500</h3>
                        <h5>Happy</h5>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="members groups">
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
                              background: `url(${require("../../assets/images/posts/th4.jpg")})`,
                            }}
                          ></div>
                        </div>
                      </a>

                      <div className="text">
                        <h3>Narotou</h3>
                        <p>2065 members</p>
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
                              background: `url(${require("../../assets/images/posts/th.jpg")})`,
                            }}
                          ></div>
                        </div>
                      </a>

                      <div className="text">
                        <h3>Dragon ball</h3>
                        <p>1265 members</p>
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
                              background: `url(${require("../../assets/images/posts/th5.jpg")})`,
                            }}
                          ></div>
                        </div>
                      </a>

                      <div className="text">
                        <h3>Dragon ball</h3>
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
                              background: `url(${require("../../assets/images/posts/th3.jpg")})`,
                            }}
                          ></div>
                        </div>
                      </a>

                      <div className="text">
                        <h3>Narotou</h3>
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
                              background: `url(${require("../../assets/images/posts/th6.jpg")})`,
                            }}
                          ></div>
                        </div>
                      </a>

                      <div className="text">
                        <h3>Dragon ball</h3>
                        <p>265 members</p>
                      </div>
                    </div>
                    <div className="content-icon">
                      <img src={groups} alt="" />
                    </div>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
        
        <button className="add">
        <NavLink className="navLink" to="/create_post"> + </NavLink>
        </button>
      </section>
    </>
  );
};

export default Feed;
