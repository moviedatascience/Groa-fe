import React from 'react';
import { connect } from 'react-redux';
import './register.scss'
import { axiosWithAuth } from '../../utils/axiosWithAuth.js';
import { withRouter } from 'react-router-dom'; 
import axios from 'axios';

class Register extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {
               
                email: '',
                user_name:'',
                password: '',
                confirmpassword: ''
            },
            submitted: false,
            input: {
                file:"",
                movies:""
            },
        };

        this.handleChange = this.handleChange.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value)
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
        
        let data = new FormData()
        data.append('movies', e.target.files[0] , e.target.files[0].name)

        console.log('data change handler', data);
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
        console.log('username, and password', this.state.user.username, this.state.user.password)
        // const { user } = this.state;
        if (this.state.user.email && this.state.user.username && this.state.user.password && this.state.user.confirmpassword) {
            // this.props.register(user);
            console.log('username, and password', this.state.user.username, this.state.user.password)
            
            axiosWithAuth()
            .post('/register', {username: this.state.user.username, password: this.state.user.password})
            .then(res => {
                axiosWithAuth()
                .post('/login', {username: this.state.user.username, password: this.state.user.password})
                .then(res2 => { 
                    console.log('nested login successful', res)
                    localStorage.setItem('token', res.data.token)
                    const userid = res.data.id;
                    this.props.history.push('/dashboard')
                    
                    
                    console.log('form data', this.state.input.movies)
                  

                    axios.post(`http://groabe-env.v3umry9g8h.us-east-1.elasticbeanstalk.com/api/users/${userid}/uploading`, this.state.input.movies, {
                        headers:{
                            'Content-Type':'multipart/form-data'  
                        }
                    })
                    .then(res => { 
                        console.log(res);
                        
                    }).catch(err => { 
                        console.log(err)
                    })
                    
                })
                .catch(err2 => { 
                    console.log(err2)
                    this.props.history.push('/Error')
                })
                
            })
            .catch(err => {
                console.log('Registration Error', err)
                this.props.history.push('/Error')
            })

            

        }
    }

    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        const { location, history } = this.props;
        return (
            <div className="container"> 

                <h3>Login</h3>
                    
                <div className="H1">
                    
                            <div className="boxLeft">
                                    <div className="text">
                                        
                                    </div>

                                    <div className="box1"/> 
                                <div className="box2">
                                </div>  
                                
                            </div>

                        {/* the input boxes  */}

                     <div className="boxRight">
                        <form  className="form" onSubmit={this.handleSubmit}> 
                            <h2>Register</h2>

                            <div className={'forms' + (submitted && !user.email ? ' has-error' : '')}></div>
                            <input className="form-control" 
                            type="text" 
                            name="email" 
                            value={user.email} 
                            onChange={this.handleChange} 
                            placeholder='Email'
                            />
                            {submitted && !user.email &&
                                <div className="callingError">Email is required</div>
                            }

                            <div className={'forms' + (submitted && !user.user_name ? ' has-error' : '')}></div>
                            <input className="form-control" 
                            type="text" 
                            name="username" 
                            value={user.username} 
                            onChange={this.handleChange} 
                            placeholder='Username'
                            />
                            {submitted && !user.username &&
                                <div className="callingError">Username is required</div>
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
                        
                    
                            <div className={'forms' + (submitted && !user.confirmpassword ? ' has-error' : '')}></div>
                            <input className ="confirmPass" className="form-control" 
                            type="password" 
                            name="confirmpassword" 
                            value={user.confirmpassword} 
                            onChange={this.handleChange} 
                            placeholder='Confirm Password'
                            />
                            {submitted && !user.confirmpassword &&
                                <div className="callingError">Confirm Password is required</div>
                            }
                            
                            

                            <div className="checkBox">
                                <div className="CheckB">
                                <input  type="checkbox"/>
                                </div> 
                            
                                <h5>Remember me</h5>
                                </div>
            
                
                                    <input
                                        className="LogBtn"
                                        id="zip-input"
                                        // className='movie-input'
                                        type='file'
                                        placeholder='letterbox csv file here'
                                        name = 'movies'
                                        value= {this.state.input.movieName}  // im not sure why this works but it does.
                                        onChange={this.changeHandler}
                                    
                                    
                                    />
                                    
                                    
                                    <p className="LogBtn">upload your letterboxd csv file here to get all past movie ratings</p>
                               
                        
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

export default withRouter(connect
(mapStateToProps)(Register));