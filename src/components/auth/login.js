import React from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

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
        //redirect to Groas dashboard page
        this.props.history.push("/dashboard", { userid: res.data.id }); 
      })
      .catch(err => console.log(err,'errr'));
    }else{
      console.log('need user name')
    
      // const { name, value } = e.target;
      // let errors = this.state.errors;
      // switch (name) {
     
      //   case "user_name":
      //     errors.user_name = value.length < 6 ? "User name must be 6 or more characters long" : "";    
      //     break;
      //   case "password":
      //     errors.password = value.length < 6 ? "Password must be 6 or more characters long" : "";
      //     break;
      //   default:
      //     break;
      // }
      // this.setState({ errors, [name]: value }, () => {});
  

    }
      
  };

  render() {
    const { errors,submitted} = this.state;
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
              <form className="LoginForm" onSubmit={this.loginUser} >
              
              
                <h1 className="textlogin">Log in</h1>
                <input
                  className="input1"
                  type="text"
                  name="user_name"
                  id="user_name"
                  value={this.user_name}
                  onChange={this.handleChange}
                  placeholder="Username or email required"
                />
                {/* ERROR MESSAGES */}
                  {/* Submit Error */}
                {submitted && !errors.user_name && (
                <div className="error">Email is required</div>
                )}
                  {/* Length of username */}
                {errors.user_name && (
                  <span className="error">{errors.user_name}</span>
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
                  {/* Submit Error */}
                {submitted && !errors.user_name && (
                <div className="error">Password is required</div>
                )}
                  {/* Length of password */}
                {errors.password && (
                  <span className="error">{errors.password}</span>
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
                  <button
                    className="BtnLogin"
                    data-test={ifDev("BtnLoginTest")}
                  >
                    Log in
                  </button>

                  {/* {this.state.errors != null ?(
                  <div>try again</div>
                  ):(<div>succes</div>)} */}

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