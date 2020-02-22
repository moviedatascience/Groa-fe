import React from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth'

import { connect } from 'react-redux';
import {loginAction} from '../../store/actions/loginAction';
import './login.scss';

class LoginPage extends React.Component {
 
        state = {
          credentials: {
            username: '',
            password: '',
          }
      }
  
    handleChange = e => {
      this.setState({
          credentials: {
          ...this.state.credentials,
          [e.target.name]: e.target.value
          }
      });
  
  };


  
loginUser = e => {
    e.preventDefault();
    //console.log(user)
      axiosWithAuth()
      .post("/api/login", this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        console.log(res.data.payload)
        // redirect to Groas dashboard page
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
      console.log('Login error post')
  };
  

  render() {

  return (
    <div className='LoginPage'>
      {/* Container - ENTIRE PAGE */}
      <div className='container'>
        <div className='bartop'>
          <div className='Logo'>Logo</div>
          <div className='Register'>Register</div>
        </div>
        
        <div className='Middle'>
          <div className='boxLeft'>
            
            <h1>Your movies,<br/> your way.</h1>
          
            {/* <div className='box1'>picture</div>
            <div className='box2'>Groa Helps</div> */}
          </div>

          <form className='LoginForm' onSubmit={this.loginUser}>
          <h1 className='textlogin'>Log in</h1>

            <input className='input1'
              type="text"
              name="username"
              onChange={this.handleChange}
              placeholder="Emal"
              value={this.username}
            />

            <input className='input1'
              type="text"
              name="password"
              onChange={this.handleChange}
              placeholder="Password"
              value={this.password}
            />
            
            <div className='text'>
                    <div className='CheckBoxContainer'>
                    <input className='Checkbox' type="checkbox"/>
                    </div>
                    <h5> Remember me</h5>
                    <h5>Forgot password?</h5>
            </div>

            <h4 className='textOr'>or</h4>

            {/* Log in Google */}
            <button className='BtnLoginWith'>Log in with Google</button>
            {/* Log in Facebook */}
            <button className='BtnLoginWith'>Log in with Facebook</button>
            {/* Log in Reddit */}
            <button className='BtnLoginWith'>Log in with Reddit</button>

            <div className='BtnContainer'>
            <button className='BtnLogin'>Log in</button>
            </div>

            </form>
          </div> 
          {/* END MIDDLE */}
      </div>
      {/* END CONTAINER */}
    </div>
    // END LOGIN PAGE
   )
 };
}

const mapStateToProps = state => {
    return {
        userData: state.userData,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    {loginAction}
)(LoginPage);

