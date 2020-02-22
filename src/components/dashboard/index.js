import React, {useState} from 'react'; 
import './dash.scss'
import axios from 'axios'; 


const Dashboard = () => {
    const [input, setInput] = useState({file:''})
    const changeHandler = e => { 
        // setInput({
        //     ...input, 
        //     [e.target.name]:e.target.value
        // })
        let data = new FormData()
        console.log(e.target.files[0])

        setInput(e.target.files[0])
        data.append('movies', e.target.files[0] , e.target.files[0].name)
        axios.post('http://localhost:4000/api/users/upload', data,{
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
    const handleSubmit = e => { 
        e.preventDefault();
        console.log(input);
        
        axios.post('http://localhost:4000/api/users/upload', input,{
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
            
            // ref='uploadForm' 
             
            // action='http://localhost:4000/api/users/upload' 
            // method='post' 
            // encType="multipart/form-data"
            
           
            
            onSubmit = {handleSubmit}>
                <input
                    id="zip-input"
                    className='movie-input'
                    type='file'
                    placeholder='letterbox csv file here'
                    name = 'movies'
                    value={input.movieName}
                    onChange={changeHandler}
                
                
                />
                <input type='submit' value='Upload!' />
                <button id="submit-button">Groa</button>
            </form>
            <p className="form-directions">upload your letterboxd csv file here to get unique movie recommendations</p>
            </div>
            {/* <div className='settings-container'>Container for settings</div> */}
            <div className='box-container'>
               
                
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
            
               
            </div>
            
        </div>
    )
}

export default Dashboard;
