import React, {useState} from 'react'; 
import './dash.scss'
import { axiosWithAuth } from '../../utils/axiosWithAuth.js';
import { connect } from 'react-redux';


const Dashboardv1 = (props) => {
    const [input, setInput] = useState({file:''})
    const [ratings, setRatings] = useState({})
    const [loading, setLoading] = useState()
    const [toggle, setToggle] = useState(true);

    console.log('user data here', props.userid)
    const changeHandler = e => { 
        // new FormData() needs to be used for the file upload to work.
        let data = new FormData()
        data.append('movies', e.target.files[0] , e.target.files[0].name)
        //change user/1/ to be :id number
        //Groabe-env.v3umry9g8h.us-east-1.elasticbeanstalk.com/
        axiosWithAuth().post(`/${props.userid}/upload`, data,{
            headers:{
                'Content-Type':'multipart/form-data'  
            }
        })
        .then(res => { 
            console.log(res);
            setRatings(res.data)
        }).catch(err => { 
            console.log(err)
        })
        data = new FormData()
        // do something when loading add loading paremeter in jsx where the turnery operator ends. right now set to true.
        setTimeout(() => {
            setLoading(<h2 className = 'loading' style={{paddingLeft:'5px'}}>.loading</h2>)
        }, 1000);
        setTimeout(() => {
            setLoading(<h2 className = 'loading' style={{paddingLeft:'10px'}}>..loading</h2>)
        }, 2000);
        setTimeout(() => {
            setLoading(<h2 className = 'loading' style={{paddingLeft:'15px'}}>...loading</h2>)
        }, 3000);
        setTimeout(() => {
            setLoading(<h2 className = 'loading' style={{paddingLeft:'20px'}}>....loading</h2>)
        }, 4000);
        
    }
    const handleSubmit = e => { 
        setToggle(!toggle)
        e.preventDefault();
        console.log(input);
        //handle submit not being used this is depreciated code.
        //change user/1/ to be :id number handle submit currently does
        // axios.post('https://groa-be.herokuapp.com/api/users/1/upload', input,{
        //     headers:{
        //         'Content-Type':'multipart/form-data'
        //     }
        // })
        // .then(res => { 
        //     console.log(res);
        // }).catch(err => { 
        //     console.log(err)
        // })
       
    }
   

    return (
        <div className="bigContainer">
            <div data-test="dashboard-screen" className='DB-Container'>
                {/* <div className='h2-p' ><h2>Welcome to the dashboard.</h2></div> */}
                
                <div className="form-hover">
                <form id="zip-form"           
                onSubmit = {handleSubmit}>
                    <input
                        id="zip-input"
                        className='movie-input'
                        type='file'
                        placeholder='letterbox csv file here'
                        name = 'movies'
                        value={input.movieName}  // im not sure why this works but it does.
                        onChange={changeHandler}
                    
                    
                    />
                    
                    {/* <button id="submit-button">Groa</button> */}
                </form>
                {/* <p className="form-directions">upload your letterboxd csv file here to get unique movie recommendations</p> */}
                <p className="form-directions">upload your letterboxd csv file here to get all past movie ratings</p>
                </div>
                {/* <div className='settings-container'>Container for settings</div> */}
                <div data-test="box-container" className='box-container'>
                    
                    {ratings.length > 0 ? ratings.map((x, index) => {
                            if(index < 201){

                            
                                return (

                                    <div data-test="box" className="box" key={index}>
                                        {/* <div className='thumbsUpDown'>
                                            <span role='img'>Looks Cool  👎</span>
                                            <span role='img'> Not interested 👍</span>
                                        </div> */}
                                        
                                            <div className="movie-poster"></div>
                                            
                                            <div className="text-container">    
                                                <h2 style={{color:"#0000EE"}}>{x.Name}</h2>
                                                <h2>{x.Year}</h2>
                                                <h2>Rating: {x.Rating}</h2>
                                                <h2>Votes:</h2>
                                                <h2>Like by fans of: </h2>
                                                {/* <h2>{x.Letterboxd_URI}</h2> */}
                                                {/* <div className="checkboxes">
                                                    <input type="checkbox" className="textboxsize" />
                                                    <input type="checkbox" className="textboxsize" />
                                                </div> */}
                                            </div>
                                        
                                    </div>
                                )
                            }
                        }) 
                    : true}   
                    
                    {toggle === true ? 
                        <div className = 'box-container2'>
                            <div className="box">
                                <div className="movie-poster"></div>
                                <div className="text-container">    
                                    <h2 style={{color:"#0000EE"}}>Movie Title</h2>
                                    <h2>Year</h2>
                                    <h2>Rating:</h2>
                                    <h2>Votes:</h2>
                                    <h2>Liked by fans of:</h2>
                                    
                                </div>
                            </div>
                            <div className="box">
                                <div className="movie-poster"></div>
                                <div className="text-container">    
                                    <h2 style={{color:"#0000EE"}}>Movie Title</h2>
                                    <h2>Year</h2>
                                    <h2>Rating:</h2>
                                    <h2>Votes:</h2>
                                    <h2>Liked by fans of:</h2>
                                    
                                </div>
                            </div>
                            <div className="box">
                                <div className="movie-poster"></div>
                                <div className="text-container">    
                                    <h2 style={{color:"#0000EE"}}>Movie Title</h2>
                                    <h2>Year</h2>
                                    <h2>Rating:</h2>
                                    <h2>Votes:</h2>
                                    <h2>Liked by fans of:</h2>
                                   
                                </div>
                            </div>
                            <div className="box">
                                <div className="movie-poster"></div>
                                <div className="text-container">    
                                    <h2 style={{color:"#0000EE"}}>Movie Title</h2>
                                    <h2>Year</h2>
                                    <h2>Rating:</h2>
                                    <h2>Votes:</h2>
                                    <h2>Liked by fans of:</h2>
                                    
                                </div>
                            </div>
                            <div className="box">
                                <div className="movie-poster"></div>
                                <div className="text-container">    
                                    <h2 style={{color:"#0000EE"}}>Movie Title</h2>
                                    <h2>Year</h2>
                                    <h2>Rating:</h2>
                                    <h2>Votes:</h2>
                                    <h2>Liked by fans of:</h2>
                                    
                                </div>
                            </div>
                            <div className="box">
                                <div className="movie-poster"></div>
                                <div className="text-container">    
                                    <h2 style={{color:"#0000EE"}}>Movie Title</h2>
                                    <h2>Year</h2>
                                    <h2>Rating:</h2>
                                    <h2>Votes:</h2>
                                    <h2>Liked by fans of:</h2>
                                   
                                </div>
                            </div>
                            
                        </div> : true} 
                
                    
                </div>
                
            </div>
        </div>
        
        
    )
}

const mapStateToProps = ({dashboardMain}) => {
    return {
        userid: dashboardMain.userid
    };
};
export default connect(mapStateToProps)(Dashboardv1);
