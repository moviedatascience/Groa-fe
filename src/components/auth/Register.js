import React from "react";
import { connect } from "react-redux";
import "./register.scss";
import { withRouter } from "react-router-dom";
import axios from "axios";
// import Groa from './Groa-logo-B2.png';
import GroaWhite from "./GroaWhite.png";
import { Login } from "../../store/actions";

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
      input: {
        file: "",
        movies: ""
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  }

  changeHandler(e) {
    let data = new FormData();
    data.append("movies", e.target.files[0], e.target.files[0].name);

    console.log("data change handler", data);
    const { input } = this.state;
    this.setState({
      input: {
        [e.target.name]: data
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    console.log(
      "username, and password",
      this.state.user.user_name,
      this.state.user.password
    );
    // const { user } = this.state;
    if (
      this.state.user.email &&
      this.state.user.user_name &&
      this.state.user.password &&
      this.state.user.confirmpassword
    ) {
      // this.props.register(user);
      console.log(
        "username, and password",
        this.state.user.user_name,
        this.state.user.password
      );
      axios
        .post(
          "http://groabe-env.v3umry9g8h.us-east-1.elasticbeanstalk.com/api/users/register",
          {
            headers: {
              Pragma: "public",
              Expires: 0,
              "Cache-Control":
                "must-revalidate, post-check=0, pre=check=0, public",
              "Content-description": "File Transfer",
              "Content-type": "application/octet-stream",
              "Content-Disposition": "attachment;",
              "Content-Transfer-Encoding": "binary"
            }
          },
          {
            user_name: this.state.user.user_name,
            password: this.state.user.password
          }
        )
        .then(res => {
          localStorage.setItem("token", res.data.token);
          const userid = res.data.id;
          this.props.Login(userid);
          this.props.history.push("/dashboard");
          // axios.post('http://groabe-env.v3umry9g8h.us-east-1.elasticbeanstalk.com/api/users/login', {
          //     headers: {
          //         "Pragma": "public",
          //         "Expires": 0,
          //         "Cache-Control": "must-revalidate, post-check=0, pre=check=0",
          //         "Cache-Control": "public",
          //         "Content-description": "File Transfer",
          //         "Content-type": "application/octet-stream",
          //     }},
          // {user_name: this.state.user.user_name, password: this.state.user.password})
          // .then(res2 => {
          //     console.log('nested login successful', res)

          //     const userid = res.data.id;
          //     this.props.Login(userid);
          //     localStorage.setItem('token', res.data.token)

          //     this.props.history.push('/dashboard')
          //     console.log('form data', this.state.input.movies)

          //     // axios.post(`http://groabe-env.v3umry9g8h.us-east-1.elasticbeanstalk.com/api/users/${userid}/upload`, this.state.input.movies, {
          //     //     headers:{
          //     //         'Content-Type':'multipart/form-data'
          //     //     }
          //     // })
          //     // .then(res => {
          //     //     console.log(res);

          //     // }).catch(err => {
          //     //     console.log(err)
          //     // })

          // })
          // .catch(err2 => {
          //     console.log(err2)
          //     // this.props.history.push('/Error')
          // })
        })
        .catch(err => {
          console.log("Registration Error", err);
          // this.props.history.push('/Error')
        });
    }
  }

  render() {
    const { registering } = this.props;
    const { user, submitted } = this.state;
    const { location, history } = this.props;
    return (
      <div className="container">
        <h3>Login</h3>

        <div className="H1">
          <div className="boxLeft">
            <img className="logo " src={GroaWhite} alt="groa logo" />
            {/* <h1 style={{textAlign: 'center'}}>Your movies,  your way. </h1> */}

            {/* <div className="box1"/>  */}
            {/* <div className="box2">
                                <h5 className='h5text'>Groa Helps you pick the perfect film,</h5>
                                <h5  className='h5text'>So you can save your popcorn for the good stuff.</h5>
                                </div>  */}
          </div>

          <div className="boxRight">
            <form className="form" onSubmit={this.handleSubmit}>
              <h2>Register</h2>

              <div
                className={
                  "forms" + (submitted && !user.email ? " has-error" : "")
                }
              ></div>
              <input
                className="form-control"
                type="text"
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

              <div
                className={
                  "forms" +
                  (submitted && !user.confirmpassword ? " has-error" : "")
                }
              ></div>
              <input
                className="confirmPass"
                className="form-control"
                type="password"
                name="confirmpassword"
                value={user.confirmpassword}
                onChange={this.handleChange}
                placeholder="Confirm Password"
              />
              {submitted && !user.confirmpassword && (
                <div className="callingError">Confirm Password is required</div>
              )}

              <div className="checkBox">
                <div className="CheckB">
                  <input type="checkbox" />
                </div>

                <h5>Remember me</h5>
                <div className="BottomLogin">
                  <button className="LoginBtn">Login </button>
                  {registering}
                </div>
              </div>

              {/* <h4> _________________________  or  ________________________</h4> */}

              {/* <button className="LogBtn">Login with Google</button>
                            <button className="LogBtn">Login with Facebook</button>
                            <button className="LogBtn">Login with Reddit</button>
                             */}
              {/* <div className="form-hover">
                                <form className="LogBtn" //id="zip-form"           
                                onSubmit = {this.handleSubmit}> */}
              {/* <input
                                        className="LogBtn"
                                        id="zip-input"
                                        // className='movie-input'
                                        type='file'
                                        placeholder='letterbox csv file here'
                                        name = 'movies'
                                        value= {this.state.input.movieName}  // im not sure why this works but it does.
                                        onChange={this.changeHandler}
                                    
                                    
                                    /> */}

              {/* <p className="LogBtn">upload your letterboxd csv file here to get all past movie ratings</p> */}
              {/* </form>
                            </div> */}
            </form>
          </div>
          {/* end box right */}
        </div>
        {/*ends H1*/}
      </div>
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

export default withRouter(
  connect(mapStateToProps, {
    Login
  })(Register)
);
