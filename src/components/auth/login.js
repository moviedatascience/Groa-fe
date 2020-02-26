import React from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth'

import { connect } from 'react-redux';
import {loginAction} from '../../store/actions/loginAction';
import './login.scss';
import GroaLogoBen from '../../GroaLogoBen.png'

class LoginPage extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      user: {
        user_name: '',
        password: ''
      },
      errors: {
        user_name: '',
        password: '' 
      }
      
  };


  }
     
  
    handleChange = e => {
      const { name, value} = e.target;
      let errors = this.state.errors;
      e.preventDefault();
      this.setState({
          user: {
          ...this.state.user,
          [e.target.name]: e.target.value
          },
      });
      switch (name) {
        case 'user_name' :
          errors.user_name =
        value.length < 5
        ? 'must be a valid user name'
        : '';
        break;
        case 'password':
          errors.password =
          value.length < 4
          ? 'Password must be more than 4 characters long'
          : '';
          break;
          default:
            break;
      }
  
      this.setState({errors, [name]: value}, ()=> {
        console.log(errors)
      })
  };
  
 
  
  loginUser = e => {
    e.preventDefault();
    //console.log(user)

      axiosWithAuth()
      .post("/api/users/login", this.state.user)
      .then(res => {

        localStorage.setItem('token', res.data.payload);
        console.log(res.data.payload)
        // redirect to Groas dashboard page
        if (this.user.user_name && this.user.password) {
          this.props.history.push('/');
        }
    
      })
      .catch(err => console.log(err));
      console.log('Login error post')
  };
  

  render() {
    const {errors} = this.state;
  return (
   
    <div className='LoginPage'>
      {/* Container - ENTIRE PAGE */}
      <div className='container'>
        <div className='bartop'>
           
              <img className='Logo' src={GroaLogoBen} alt='GroaLogo'/>
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
                    
                  </div>
                </div>
          </div>

          <div className='boxRight'>
          <form className='LoginForm' onSubmit={this.loginUser}>
          <h1 className='textlogin'>Log in</h1>
        
          <div className={'a' + (this.submitted && !this.user.user_name ? 'error' : '')}/>
          <input className='input1'  
              type="text"
              name="user_name"
              value={this.user_name}
              onChange={this.handleChange}
              placeholder="Username or email required"
              errorMessage='username required'
            />
{/* ERROR MESSAGE */}

      {errors.user_name.length > 0 && 
        <span className='error'>{errors.user_name}</span>}
  
            <input className='input1'
              type="text"
              name="password"
              value={this.password}
              onChange={this.handleChange}
              placeholder="Password"
            />

      {errors.password.length > 0 && 
        <span className='error'>{errors.password}</span>}
            
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

