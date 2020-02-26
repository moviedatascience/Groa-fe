import React, {useState} from 'react'; 
import './dash.scss'
import axios from 'axios'; 


const Dashboardv1 = () => {
    const [input, setInput] = useState({file:''})
    const [ratings, setRatings] = useState({})
    const [loading, setLoading] = useState()
    const [toggle, setToggle] = useState(true);
    const changeHandler = e => { 
        
        let data = new FormData()
        data.append('movies', e.target.files[0] , e.target.files[0].name)
        //change user/1/ to be :id number
        //Groabe-env.v3umry9g8h.us-east-1.elasticbeanstalk.com/
        axios.post('https://stylingbranch-groa-be.herokuapp.com/api/users/3/upload', data,{
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
        // setTimeout(() => {
        //     setLoading('..loading')
        // }, 4000);
        // setTimeout(() => {
        //     setLoading('.loading')
        // }, 5000);
       
    }
    const handleSubmit = e => { 
        setToggle(!toggle)
        e.preventDefault();
        console.log(input);
        //change user/1/ to be :id number handle submit currently does
        axios.post('https://groa-be.herokuapp.com/api/users/1/upload', input,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        })
        .then(res => { 
            console.log(res);
        }).catch(err => { 
            console.log(err)
        })
       
    }
    const flash = () => {
        setTimeout(() => {
            return "flash"
        }, 1000);
    }

    return (
        
        <div className='DB-Container'>
            <div className='h2-p' ><h2>Welcome to the dashboard.</h2></div>
            
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
            <div className='box-container'>
                
                {ratings.length > 0 ? ratings.map((x, index) => {
                        if(index < 200){

                        
                            return (

                                <div className="box" key={index}>
                                    {/* <div className='thumbsUpDown'>
                                        <span role='img'>Looks Cool  👎</span>
                                        <span role='img'> Not interested 👍</span>
                                    </div> */}
                                    
                                        <div className="movie-poster"></div>
                                        
                                        <div className="text-container">    
                                            <h2>{x.Name}</h2>
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
                : loading}   
                {/* //loading} */}
                {/* {toggle == true ? 
                    <div className = 'box-container2'>
                        <div className="box">
                            <div className="movie-poster"></div>
                            <div className="text-container">    
                                <h2>alskdjflsjadf</h2>
                                <h2>asldkfljsfd</h2>
                                <h2>oweriuoiw</h2>
                                <h2>x,cvn,mncvx</h2>
                                <div className="checkboxes">
                                    <input type="checkbox" className="textboxsize" />
                                    <input type="checkbox" className="textboxsize" />
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="movie-poster"></div>
                            <div className="text-container">    
                                <h2>alskdjfsdflsjadf</h2>
                                <h2>asldkfljsfd</h2>
                                <h2>oweriuoiw</h2>
                                <h2>x,cvn,mncvx</h2>
                                <div className="checkboxes">
                                    <input type="checkbox" className="textboxsize" />
                                    <input type="checkbox" className="textboxsize" />
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="movie-poster"></div>
                            <div className="text-container">    
                                <h2>alskdjflsjadf</h2>
                                <h2>asldkfsdfljsfd</h2>
                                <h2>oweriuoiw</h2>
                                <h2>x,cvn,mncvx</h2>
                                <div className="checkboxes">
                                    <input type="checkbox" className="textboxsize" />
                                    <input type="checkbox" className="textboxsize" />
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="movie-poster"></div>
                            <div className="text-container">    
                                <h2>alskdjflsjadf</h2>
                                <h2>asldkfljsfd</h2>
                                <h2>owerisdfuoiw</h2>
                                <h2>x,cvn,mncvx</h2>
                                <div className="checkboxes">
                                    <input type="checkbox" className="textboxsize" />
                                    <input type="checkbox" className="textboxsize" />
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="movie-poster"></div>
                            <div className="text-container">    
                                <h2>alskdjflsjadf</h2>
                                <h2>asldksdffljsfd</h2>
                                <h2>oweriuoiw</h2>
                                <h2>x,cvn,mncvx</h2>
                                <div className="checkboxes">
                                    <input type="checkbox" className="textboxsize" />
                                    <input type="checkbox" className="textboxsize" />
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="movie-poster"></div>
                            <div className="text-container">    
                                <h2>alskdjflsjadf</h2>
                                <h2>asldksdffljsfd</h2>
                                <h2>oweriuoiw</h2>
                                <h2>x,cvn,mncvx</h2>
                                <div className="checkboxes">
                                    <input type="checkbox" className="textboxsize" />
                                    <input type="checkbox" className="textboxsize" />
                                </div>
                            </div>
                        </div>
                        
                    </div> : true} */}
            
                
            </div>
            
        </div>
        
        
    )
}

export default Dashboardv1;
