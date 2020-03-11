import React from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { loginAction } from "../../store/actions/loginAction";
import "./login.scss";
import Groa2 from "../auth/Groa-logo-B2AA.png";
import { ifDev } from "../../utils/removeAttribute.js";



class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        user_name: "",
        password: ""
      },
      errors: {
        user_name: "",
        password: ""
      },
      submitted: false,
      errorStatus: false,
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    let errors = this.state.errors;
    
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      },
      
    });
    switch (name) {
     
      case "user_name":
        errors.user_name = value.length < 6 ? "User name must be 6 or more characters long" : "";    
        break;
      case "password":
        errors.password = value.length < 6 ? "Password must be 6 or more characters long" : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value }, () => {});
  };



  loginUser = e => {
    e.preventDefault();
    this.setState({ submitted: true });
    if (this.state.user.user_name && this.state.user.password) {
      axiosWithAuth()
      .post("/login", this.state.user)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        // updates token to refresh navbar
        this.props.updateToken(localStorage.getItem("token"));
        // sets up userid in app
        this.props.updateUserid(res.data.id);
        //redirect to Groas dashboard page
<<<<<<< HEAD
        if (this.state.user.user_name && this.state.user.password) {
          this.props.history.push(`/${res.data.id}/recommended`);
        }
=======
        this.props.history.push("/dashboard", { userid: res.data.id }); 
>>>>>>> d2ef72b5a2665e03e9672658ade3eebccd055de6
      })
      .catch(err => {console.log(err.response.data.errorMessage,'errr')
      this.setState({errorStatus : true})
    });
    }     
  };

  render() {
    const { errors,submitted,user,errorStatus} = this.state;
    return (
      <div className="LoginPage" data-test={ifDev("login-component")}>
        {/* Container - ENTIRE PAGE */}
        <div className="containerLogin">
          <div className="bartop"></div>

          <div className="Middle">
            <div className="boxLeft">
              <img className="Logo2" src={Groa2} alt="GroaLogo" />
            </div>
            {/* END BOX LEFT */}
            <div className="boxRight">
              <form className="LoginForm" onSubmit={this.loginUser} data-test={ifDev("loginForm")} >
              
                <h1 className="textlogin">Log in</h1>
                <input
                  className="input1"
                  type="text"
                  name="user_name"
                  id="user_name"
                  value={this.user_name}
                  onChange={this.handleChange}
                  placeholder="Username"
                />
                {/* ERROR MESSAGES */}
                  {/* Submit Error */}
                  
                {errorStatus && user.user_name && (
                <div className="error">Invalid Credentials</div>
                )}

                {submitted && !user.user_name && (
                <div className="error">Username is required</div>
                )}
                  {/* Length of username */}
                {errors.user_name && (
                  <span className="error" data-test={ifDev("ErrorUsername")}>{errors.user_name}</span>
                )}

                <input
                  className="input1"
                  type="password"
                  name="password"
                  id="password"
                  value={this.password}
                  onChange={this.handleChange}
                  placeholder="Password"
                />
                {/* ERROR MESSAGES */}
                  {/* Submit Error */}
                {submitted && !user.password && (
                <div className="error">Password is required</div>
                )}
                  {/* Length of password */}
                {errors.password && (
                  <span className="error" data-test={ifDev("ErrorPassword")}>{errors.password}</span>
                )}

                <div className="TextandCheck">
                  <div className="CheckBoxContainer">
                    <input className="Checkbox" type="checkbox" />
                  </div>
                  <h5> Remember me</h5>
                  <div className="TextandCheck2">
                    <h5>Forgot password?</h5>
                  </div>
                </div>

                <div className="BtnContainer">
                  <Link to="/register">Don't have an account?</Link>
                  <button
                    className="BtnLogin"
                    data-test={ifDev("BtnLoginTest")}
                  >
                    Log in
                  </button>

                </div>
              </form>
            </div>
            {/* END BOX RIGHT */}
          </div>
          {/* END MIDDLE */}
        </div>
        {/* END CONTAINER */}
      </div>
      // END LOGIN PAGE
    );
  }
}

const mapStateToProps = state => {
  return {
    userData: state.userData,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { loginAction })(LoginPage);
