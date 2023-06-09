import { Formik } from "formik";
import React, { useEffect, useState } from "react";
// import useHistory from "react-router-dom";
import AuthService from "../../services/auth";
import upload from "../../assets/images/posts/upload.svg"
const SignUp = () => {
  let message = "";
  let showPass = () => {
    let pass = document.getElementById("password");
    if (pass.getAttribute("type") == "password") {
      pass.parentElement.children[1].children[0].setAttribute(
        "d",
        "M19.7071 5.70711C20.0976 5.31658 20.0976 4.68342 19.7071 4.29289C19.3166 3.90237 18.6834 3.90237 18.2929 4.29289L14.032 8.55382C13.4365 8.20193 12.7418 8 12 8C9.79086 8 8 9.79086 8 12C8 12.7418 8.20193 13.4365 8.55382 14.032L4.29289 18.2929C3.90237 18.6834 3.90237 19.3166 4.29289 19.7071C4.68342 20.0976 5.31658 20.0976 5.70711 19.7071L9.96803 15.4462C10.5635 15.7981 11.2582 16 12 16C14.2091 16 16 14.2091 16 12C16 11.2582 15.7981 10.5635 15.4462 9.96803L19.7071 5.70711ZM12.518 10.0677C12.3528 10.0236 12.1792 10 12 10C10.8954 10 10 10.8954 10 12C10 12.1792 10.0236 12.3528 10.0677 12.518L12.518 10.0677ZM11.482 13.9323L13.9323 11.482C13.9764 11.6472 14 11.8208 14 12C14 13.1046 13.1046 14 12 14C11.8208 14 11.6472 13.9764 11.482 13.9323ZM15.7651 4.8207C14.6287 4.32049 13.3675 4 12 4C9.14754 4 6.75717 5.39462 4.99812 6.90595C3.23268 8.42276 2.00757 10.1376 1.46387 10.9698C1.05306 11.5985 1.05306 12.4015 1.46387 13.0302C1.92276 13.7326 2.86706 15.0637 4.21194 16.3739L5.62626 14.9596C4.4555 13.8229 3.61144 12.6531 3.18002 12C3.6904 11.2274 4.77832 9.73158 6.30147 8.42294C7.87402 7.07185 9.81574 6 12 6C12.7719 6 13.5135 6.13385 14.2193 6.36658L15.7651 4.8207ZM12 18C11.2282 18 10.4866 17.8661 9.78083 17.6334L8.23496 19.1793C9.37136 19.6795 10.6326 20 12 20C14.8525 20 17.2429 18.6054 19.002 17.0941C20.7674 15.5772 21.9925 13.8624 22.5362 13.0302C22.947 12.4015 22.947 11.5985 22.5362 10.9698C22.0773 10.2674 21.133 8.93627 19.7881 7.62611L18.3738 9.04043C19.5446 10.1771 20.3887 11.3469 20.8201 12C20.3097 12.7726 19.2218 14.2684 17.6986 15.5771C16.1261 16.9282 14.1843 18 12 18Z"
      );
      pass.setAttribute("type", "text");
    } else {
      pass.parentElement.children[1].children[0].setAttribute(
        "d",
        "M6.30147 15.5771C4.77832 14.2684 3.6904 12.7726 3.18002 12C3.6904 11.2274 4.77832 9.73158 6.30147 8.42294C7.87402 7.07185 9.81574 6 12 6C14.1843 6 16.1261 7.07185 17.6986 8.42294C19.2218 9.73158 20.3097 11.2274 20.8201 12C20.3097 12.7726 19.2218 14.2684 17.6986 15.5771C16.1261 16.9282 14.1843 18 12 18C9.81574 18 7.87402 16.9282 6.30147 15.5771ZM12 4C9.14754 4 6.75717 5.39462 4.99812 6.90595C3.23268 8.42276 2.00757 10.1376 1.46387 10.9698C1.05306 11.5985 1.05306 12.4015 1.46387 13.0302C2.00757 13.8624 3.23268 15.5772 4.99812 17.0941C6.75717 18.6054 9.14754 20 12 20C14.8525 20 17.2429 18.6054 19.002 17.0941C20.7674 15.5772 21.9925 13.8624 22.5362 13.0302C22.947 12.4015 22.947 11.5985 22.5362 10.9698C21.9925 10.1376 20.7674 8.42276 19.002 6.90595C17.2429 5.39462 14.8525 4 12 4ZM10 12C10 10.8954 10.8955 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8955 14 10 13.1046 10 12ZM12 8C9.7909 8 8.00004 9.79086 8.00004 12C8.00004 14.2091 9.7909 16 12 16C14.2092 16 16 14.2091 16 12C16 9.79086 14.2092 8 12 8Z"
      );
      pass.setAttribute("type", "password");
    }
  };

  let obj={};
  
  let [img,setImg] =useState("");
  // useEffect(()=>{
  //   // let upload = document.querySelector(".upload input");
  //   // upload.addEventListener("change",(e)=>{
  //   //   let profileImg="";
  //   //   if(e.target.files.length !== 0){
  //   //     profileImg = URL.createObjectURL(e.target.files[0]);
  //   //     img = profileImg;
  //   //     setImg(profileImg);
  //   //     localStorage.setItem("ProfileImg",img);
  //   //   }
  //   });
  
  // },[img]);
  
  return (
    <Formik
      initialValues={{
        userName: "",
        email: "",
        password: "",
        address: "",
        imageUrl:"",
        gender: "",
        // confirmPassword: "",
      }}
      validate={(values) => {
        console.log(values);

        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }

        if (!values.userName) {
          errors.userName = "Required";
        } else if (values.userName.length < 3) {
          errors.userName = "userName length is so short";
        }

        if (!values.password) {
          errors.password = "Required";
        } else if (
          !/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/i.test(
            values.password
          )
        ) {
          errors.password =
            "password must contain capital and small characters letters , 1 special char at least, numbers ";
        } else if (values.password.length < 8) {
          errors.password = "password length should be 8 ";
        }

        if (!values.address) {
          errors.address = "Required";
        }

        if (!values.gender) {
          errors.gender = "Required";
        }

        // if (!values.confirmPassword) {
        //   errors.confirmPassword = "Required";
        // } else if (values.confirmPassword !== values.password) {
        //   errors.password = "field doesn't match password ";
        // }

        //   for (let val in values)
        //  {
        //   console.log(values[val])
        //   let inputs = document.querySelectorAll(`input[name= ${val}]`);

        //   if(values[val] == "")
        //   {
        //   console.log([...inputs][0]);
        //   ([...inputs][0]).style.border = "1px solid red"
        // }else
        // {
        //   ([...inputs][0]).style.border = "1px solid green"

        // }
        //  }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        obj=values;
        setTimeout(() => {
          setSubmitting(false);
        }, 400);
        // obj.imageUrl = img;
        AuthService.signup(obj?.userName,obj?.email,obj?.password,obj?.address,obj?.imageUrl).then(
          (data) => {
            // window.location.reload();
            window.location.replace("/login");
            },
          (error) => {
            message= error.response.data;
          }
        )
          
      }}  
    >
    
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="userName input-container">
            <label htmlFor="userName">userName</label>
            <div className=" form-group">
              <input
                type="text"
                id="userName"
                name="userName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.userName}
                placeholder="ex: Zien Muhammad"
              />
              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M52.441 53.88c-35.103 34.696-41.31 73.89-33.228 117.837 6.29 34.202 22.079 70.807 40.892 107.767 17.738-27.114 41.117-56.824 68.676-78.517-20.7-17.164-38.261-35.891-51.367-56.447-17.29-27.12-26.504-57.61-24.973-90.64zm407.118 0c1.531 33.03-7.683 63.52-24.973 90.64-13.106 20.556-30.667 39.283-51.367 56.447 27.559 21.693 50.938 51.403 68.676 78.517 18.813-36.96 34.603-73.565 40.892-107.767 8.082-43.947 1.875-83.141-33.228-117.836zM256 179c-8.702 0-17.061 2.757-23 7.316v22.38c6.7-2.648 14.535-4.016 23-4.016s16.3 1.368 23 4.015v-22.379c-5.939-4.559-14.298-7.316-23-7.316zm-41 30.053c-30.485 11.577-60.043 34.66-84.166 62.804C98.718 309.326 76.784 355.501 73.482 391H215V209.053zm82 0V391h141.518c-3.301-35.499-25.236-81.674-57.352-119.143-24.123-28.143-53.681-51.227-84.166-62.804zm-153.502 3.49c-29.097 22.175-55.189 56.212-73.732 85.506a2034.036 2034.036 0 0 0 9.447 17.562c10.162-19.226 23.088-38.126 37.953-55.468 11.983-13.98 25.289-26.965 39.557-38.155a416.25 416.25 0 0 1-13.225-9.445zm225.004 0a416.25 416.25 0 0 1-13.225 9.445c14.268 11.19 27.574 24.175 39.557 38.155 14.865 17.342 27.79 36.242 37.953 55.468 3.179-5.85 6.339-11.705 9.447-17.562-18.543-29.294-44.635-63.33-73.732-85.506zM256 222.68c-7.62 0-14.449 1.66-18.602 3.736-3.262 1.631-4.103 2.973-4.318 3.264.215.29 1.056 1.632 4.318 3.263 4.153 2.077 10.981 3.737 18.602 3.737 7.62 0 14.449-1.66 18.602-3.737 3.262-1.63 4.103-2.972 4.318-3.263-.215-.291-1.056-1.633-4.318-3.264-4.153-2.077-10.981-3.736-18.602-3.736zm22.92 7c.059.08.08.095.08 0 0-.096-.021-.08-.08 0zm-45.84 0c-.059-.08-.08-.096-.08 0 0 .095.021.08.08 0zm-.08 20.984v48.352c6.7-2.648 14.535-4.016 23-4.016s16.3 1.368 23 4.016v-48.352c-6.7 2.648-14.535 4.016-23 4.016s-16.3-1.368-23-4.016zM256 313c-7.62 0-14.449 1.66-18.602 3.736-3.262 1.632-4.103 2.973-4.318 3.264.215.291 1.056 1.632 4.318 3.264C241.551 325.34 248.38 327 256 327c7.62 0 14.449-1.66 18.602-3.736 3.262-1.632 4.103-2.973 4.318-3.264-.215-.291-1.056-1.632-4.318-3.264C270.449 314.66 263.62 313 256 313zm22.92 7c.059.08.08.096.08 0s-.021-.08-.08 0zm-45.84 0c-.059-.08-.08-.096-.08 0s.021.08.08 0zm-.08 20.984v45.87c6.7-2.649 14.535-4.016 23-4.016s16.3 1.367 23 4.016v-45.87c-6.7 2.648-14.535 4.016-23 4.016s-16.3-1.368-23-4.016zm23 59.854c-7.62 0-14.449 1.66-18.602 3.736-3.262 1.631-4.103 2.973-4.318 3.264.215.29 1.056 1.632 4.318 3.264 4.153 2.076 10.981 3.736 18.602 3.736 7.62 0 14.449-1.66 18.602-3.736 3.262-1.632 4.103-2.973 4.318-3.264-.215-.291-1.056-1.633-4.318-3.264-4.153-2.076-10.981-3.736-18.602-3.736zm22.92 7c.059.08.08.095.08 0 0-.096-.021-.08-.08 0zm-45.84 0c-.059-.08-.08-.096-.08 0 0 .095.021.08.08 0zM73 409v30h18.455c-2.78-4.422-4.455-9.52-4.455-15s1.676-10.578 4.455-15H73zm55 0c-7.013 0-13.194 2.204-17.227 5.229C106.74 417.253 105 420.615 105 424c0 3.385 1.74 6.747 5.773 9.771C114.806 436.796 120.987 439 128 439s13.194-2.204 17.227-5.229C149.26 430.747 151 427.385 151 424c0-3.385-1.74-6.747-5.773-9.771C141.194 411.204 135.013 409 128 409zm36.545 0c2.78 4.422 4.455 9.52 4.455 15s-1.676 10.578-4.455 15H215v-30h-50.455zM297 409v30h50.455c-2.78-4.422-4.455-9.52-4.455-15s1.676-10.578 4.455-15H297zm87 0c-7.013 0-13.194 2.204-17.227 5.229C362.74 417.253 361 420.615 361 424c0 3.385 1.74 6.747 5.773 9.771C370.806 436.796 376.987 439 384 439s13.194-2.204 17.227-5.229C405.26 430.747 407 427.385 407 424c0-3.385-1.74-6.747-5.773-9.771C397.194 411.204 391.013 409 384 409zm36.545 0c2.78 4.422 4.455 9.52 4.455 15s-1.676 10.578-4.455 15H439v-30h-18.455zM233 428.822v16.453l23 34.5 23-34.5v-16.453c-6.7 2.648-14.535 4.016-23 4.016s-16.3-1.368-23-4.016z" />
              </svg>
            </div>

            <div className="message">
              {errors.userName && touched.userName && errors.userName}
            </div>
          </div>

          <div className="email input-container">
            <label htmlFor="email">Email</label>
            <div className=" form-group">
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="example@example.com"
              />
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H2v16h12v-2H4V6h16v8h2V4h-2zM6 8h2v2H6V8zm4 4H8v-2h2v2zm4 0v2h-4v-2h4zm2-2v2h-2v-2h2zm0 0V8h2v2h-2zm2 6h-2v2h2v2h-2v2h2v-2h2v2h2v-2h-2v-2h2v-2h-2v2h-2v-2z" />
              </svg>
            </div>

            <div className="message">
              {errors.email && touched.email && errors.email}
            </div>
          </div>

          <div className="password input-container">
            <label htmlFor="password">password</label>
            <div className=" form-group">
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="AA%123aa"
              />
              <svg
                onClick={showPass}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.30147 15.5771C4.77832 14.2684 3.6904 12.7726 3.18002 12C3.6904 11.2274 4.77832 9.73158 6.30147 8.42294C7.87402 7.07185 9.81574 6 12 6C14.1843 6 16.1261 7.07185 17.6986 8.42294C19.2218 9.73158 20.3097 11.2274 20.8201 12C20.3097 12.7726 19.2218 14.2684 17.6986 15.5771C16.1261 16.9282 14.1843 18 12 18C9.81574 18 7.87402 16.9282 6.30147 15.5771ZM12 4C9.14754 4 6.75717 5.39462 4.99812 6.90595C3.23268 8.42276 2.00757 10.1376 1.46387 10.9698C1.05306 11.5985 1.05306 12.4015 1.46387 13.0302C2.00757 13.8624 3.23268 15.5772 4.99812 17.0941C6.75717 18.6054 9.14754 20 12 20C14.8525 20 17.2429 18.6054 19.002 17.0941C20.7674 15.5772 21.9925 13.8624 22.5362 13.0302C22.947 12.4015 22.947 11.5985 22.5362 10.9698C21.9925 10.1376 20.7674 8.42276 19.002 6.90595C17.2429 5.39462 14.8525 4 12 4ZM10 12C10 10.8954 10.8955 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8955 14 10 13.1046 10 12ZM12 8C9.7909 8 8.00004 9.79086 8.00004 12C8.00004 14.2091 9.7909 16 12 16C14.2092 16 16 14.2091 16 12C16 9.79086 14.2092 8 12 8Z"
                />
              </svg>
            </div>
            <div className="message">
              {errors.password && touched.password && errors.password}
            </div>
          </div>
          <div className="address input-container">
            <label htmlFor="address">Address</label>
            <div className=" form-group">
              <input
                type="text"
                name="address"
                id="address"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
                placeholder="Mansoura"
              />
              <svg viewBox="0 0 503.61 503.61">
                <g>
                  <g>
                    <g>
                      <circle cx="100.723" cy="453.247" r="8.393" />
                      <path
                        d="M67.149,444.854H50.362c-4.633,0-8.393,3.76-8.393,8.393s3.76,8.393,8.393,8.393h16.787c4.633,0,8.393-3.76,8.393-8.393
				S71.782,444.854,67.149,444.854z"
                      />
                      <path
                        d="M151.084,444.854h-16.787c-4.633,0-8.393,3.76-8.393,8.393s3.76,8.393,8.393,8.393h16.787
				c4.633,0,8.393-3.76,8.393-8.393S155.717,444.854,151.084,444.854z"
                      />
                      <circle cx="402.887" cy="453.247" r="8.393" />
                      <path
                        d="M352.526,461.641h16.787c4.633,0,8.393-3.76,8.393-8.393s-3.76-8.393-8.393-8.393h-16.787
				c-4.633,0-8.393,3.76-8.393,8.393S347.893,461.641,352.526,461.641z"
                      />
                      <path
                        d="M436.461,461.641h16.787c4.633,0,8.393-3.76,8.393-8.393s-3.76-8.393-8.393-8.393h-16.787
				c-4.633,0-8.393,3.76-8.393,8.393S431.827,461.641,436.461,461.641z"
                      />
                      <path
                        d="M100.723,218.231c-4.625,0-8.393,3.769-8.393,8.393v33.574h16.787v-33.574C109.116,222,105.348,218.231,100.723,218.231z
				"
                      />
                      <path
                        d="M100.723,318.952c-4.625,0-8.393,3.769-8.393,8.393v33.574h16.787v-33.574
				C109.116,322.721,105.348,318.952,100.723,318.952z"
                      />
                      <path
                        d="M501.149,128.363L411.28,38.486V8.395c0-4.633-3.76-8.393-8.393-8.393s-8.393,3.76-8.393,8.393v30.091l-89.869,89.877
				c-2.401,2.401-3.122,6.01-1.821,9.149c1.301,3.131,4.365,5.179,7.756,5.179h8.393v25.18c0,4.633,3.76,8.393,8.393,8.393h8.393
				v25.18h25.18c4.633,0,8.393,3.76,8.393,8.393s-3.76,8.393-8.393,8.393h-25.18v16.787h-16.787v-25.18
				c0-4.633-3.76-8.393-8.393-8.393h-33.574c-4.633,0-8.393,3.76-8.393,8.393v25.18h-33.574v-25.18c0-4.633-3.76-8.393-8.393-8.393
				h-33.574c-4.633,0-8.393,3.76-8.393,8.393v25.18H167.87v-58.754h8.393c4.633,0,8.393-3.76,8.393-8.393v-25.18h8.393
				c3.391,0,6.455-2.048,7.756-5.179c1.301-3.139,0.579-6.748-1.821-9.149l-89.869-89.877V8.395c0-4.633-3.76-8.393-8.393-8.393
				s-8.393,3.76-8.393,8.393v30.091L2.461,128.363c-2.401,2.401-3.122,6.01-1.821,9.149c1.301,3.131,4.365,5.179,7.755,5.179h8.393
				v25.18c0,4.633,3.76,8.393,8.393,8.393h8.393v25.18h25.18c4.633,0,8.393,3.76,8.393,8.393s-3.76,8.393-8.393,8.393h-25.18V360.92
				h25.18c4.633,0,8.393,3.76,8.393,8.393s-3.76,8.393-8.393,8.393h-25.18v25.18h-8.393c-4.314,0-7.923,3.265-8.352,7.554
				l-8.393,83.934c-0.235,2.367,0.537,4.709,2.132,6.471c1.586,1.754,3.844,2.761,6.22,2.761h167.869h25.18V394.493
				c0-23.141,18.826-41.967,41.967-41.967c23.141,0,41.967,18.826,41.967,41.967v109.115h25.18h167.869
				c2.375,0,4.633-1.007,6.22-2.761c1.595-1.763,2.367-4.104,2.132-6.471l-8.393-83.934c-0.428-4.289-4.037-7.554-8.352-7.554
				h-8.393V302.166h-25.18c-4.633,0-8.393-3.76-8.393-8.393s3.76-8.393,8.393-8.393h25.18V176.264h8.393
				c4.633,0,8.393-3.76,8.393-8.393v-25.18h8.393c3.391,0,6.455-2.048,7.756-5.179C504.271,134.372,503.549,130.763,501.149,128.363
				z M41.969,159.477h-8.393V142.69H167.87v16.787h-8.393H41.969z M151.084,285.379v16.787h-8.393c-4.633,0-8.393-3.76-8.393-8.393
				s3.76-8.393,8.393-8.393H151.084z M117.51,276.985H83.936c-4.633,0-8.393-3.76-8.393-8.393v-41.967
				c0-13.883,11.298-25.18,25.18-25.18s25.18,11.298,25.18,25.18v41.967C125.903,273.225,122.143,276.985,117.51,276.985z
				 M125.903,327.346v41.967c0,4.633-3.76,8.393-8.393,8.393H83.936c-4.633,0-8.393-3.76-8.393-8.393v-41.967
				c0-13.883,11.298-25.18,25.18-25.18S125.903,313.463,125.903,327.346z M26.063,486.821l6.715-67.148h9.191h117.508h9.191
				l6.715,67.148H26.063z M235.018,327.346c0,4.633-3.76,8.393-8.393,8.393h-33.574c-4.633,0-8.393-3.76-8.393-8.393v-33.574
				c0-13.883,11.298-25.18,25.18-25.18s25.18,11.298,25.18,25.18V327.346z M318.952,327.346c0,4.633-3.76,8.393-8.393,8.393h-33.574
				c-4.633,0-8.393-3.76-8.393-8.393v-33.574c0-13.883,11.298-25.18,25.18-25.18s25.18,11.298,25.18,25.18V327.346z M352.526,360.92
				h8.393c4.633,0,8.393,3.76,8.393,8.393s-3.76,8.393-8.393,8.393h-8.393V360.92z M461.641,419.674h9.191l6.715,67.148H328.227
				l6.715-67.148h9.191H461.641z M402.887,302.166c13.883,0,25.18,11.298,25.18,25.18v41.967c0,4.633-3.76,8.393-8.393,8.393H386.1
				c-4.633,0-8.393-3.76-8.393-8.393v-41.967C377.706,313.463,389.004,302.166,402.887,302.166z M377.706,268.592v-41.967
				c0-13.883,11.298-25.18,25.18-25.18s25.18,11.298,25.18,25.18v41.967c0,4.633-3.76,8.393-8.393,8.393H386.1
				C381.467,276.985,377.706,273.225,377.706,268.592z M470.034,159.477h-8.393H344.133h-8.393V142.69h134.295V159.477z"
                      />
                      <path d="M411.28,226.625c0-4.625-3.769-8.393-8.393-8.393c-4.625,0-8.393,3.769-8.393,8.393v33.574h16.787V226.625z" />
                      <path d="M411.28,327.346c0-4.625-3.769-8.393-8.393-8.393c-4.625,0-8.393,3.769-8.393,8.393v33.574h16.787V327.346z" />
                      <path
                        d="M209.838,285.379c-4.625,0-8.393,3.769-8.393,8.393v25.18h16.787v-25.18
				C218.231,289.147,214.462,285.379,209.838,285.379z"
                      />
                      <path
                        d="M251.805,369.313c-13.883,0-25.18,11.298-25.18,25.18v109.115h50.361V394.493
				C276.985,380.611,265.688,369.313,251.805,369.313z M260.198,453.247c0,4.633-3.76,8.393-8.393,8.393
				c-4.633,0-8.393-3.76-8.393-8.393V411.28c0-4.633,3.76-8.393,8.393-8.393c4.633,0,8.393,3.76,8.393,8.393V453.247z"
                      />
                      <path
                        d="M293.772,285.379c-4.625,0-8.393,3.769-8.393,8.393v25.18h16.787v-25.18
				C302.166,289.147,298.397,285.379,293.772,285.379z"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>

            <div className="message">
              {errors.address && touched.address && errors.address}
            </div>
          </div>
          
  

          <div className="imageUrl input-container">
            <label htmlFor="imageUrl">profileImg</label>
            {/* <div className=" form-group upload">
              <input
                type="file"
                name="imageUrl"
                id="imageUrl"
                onChange={handleChange}
                onBlur={handleBlur}
                // value={values.imageUrl}
                placeholder="image"
                accept="image/*"
                capture="camera"
              />
              <p> <span>{values.imageUrl?values.imageUrl:"No file choosen"}</span><i className="fa fa-upload">
              <img src={upload}></img>
              </i></p>
            </div> */}
            <div className="form-group">
            <input
                type="url"
                name="imageUrl"
                id="imageUrl"
                onChange={handleChange}
                onBlur={handleBlur}
                // value={values.imageUrl}
                placeholder="image"
              
              />
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                   <path opacity="0.4" d="M22.0206 16.8198L18.8906 9.49978C18.3206 8.15978 17.4706 7.39978 16.5006 7.34978C15.5406 7.29978 14.6106 7.96978 13.9006 9.24978L12.0006 12.6598C11.6006 13.3798 11.0306 13.8098 10.4106 13.8598C9.78063 13.9198 9.15063 13.5898 8.64063 12.9398L8.42063 12.6598C7.71063 11.7698 6.83063 11.3398 5.93063 11.4298C5.03063 11.5198 4.26063 12.1398 3.75063 13.1498L2.02063 16.5998C1.40063 17.8498 1.46063 19.2998 2.19063 20.4798C2.92063 21.6598 4.19063 22.3698 5.58063 22.3698H18.3406C19.6806 22.3698 20.9306 21.6998 21.6706 20.5798C22.4306 19.4598 22.5506 18.0498 22.0206 16.8198Z" fill="#fff"></path> 
                   <path d="M6.96984 8.38012C8.83657 8.38012 10.3498 6.86684 10.3498 5.00012C10.3498 3.13339 8.83657 1.62012 6.96984 1.62012C5.10312 1.62012 3.58984 3.13339 3.58984 5.00012C3.58984 6.86684 5.10312 8.38012 6.96984 8.38012Z" fill="#fff"></path> </g></svg>
            </div>
            <div className="message">
              {errors.imageUrl && touched.imageUrl && errors.imageUrl}
            </div>
          </div>

          <div className="gender input-container">
            <label>gender</label>
            <div className="gender-group">
              <div className="custom-control form-group">
                <input
                  id="male"
                  type="radio"
                  value="male"
                  name="gender"
                  onChange={handleChange}
                />
                <label
                  title="male"
                  className="custom-control-label"
                  htmlFor="male"
                >
                  <img src={require("../../assets/images/form/m.png")} />
                </label>
              </div>
              <div className="custom-control form-group">
                <input
                  id="female"
                  type="radio"
                  value="female"
                  name="gender"
                  onChange={handleChange}
                />
                <label
                  title="female"
                  className="custom-control-label"
                  htmlFor="female"
                >
                  <img src={require("../../assets/images/form/f.png")} />
                </label>
              </div>
            </div>
            <div className="message">
              <div>{errors.gender && touched.gender && errors.gender}</div>
              {message}
            </div>
          </div>

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
};

export default SignUp;
