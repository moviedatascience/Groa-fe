import React from "react";
import { connect } from "react-redux";
import "./register.scss";
import { withRouter } from "react-router-dom";
import axios from "axios";
<<<<<<< HEAD
// import Groa from './Groa-logo-B2.png';
=======
import Groa from "./Groa-logo-B2.png";
>>>>>>> f9f430ff29ed3e75a2f7a9598d8eb2a4f539083a
import GroaWhite from "./GroaWhite.png";
import { Login } from "../../store/actions";

class Register extends React.Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD

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
=======

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
      },
      errorStatus: false
    };

    this.handleChange = this.handleChange.bind(this);
    // this.changeHandler = this.changeHandler.bind(this);
>>>>>>> f9f430ff29ed3e75a2f7a9598d8eb2a4f539083a
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

<<<<<<< HEAD
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
=======

>>>>>>> f9f430ff29ed3e75a2f7a9598d8eb2a4f539083a

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
<<<<<<< HEAD
=======

>>>>>>> f9f430ff29ed3e75a2f7a9598d8eb2a4f539083a
      axios
        .post(
          "http://groabe-env.v3umry9g8h.us-east-1.elasticbeanstalk.com/api/users/register",
          {
<<<<<<< HEAD
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
=======
>>>>>>> f9f430ff29ed3e75a2f7a9598d8eb2a4f539083a
            user_name: this.state.user.user_name,
            password: this.state.user.password
          }
        )
        .then(res => {
<<<<<<< HEAD
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
=======
        //   console.log("token: ", res.data.token);
          
          
          
          axios.post('http://groabe-env.v3umry9g8h.us-east-1.elasticbeanstalk.com/api/users/login', 
          {user_name: this.state.user.user_name, password: this.state.user.password})
          .then(res2 => {
              console.log('nested login successful', res2)

              const userid = res2.data.id;
              this.props.Login(userid);
              console.log('token: ', res2.data.token);
              localStorage.setItem('token', res2.data.token)

              this.props.history.push('/dashboard')
              

          })
          .catch(err2 => {
              console.log(err2)
              // this.props.history.push('/Error')
          })
        })
        .catch(err => {
          console.log("Registration Error", err);
          this.setState({ errorStatus: true });
>>>>>>> f9f430ff29ed3e75a2f7a9598d8eb2a4f539083a
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
<<<<<<< HEAD
            {/* <h1 style={{textAlign: 'center'}}>Your movies,  your way. </h1> */}

            {/* <div className="box1"/>  */}
            {/* <div className="box2">
                                <h5 className='h5text'>Groa Helps you pick the perfect film,</h5>
                                <h5  className='h5text'>So you can save your popcorn for the good stuff.</h5>
                                </div>  */}
=======
>>>>>>> f9f430ff29ed3e75a2f7a9598d8eb2a4f539083a
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
<<<<<<< HEAD
=======

>>>>>>> f9f430ff29ed3e75a2f7a9598d8eb2a4f539083a
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
<<<<<<< HEAD
                  (submitted && !user.confirmpassword ? " has-error" : "")
=======
                  (submitted &&
                  !user.confirmpassword &&
                  user.confirmpassword.length <= 4
                    ? " has-error"
                    : "")
>>>>>>> f9f430ff29ed3e75a2f7a9598d8eb2a4f539083a
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
<<<<<<< HEAD
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
=======
              </div>

              <div className="BottomLogin">
                <button className="LoginBtn">Login </button>
                {registering}
                {this.state.errorStatus ? (
                  <h3>Login Error, try again</h3>
                ) : (
                  <h3>Success</h3>
                )}
              </div>
>>>>>>> f9f430ff29ed3e75a2f7a9598d8eb2a4f539083a
            </form>
          </div>
          {/* end box right */}
        </div>
        {/*ends H1*/}
      </div>
    );
  }
}

<<<<<<< HEAD
const mapStateToProps = state => {
  return {
    userData: state.userData,
    isFetching: state.isFetching,
    error: state.error
  };
};

=======
const mapStateToProps = ({ dashboardMain }) => {
  return {
    userData: dashboardMain.userid,
    isFetching: dashboardMain.isPostingUser,
    error: dashboardMain.isPostingUserError
  };
};
// with withRouter allowd this.props.history.push() to work.
>>>>>>> f9f430ff29ed3e75a2f7a9598d8eb2a4f539083a
export default withRouter(
  connect(mapStateToProps, {
    Login
  })(Register)
);
