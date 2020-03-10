import React from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth.js";
import { ifDev } from "../../utils/removeAttribute.js";

// styling imports
import "./_Register.scss";
import GroaWhite from "./GroaWhite.png";
// Navbar Register
import RegisterNavLinks from "../layout/nav-layouts/RegisterNavLinks";


class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: "",
        user_name: "",
        password: "",
        confirmpassword: ""
      },
      submitted: false,
      errorStatus: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let user = {
      user_name: this.state.user.user_name,
      password: this.state.user.password,
      email: this.state.user.email
    };
    this.setState({ submitted: true });
    if (
      this.state.user.email &&
      this.state.user.user_name.length >= 6 &&
      this.state.user.password.length >= 6 &&
      this.state.user.confirmpassword === this.state.user.password
    ) {
      axiosWithAuth()
        .post("https://api.groa.us/api/users/register", user)
        .then(() => {
          user = {
            user_name: this.state.user.user_name,
            password: this.state.user.password
          };
          axiosWithAuth()
            .post("https://api.groa.us/api/users/login", user)
            .then(res2 => {
              const userid = res2.data.id;
              localStorage.setItem("token", res2.data.token);
              this.props.updateToken(localStorage.getItem("token"));
              this.props.history.push(
                "/dashboard",
                { userid: userid },
                { pathname: "/dashboard" }
              );
            })
            .catch(err2 => {
              console.log(err2, "Username already used");
            });
        })
        .catch(err => {
          console.log("Registration Error", err.response.data.errorMessage);
          this.setState({ errorStatus: true });
        });
    }
  }

  render() {
    const { user, submitted, errorStatus } = this.state;

    return (
      <div className="container" data-test={ifDev("register-component")}>
        <div className='registerNav'><RegisterNavLinks/></div>
          <div className='boxHolder'>
          <div className="boxLeft">
            <img className="logo" src={GroaWhite} alt="groa logo" />
          </div>
          <div className="boxRight">
            <form className="form" data-test={ifDev("registerForm")} onSubmit={this.handleSubmit}>
              <h2>Register</h2>
              {/* divs with changing classnames updates error handling for form */}
              <div
                className={
                  "forms" + (submitted && !user.email ? " has-error" : "")
                }
              ></div>
              <input
                className="form-control"
                type="email"
                name="email"
                value={user.email}
                onChange={this.handleChange}
                placeholder="Email"
              />
              {submitted && !user.email && (
                <div className="callingError">Email is required</div>
              )}
              
              <div
                className={
                  "forms" + (submitted && !user.user_name ? " has-error" : "")
                }
              ></div>
              <input
                className="form-control"
                type="text"
                name="user_name"
                value={user.user_name}
                onChange={this.handleChange}
                placeholder="Username"
              />
              {submitted && !user.user_name && (
                <div className="callingError">Username is required</div>
              )}

               {submitted && user.user_name.length < 6 && (
                <div className="callingError">Username is required to be 6 characters or more </div>
              )}
              
              {errorStatus && user.user_name && (
                <div className="callingError">Username is already in use</div>
              )}

              <div
                className={
                  "forms" + (submitted && !user.password ? " has-error" : "")
                }
              ></div>

              <input
                className="form-control"
                type="password"
                name="password"
                value={user.password}
                onChange={this.handleChange}
                placeholder="Password"
              />
              {submitted && !user.password && (
                <div className="callingError">Password is required</div>
              )}
              {submitted && user.password.length < 6 && (
                <div className="callingError">Password is required to be 6 characters or more </div>
              )}

              <div
                className={
                  "forms" +
                  (submitted && !user.confirmpassword ? " has-error" : "")
                }
              ></div>
              <input
                className="confirmPass form-control"
                type="password"
                name="confirmpassword"
                value={user.confirmpassword}
                onChange={this.handleChange}
                placeholder="Confirm Password"
              />
              {submitted && user.confirmpassword !== user.password && (
                <div className="callingError">Passwords do not match</div>
              )}

              <div className="BottomLogin">
                <button className="LoginBtn">Login </button>
              </div>
            </form>
          </div>
          {/* end box right */}
          </div>
          {/* END boxHolder */}
      </div>
      //END CONTAINER
    );
  }
}

export default Register;