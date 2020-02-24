import React, {useState} from 'react'; 
import './dash.scss'
import axios from 'axios'; 


const Dashboard = () => {
    const [input, setInput] = useState({file:''})
    const [ratings, setRatings] = useState({})
    const changeHandler = e => { 
        
        let data = new FormData()
        data.append('movies', e.target.files[0] , e.target.files[0].name)
        //change user/1/ to be :id number
        axios.post('http://localhost:4000/api/users/2/upload', data,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        })
        .then(res => { 
            console.log(res);
            setRatings(res.data.data)
        }).catch(err => { 
            console.log(err)
        })
        data = new FormData()
       
    }
    const handleSubmit = e => { 
        e.preventDefault();
        console.log(input);
        //change user/1/ to be :id number handle submit currently does
        axios.post('http://localhost:4000/api/users/1/upload', input,{
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


    return (
        
        <div className='DB-Container'>
            <div className="h2-p"><h2>Welcome to the dashboard.</h2></div>
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
                
                <button id="submit-button">Groa</button>
            </form>
            <p className="form-directions">upload your letterboxd csv file here to get unique movie recommendations</p>
            </div>
            {/* <div className='settings-container'>Container for settings</div> */}
            <div className='box-container'>
               
                {ratings.length > 0 ? ratings.map((x, index) => {
                    if(index < 400){

                    
                        return (

                            <div className="box" key={index}>
                                <div className="movie-poster"></div>
                                <div className="text-container">    
                                    <h2>{x.Name}</h2>
                                    <h2>{x.Year}</h2>
                                    <h2>Rating: {x.Rating}</h2>
                                    {/* <h2>{x.Letterboxd_URI}</h2> */}
                                    {/* <div className="checkboxes">
                                        <input type="checkbox" className="textboxsize" />
                                        <input type="checkbox" className="textboxsize" />
                                    </div> */}
                                </div>
                            </div>
                        )
                    }
                }) : '...loading'}
                


                {/* <div className="box">
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
                        <h2>alskdjflsjadf</h2>
                        <h2>asldkfljsfd</h2>
                        <h2>oweriuoiw</h2>
                        <h2>x,cvn,mncvx</h2>
                        <div className="checkboxes">
                            <input type="checkbox" className="textboxsize" />
                            <input type="checkbox" className="textboxsize" />
                        </div>
                    </div>
                </div> */}
            
                
            </div>
            
        </div>
        
        
    )
}

export default Dashboard;
