import React from "react";
import { Formik } from "formik";
const SignUp = () => {
  return (
    <Formik
      initialValues={{
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
        address: "",
        gender: "",
        female: "",
        male: "",
      }}
      validate={(values) => {
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

        if (!values.confirmPassword) {
          errors.confirmPassword = "Required";
        } else if (values.confirmPassword !== values.password) {
          errors.password = "field doesn't match password ";
        }

        if (!values.address) {
          errors.address = "Required";
        }

        if (!values.gender) {
          errors.gender = "Required";
        }
        console.log(values);

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
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
       <img src="C:/Users/ZienM/OneDrive/Desktop/Hkyatak_Project/hkyatak-app/src/assets/images/form/viking.png" alt="userLogo"/>
<input
            type="text"
            id="userName"
            name="userName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.userName}
            placeholder="ex: Zien Muhammad"
          />
        </div>
         
         <div className="message">
         {errors.userName && touched.userName && errors.userName}
         </div>
          </div>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <input
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirmPassword}
          />
          {errors.confirmPassword &&
            touched.confirmPassword &&
            errors.confirmPassword}
          <input
            type="text"
            name="address"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.address}
          />
          {errors.address && touched.address && errors.address}
          <div className="gender">
            <div className="custom-control">
              <input
                id="male"
                type="radio"
                value="male"
                name="gender"
                onChange={handleChange}
              />
              <label className="custom-control-label" htmlFor="male">
                Male
              </label>
            </div>
            <div className="custom-control">
              <input
                id="female"
                type="radio"
                value="female"
                name="gender"
                onChange={handleChange}
              />
              <label className="custom-control-label" htmlFor="female">
                Female
              </label>
            </div>
          </div>

          {errors.gender && touched.gender && errors.gender}

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
};

export default SignUp;
