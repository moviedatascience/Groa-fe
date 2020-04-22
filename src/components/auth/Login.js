import React, { useState } from "react";
import { connect } from "react-redux";
import { loginAction } from "../../store/actions";
import { ifDev } from "../../utils/removeAttribute.js";

// styling imports
import Picture1 from "../../img/watching-tv.png";
import { TextField, Checkbox } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Navbar Login
import LoginNavLinks from "../layout/nav-layouts/LoginNavLinks.js";

//For validation
import { useForm } from "react-hook-form";
import * as Yup from "yup";

//link to register
import { Link } from "react-router-dom";

//google sign in
import GoogleBtn from "../../img/x1_btn_google_signin_light_normal_web.png"

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1)
  },
  textField: {
    display: "flex",
    // justifyContent: "center",
    marginBottom: "2%",
    width: "50%",
    padding: "0"
    // display:'flex',
    // justifyContent:'center'
  }
}));

const initialUser = {
  user_name: "",
  password: ""
};

const RegisterSchema = Yup.object().shape({
  user_name: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required")
});

const LoginPage = props => {
  const [user, setUser] = useState(initialUser);
  const { handleSubmit, errors } = useForm({
    validationSchema: RegisterSchema
  });
  const classes = useStyles();
  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const loginUser = e => {
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
              className={classes.textField}
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
              className={classes.textField}
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
                {/* <div className="check-box-container">
                  <Checkbox
                    color="primary"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                  <p>Remember me</p>
                </div> */}
              </div>
              <div className="login-btn-container btn-container">
                <button className="login-btn" data-test={ifDev("BtnLoginTest")}>
                  Login
                </button>
                <div class="google-btn">
                <div class="google-icon-wrapper">
                     <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                       </div>
                    <p class="btn-text"><b>Sign in with Google</b></p>
                    </div>
              </div>
            </div>
            </form>
            <div className="bottomAccount">
              <p className="loginAccount">
                <Link
                  className="register link"
                  to="/register"
                  data-test={ifDev("register-link")}
                >
                  Don't have an account? Sign up
                </Link>
              </p>
            </div>
          
        </div>
        {/* FORM ENDS */}
      </div>
      {/* END OF MAIN CONTENT */}
    </div>
    // END LOGIN PAGE
  );
};

const mapStateToProps = state => {
  return {
    userid: state.login.userid,
    errorStatus: state.login.error
  };
};
export default connect(mapStateToProps, { loginAction })(LoginPage);
