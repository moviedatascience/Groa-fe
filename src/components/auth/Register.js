import React from "react";
import { connect } from "react-redux";
import { registerAction, loginAction } from "../../store/actions";
import { ifDev } from "../../utils/removeAttribute.js";
import { Link } from "react-router-dom";

// styling imports
import Picture3 from "../../img/couch-popcorn.png";
import { TextField, Checkbox, Grid } from "@material-ui/core";

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
        confirmpassword: "",
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
        [name]: value,
      },
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let user = {
      user_name: this.state.user.user_name,
      password: this.state.user.password,
      email: this.state.user.email,
    };
    this.setState({ submitted: true });
    if (
      this.state.user.email &&
      this.state.user.user_name.length >= 6 &&
      this.state.user.password.length >= 6 &&
      this.state.user.confirmpassword === this.state.user.password
    ) {
      this.props.registerAction(user, this.props.history);
    }
  }

  render() {
    const { user, submitted } = this.state;
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
                onSubmit={this.handleSubmit}
              >
                <Grid className="register-inputs">
                  <Grid container item xs={12}>
                    <TextField
                      name="email"
                      value={user.email}
                      onChange={this.handleChange}
                      required
                      label="Email"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid container item xs={12}>
                    <TextField
                      name="user_name"
                      value={user.user_name}
                      onChange={this.handleChange}
                      required
                      label="Username"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid container item xs={12}>
                    <TextField
                      name="password"
                      value={user.password}
                      onChange={this.handleChange}
                      required
                      label="Password"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid container item xs={12}>
                    <TextField
                      name="confirmPassword"
                      value={user.confirmpassword}
                      onChange={this.handleChange}
                      required
                      label="Confirm Password"
                      variant="outlined"
                    />
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
                    onClick={this.handleSubmit}
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
  }
}

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
