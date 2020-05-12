import React, { useState, useEffect} from "react";
import { connect } from "react-redux";
import { registerAction, loginAction } from "../../store/actions";
import { ifDev } from "../../utils/removeAttribute.js";
import { Link, useHistory } from "react-router-dom";


//For validation
import { useForm } from "react-hook-form";
import * as Yup from "yup";

// styling imports
import Picture3 from "../../img/couch-popcorn.png";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// Navbar Register
import RegisterNavLinks from "../layout/nav-layouts/RegisterNavLinks";
//OKTA
import { useOktaAuth } from '@okta/okta-react';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="white" to="https://github.com/Lambda-School-Labs/Groa-fe">
        GROÁ
      </Link>{' '}
      2020
      {'.'}
      <Link color="white" to="https://groa.us/privacy-policy">
        GROÁ Privacy Policy
      </Link>
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
  textField: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "2%",
    width: "100%",
    padding: "0",
  },
}));

// Validation Schema
const RegisterSchema = Yup.object().shape({
  firstName: Yup.string().required("firstName is required"),
  lastName: Yup.string().required("lastName is required"),
  email: Yup.string().email().required("Email is required"),
});

const Register = (props) => {
  const history = useHistory();
  const { authState, authService } = useOktaAuth();
  const login = async () => authService.login('/');
  const logout = async () => authService.logout('/');

  //if user already Authenticated, loginAction redirects to to explore page
  useEffect(() => {
    console.log('))))))))))))))))))))))))))))))))))))))))))))))',authState.isAuthenticated)      
      authService.getUser()
        .then((info) => {
           props.loginAction(authState.accessToken, info.sub, history)  
      })
      .catch(err => console.log("Error fetching User info in UseEffect", err))
  }, [authState]);



  const [users, setUsers] = useState({
    email: "",
    firstName: "",
    lastName: "",
  });
  const { register, handleSubmit, errors } = useForm({
    validationSchema: RegisterSchema,
  });
  const classes = useStyles();

  const handleChange = (e) => {
    setUsers({
      ...users,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    let user = {
      firstName: users.firstName,
      lastName:users.lastName,
      email: users.email,
    };
    console.log("user before register button", user);
    props.registerAction(user, props.history);
  };

  return (
    <div
      className="container register-component"
      data-test={ifDev("register-component")}
    >
      {/* NAVIGATION */}
      <div className="onboarding-nav registerNav">
        <RegisterNavLinks />
      </div>
      {/* MAIN PAGE CONTENT */}
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
        {/* FORM STARTS */}
        <div className="box-right">
          {/* <Grid container spacing={1}> */}
            <form
              className="form"
              data-test={ifDev("registerForm")}
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* <Grid className="register-inputs"> */}
              {/* <Grid container item xs={12}> */}
              
              {errors.email && errors.email.type === "required" && (
                <p>An email is required</p>
              )}
              {/* </Grid> */}
              {/* <Grid container item xs={12}> */}
              <TextField
                className={classes.textField}
                name="firstName"
                value={users.firstName}
                onChange={handleChange}
                label="First Name"
                variant="outlined"
                inputRef={register}
              />
              {errors.firstName && errors.firstName.type === "required" && (
                <p>First Name is required</p>
              )} 
              <TextField
                className={classes.textField}
                name="lastName"
                value={users.lastName}
                onChange={handleChange}
                label="Last Name"
                variant="outlined"
                inputRef={register}
              />
                {errors.lastName && errors.lastName.type === "required" && (
                <p>Last Name is required</p>
                )} 
              <TextField
                className={classes.textField}
                name="email"
                value={users.email}
                onChange={handleChange}
                label="Email"
                variant="outlined"
                inputRef={register}
              />
              {errors.email && errors.email.type === "required" && (
                <p>Email is required</p>
              )} 
              {/* </Grid> */}
              {/* <Grid container item xs={12}> */}
              {/* <TextField
                className={classes.textField}
                name="password"
                type="password"
                value={users.password}
                onChange={handleChange}
                label="Password"
                variant="outlined"
                inputRef={register}
              /> */}
              {/* {errors.password && errors.password.type === "required" && (
                <p>Password required</p> */}

              {/* {errors.password && errors.password.type === "min" && (
                <p>Password must be at least 6 characters long</p>
              )} */}
              {/* </Grid> */}
              {/* <Grid container item xs={12}> */}
              {/* <TextField
                className={classes.textField}
                name="confirmpassword"
                type="password"
                value={users.confirmpassword}
                onChange={handleChange}
                label="Confirm Password"
                variant="outlined"
                inputRef={register}
              /> */}
              {/* {errors.confirmpassword &&
                errors.confirmpassword.type === "required" && (
                  <p>Password Confirmation Required</p>
                )}
              {errors.confirmpassword &&
                errors.confirmpassword.type === "oneOf" && (
                  <p>Password does not match</p>
                )} */}
              {/* </Grid> */}
              {/* </Grid> */}
              <div className="bottom-form">
                <div className="signup-btn-container btn-container">
                  <button className="signup-btn">Sign Up </button>
                  <p className='subtitle fancy'><span>OR</span></p>
                <div className="google-btn">
                <div className="google-icon-wrapper">
                     <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google Icon"/>
                       </div>
                    <p className="btn-text"><b>Sign up with Google</b></p>
                    </div>
                    <div className="fb-btn">
                <div class="fb-icon-wrapper">
                     <img className="fb-icon" src="data:image/png;base64,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" alt="Facebook Icon"/>
                       </div>
                    <p className="btn-text"><b>Sign up with Facebook</b></p>
                    </div>
                </div>
              </div>
              <div className="bottomAccount">
                <Link
                  className="register link"
                  onClick={login}
                  data-test={ifDev("loginBtn")}
                >
                  <p> Login</p>
                  <p>Already have an account?</p>
                </Link>
              </div>
            </form>
          {/* </Grid> */}
          {/* FORM ENDS */}
        </div>
      </div>{" "}
      {/* PAGE CONTAINER */}
      <Box mt={3}>
        <Copyright />
      </Box>
    </div>
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
