import React from 'react';
import { connect } from 'react-redux';


class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
               
                email: '',
                user_name:'',
                password: '',
                confirmPassword: ''
            },
            submitted: false
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

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.email && user.username && user.password && user.ConfirmPassword) {
            this.props.register(user);
        }
    }

    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        return (
            <div className="container"> 

                <h3>Login</h3>
                    
                <div className="H1">
                    
                            <div className="boxLeft">
                                    <div className="text">
                                        <h1>Your movies,  your way. </h1>
                                    </div>

                                    <div className="box1"/> 
                                <div className="box2">
                                <h5 className='h5text'>Groa Helps you pick the perfect film,</h5>
                                <h5  className='h5text'>So you can save your popcorn for the good stuff.</h5>
                                </div> 
                            </div>
                        
                     <div className="boxRight">
                        <form  className="form" onSubmit={this.handleSubmit}> 
                            <h2>Register</h2>

                            <div className={'forms' + (submitted && !user.email ? ' has-error' : '')}></div>
                            <input className="form-control" 
                            type="text" 
                            name="Email" 
                            value={user.Email} 
                            onChange={this.handleChange} 
                            placeholder='Email'
                            />
                            {submitted && !user.Email &&
                                <div className="callingError">Email is required</div>
                            }

                            <div className={'forms' + (submitted && !user.user_name ? ' has-error' : '')}></div>
                            <input className="form-control" 
                            type="text" 
                            name="User_name" 
                            value={user.User_name} 
                            onChange={this.handleChange} 
                            placeholder='Username'
                            />
                            {submitted && !user.User_name &&
                                <div className="callingError">User_name is required</div>
                            }
                        
                            <div className={'forms' + (submitted && !user.password ? ' has-error' : '')}></div>
                            <input className="form-control" 
                            type="password" 
                            name="password" 
                            value={user.password} 
                            onChange={this.handleChange} 
                            placeholder='Password'
                            />
                            {submitted && !user.password &&
                                <div className="callingError">Password is required</div>
                            }
                        
                    
                            <div className={'forms' + (submitted && !user.ConfirmPassword ? ' has-error' : '')}></div>
                            <input className="form-control" 
                            type="password" 
                            name="ConfirmPassword" 
                            value={user.ConfirmPassword} 
                            onChange={this.handleChange} 
                            placeholder='Confirm Password'
                            />
                            {submitted && !user.ConfirmPassword &&
                                <div className="callingError">Confirm Password is required</div>
                            }
                            
                            

                            <div className="checkBox">
                                <div className="CheckB">
                                <input  type="checkbox"/>
                                </div> 
                            
                            <h5>Remember me</h5>
                            </div>
            
                            <h4> _________________________  or  ________________________</h4>

                            <button className="LogBtn">Login with Google</button>
                            <button className="LogBtn">Login with Facebook</button>
                            <button className="LogBtn">Login with Reddit</button>
                            
                            <div className="BottomLogin">
                                <button className="LoginBtn">Login </button>
                                {registering}
                            </div>
                    
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

export default connect
(mapStateToProps)(Register);