import React, { useState } from "react";
import { connect } from "react-redux";
import { registerAction, loginAction } from "../../store/actions";
import { ifDev } from "../../utils/removeAttribute.js";
import { Link } from "react-router-dom";

//For validation
import { useForm } from "react-hook-form";
import * as Yup from "yup";

// styling imports
import Picture3 from "../../img/couch-popcorn.png";
import { TextField, Checkbox, Grid } from "@material-ui/core";

// Navbar Register
import RegisterNavLinks from "../layout/nav-layouts/RegisterNavLinks";

const initialUser = {
  user: {
    email: "",
    user_name: "",
    password: "",
    confirmpassword: "",
  },
};

const RegisterSchema = Yup.object().shape({
  user_name: Yup.string().required("Username is required"),
  email: Yup.string().email().required("email is required"),
  password: Yup.string().min(6).required("password is required"),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required(),
});

const Register = (props) => {
  const [users, setUsers] = useState(initialUser.user);
  const { register, handleSubmit, errors } = useForm({
    validationSchema: RegisterSchema,
  });

  const handleChange = (e) => {
    setUsers({
      user: {
        ...users,
        [e.target.name]: e.target.value,
      },
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let user = {
      user_name: users.user_name,
      email: users.email,
      password: users.password,
    };
    props.registerAction(user);
  };

  return (
    <div
      className="container register-component"
      data-test={ifDev("register-component")}
    >
      <div className="onboarding-nav registerNav">
        <RegisterNavLinks />
      </div>
      <div className="boxHolder box-container">
        <div className="box-left">
          <div className="text-container">
            <h1>
              Your movies, <br /> your way.
            </h1>
            <h5>
              {" "}
              Groa helps you pick the perfect film... so you <br /> can save
              your popcorn for the good stuff.
            </h5>
          </div>
          <div className="image-wrapper">
            <img className="logo" src={Picture3} alt="Graphic" />
          </div>
        </div>
        <div className="box-right">
          <Grid container spacing={1}>
            <form
              className="form"
              data-test={ifDev("registerForm")}
              onSubmit={handleSubmit(onSubmit)}
            >
              <Grid className="register-inputs">
                <Grid container item xs={12}>
                  <TextField
                    name="email"
                    value={users.email}
                    onChange={handleChange}
                    label="Email"
                    variant="outlined"
                    inputRef={register}
                  />
                  {errors.email && errors.email.type === "required" && (
                    <p>An email is required</p>
                  )}
                </Grid>
                <Grid container item xs={12}>
                  <TextField
                    name="user_name"
                    value={users.user_name}
                    onChange={handleChange}
                    label="Username"
                    variant="outlined"
                    inputRef={register}
                  />
                  {errors.user_name && errors.user_name.type === "required" && (
                    <p>Username is required</p>
                  )}
                </Grid>
                <Grid container item xs={12}>
                  <TextField
                    name="password"
                    type="password"
                    value={users.password}
                    onChange={handleChange}
                    label="Password"
                    variant="outlined"
                    inputRef={register}
                  />
                  {errors.password && errors.password.type === "required" && (
                    <p>Password required</p>
                  )}
                  {errors.password && errors.password.type === "min" && (
                    <p>Password must be at least 6 characters long</p>
                  )}
                </Grid>
                <Grid container item xs={12}>
                  <TextField
                    name="confirmpassword"
                    type="password"
                    value={users.confirmpassword}
                    onChange={handleChange}
                    label="Confirm Password"
                    variant="outlined"
                    inputRef={register}
                  />
                  {errors.confirmpassword &&
                    errors.confirmpassword.type === "required" && (
                      <p>Password Confirmation Required</p>
                    )}
                  {errors.confirmpassword &&
                    errors.confirmpassword.type === "oneOf" && (
                      <p>Password does not match</p>
                    )}
                </Grid>
              </Grid>
              <div className="bottom-form">
                {/* todo: add Remember functionality */}
                <div className="check-box-container">
                  <Checkbox
                    color="primary"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                  <p>Remember me</p>
                </div>
                <div className="signup-btn-container btn-container">
                  <button className="signup-btn">Sign Up </button>
                </div>
              </div>
              <div className="bottomAccount">
                <Link
                  className="loginAccount"
                  onClick={handleSubmit}
                  data-test={ifDev("loginBtn")}
                  to="/login"
                >
                  Already have an account?
                </Link>
              </div>
            </form>
          </Grid>
        </div>
        {/* end box right */}
      </div>
      {/* END boxHolder */}
    </div>
    //END CONTAINER
  );
};

const mapStateToProps = (state) => {
  return {
    registerSuccess: state.register.success,
    userid: state.login.userid,
    errorStatus: state.register.error,
  };
};

export default connect(mapStateToProps, { registerAction, loginAction })(
  Register
);
