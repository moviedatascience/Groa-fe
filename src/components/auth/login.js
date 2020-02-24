import React from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth'

import { connect } from 'react-redux';
import {loginAction} from '../../store/actions/loginAction';
import './login.scss';
import GroaLogo from '../../GroaLogo.png'

class LoginPage extends React.Component {
 
  
        state = {
          errors:[],
          credentials: {
            email: '',
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

  validate(email, password) {
    const errors = [];
    if (email.length === 0) {
      errors.push("Name can't be empty");
    }
    return errors;
  }
  
  
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
           
              <img className='Logo' src={GroaLogo} alt='GroaLogo'/>
              <h2 className='Register'>Register</h2>     
        </div>
        
        <div className='Middle'>
          <div className='boxLeft'>
            <h1 className='Text'>Your movies,<br/> your way.</h1>
                <div className='box1'/>
                <div className='box2'>
                  <div className='box2b'>
                    <div className='h6text1'>Groa helps you pick the perfect film.</div>
                    <div className='h6text2'>So you can save your popcorn for the good stuff.</div>
                    {/* <h6 className='h6text1'>Groa helps you pick the perfect film.</h6>
                    <h6  className='h6text2'>So you can save your popcorn for the good stuff.</h6> */}
                  </div>
                </div>
          </div>

          <div className='boxRight'>
          <form className='LoginForm' onSubmit={this.loginUser}>
          <h1 className='textlogin'>Log in</h1>
          
            <input className='input1'
              type="text"
              name="email"
              onChange={this.handleChange}
              placeholder="Email"
              value={this.email}
            />
           
            
            {/* <p className="error">er{this.error}</p>
            {this.email && this.errors.email && (
          <p className="error">{this.errors.email}</p>
          )} */}

            <input className='input1'
              type="text"
              name="password"
              onChange={this.handleChange}
              placeholder="Password"
              value={this.password}
            />
            
            <div className='TextandCheck'>
                    <div className='CheckBoxContainer'>
                        <input className='Checkbox' type="checkbox"/>
                    </div>
                    <h5> Remember me</h5>
                     
                    {/* <h5>Forgot password?</h5> */}
                    <div className='TextandCheck2'>
                      <h5>Forgot password?</h5>
                    </div>
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
            {/* END BOX RIGHT */}
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

