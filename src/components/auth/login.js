import React from "react";
import { connect } from "react-redux";
import { loginAction } from "../../store/actions/loginAction";
import GroaLogo from "../auth/Groa-logo-B2AA.png";
import { ifDev } from "../../utils/removeAttribute.js";
import LoginNavLinks from "../layout/nav-layouts/LoginNavLinks.js";
import "./_Register.scss";

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
      submitted: false
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    let errors = this.state.errors;

    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
    switch (name) {
      case "user_name":
        errors.user_name =
          value.length < 6 ? "User name must be 6 or more characters long" : "";
        break;
      case "password":
        errors.password =
          value.length < 6 ? "Password must be 6 or more characters long" : "";
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
      this.props.loginAction(this.state.user, this.props.history);
    }
  };

  render() {
    const { errors, submitted, user } = this.state;
    return (
      <div
        className="container login-component"
        data-test={ifDev("login-component")}
      >
        <div className="onboarding-nav login-nav">
          <LoginNavLinks />
        </div>
        <div className="box-container">
          <div className="box-left">
            <img className="logo" src={GroaLogo} alt="Groa Logo" />
          </div>
          {/* END BOX LEFT */}
          <div className="box-right">
            <form
              className="form login-form"
              onSubmit={this.loginUser}
              data-test={ifDev("loginForm")}
            >
              <h2>Log in</h2>
              <input
                className="form-control"
                type="text"
                name="user_name"
                id="user_name"
                value={this.user_name}
                onChange={this.handleChange}
                placeholder="Username"
              />
              {/* ERROR MESSAGES */}
              {/* Submit Error */}

              {this.props.errorStatus && user.user_name && (
                <div className="callingError">Invalid Credentials</div>
              )}

              {submitted && !user.user_name && (
                <div className="callingError">Username is required</div>
              )}
              {/* Length of username */}
              {errors.user_name && (
                <span
                  className="callingError"
                  data-test={ifDev("ErrorUsername")}
                >
                  {errors.user_name}
                </span>
              )}

              <input
                className="form-control"
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
                <div className="callingError">Password is required</div>
              )}
              {/* Length of password */}
              {errors.password && (
                <span
                  className="callingError"
                  data-test={ifDev("ErrorPassword")}
                >
                  {errors.password}
                </span>
              )}

              <div className="bottom-form">
                <div className="text-check">
                  <div className="check-box-container">
                    <input className="checkbox" type="checkbox" />
                    <p>Remember me</p>
                  </div>
                  <div className="forgot-password">
                    <h5>Forgot password?</h5>
                  </div>
                </div>

                <div className="login-btn-container btn-container">
                  <button
                    className="login-btn"
                    data-test={ifDev("BtnLoginTest")}
                  >
                    Log in
                  </button>
                </div>
              </div>
            </form>
          </div>
          {/* END BOX RIGHT */}
        </div>
        {/* END MIDDLE */}
      </div>
      // END LOGIN PAGE
    );
  }
}

const mapStateToProps = state => {
  return {
    userid: state.login.userid,
    errorStatus: state.login.error
  };
};
export default connect(mapStateToProps, { loginAction })(LoginPage);
