import React from "react";
import { connect } from "react-redux";
import { registerAction, loginAction } from "../../store/actions";
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
        this.props.registerAction(user, this.props.history)
    }
  }

  render() {
    const { user, submitted } = this.state;
    return (
      <div className="container" data-test={ifDev("register-component")}>
        <div className="registerNav">
          <RegisterNavLinks />
        </div>
        <div className="boxHolder">
          <div className="boxLeft">
            <img className="logo" src={GroaWhite} alt="groa logo" />
          </div>
          <div className="boxRight">
            <form
              className="form"
              data-test={ifDev("registerForm")}
              onSubmit={this.handleSubmit}
            >
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
                <div className="callingError">
                  Username is required to be 6 characters or more{" "}
                </div>
              )}

              {this.props.errorStatus && user.user_name && (
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
                <div className="callingError">
                  Password is required to be 6 characters or more{" "}
                </div>
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
              <div className="bottom-form">
                {/* todo: add Remember functionality */}
                <div className="check-box-container">
                  <input type="checkbox" />
                  <h5>Remember me</h5>
                </div>
                <div className="signup-btn-container">
                  <button className="signup-btn">Sign Up </button>
                </div>
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

const mapStateToProps = state => {
  return {
    registerSuccess: state.register.success,
    userid: state.login.userid,
    errorStatus: state.register.error
  };
};

export default connect(mapStateToProps, { registerAction, loginAction })(Register);
