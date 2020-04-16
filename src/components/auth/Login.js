import React, { useState } from "react";
import { connect } from "react-redux";
import { loginAction } from "../../store/actions";
import { ifDev } from "../../utils/removeAttribute.js";

// styling imports
import Picture1 from "../../img/watching-tv.png";
import { TextField, Checkbox } from "@material-ui/core";

// Navbar Login
import LoginNavLinks from "../layout/nav-layouts/LoginNavLinks.js";

//For validation
import { useForm } from "react-hook-form";
import * as Yup from "yup";

const initialUser = {
  user_name: "",
  password: "",
};

const RegisterSchema = Yup.object().shape({
  user_name: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required")
})


const LoginPage = (props) => {
  const [user, setUser] = useState(initialUser);
  const { handleSubmit, errors} = useForm({
    validationSchema: RegisterSchema
  })

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const loginUser = (e) => {
    e.preventDefault();
    props.loginAction(user);
  };

  return (
    <div
      className="container login-component"
      data-test={ifDev("login-component")}
    >
      {/* NAVIGATION */}
      <div className="onboarding-nav login-nav">
        <LoginNavLinks />
      </div>
      <div className="box-container">
        <div className="box-left">
          <div className="text-container">
            <h1>
              Welcome <br /> back.
            </h1>
            <h5>
              {" "}
              Groa makes it easy to find a film you’ll love. <br /> What new
              favorite will you discover today?
            </h5>
          </div>
          <div className="image-wrapper">
            <img className="logo" src={Picture1} alt="Graphic" />
          </div>
        </div>
        {/* FORM START */}
        <div className="box-right">
          <form
            className="form login-form"
            onSubmit={handleSubmit(loginUser)}
            data-test={ifDev("loginForm")}
          >
            <TextField
              name="user_name"
              value={user.user_name}
              onChange={handleChange}
              label="Username"
              variant="outlined"
            />
            {errors.user_name && errors.user_name.type === "required" && (
              <p>A username is required</p>
            )}
            <TextField
              name="password"
              type="password"
              value={user.password}
              onChange={handleChange}
              label="Password"
              variant="outlined"
            />
            {errors.password && errors.password.type === "required" && (
              <p>A password is required</p>
            )}
            <div className="bottom-form">
              <div className="text-check">
                <div className="check-box-container">
                  <Checkbox
                    color="primary"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                  <p>Remember me</p>
                </div>
              </div>
              <div className="login-btn-container btn-container">
                <button className="login-btn" data-test={ifDev("BtnLoginTest")}>
                  Log in
                </button>
              </div>
            </div>
            <div className="bottomAccount">
              <p className="loginAccount">Forgot password?</p>
            </div>
          </form>
        </div>
        {/* FORM ENDS */}
      </div>
      {/* END OF MAIN CONTENT */}
    </div>
    // END LOGIN PAGE
  );
};

const mapStateToProps = (state) => {
  return {
    userid: state.login.userid,
    errorStatus: state.login.error,
  };
};
export default connect(mapStateToProps, { loginAction })(LoginPage);
