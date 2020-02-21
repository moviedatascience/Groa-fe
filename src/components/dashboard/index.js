import React, {useState} from 'react'; 
import './dash.scss'



const Dashboard = () => {
    const [input, setInput] = useState({file:''})
    const changeHandler = e => { 
        // setInput({
        //     ...input, 
        //     [e.target.name]:e.target.value
        // })
        console.log(e.target.files[0])
    }
    const handleSubmit = e => { 
        e.preventDefault();
        console.log(input);
       
    }


    return (
        <div className='DB-Container'>
            <div className="h2-p"><h2>Welcome to the dashboard.</h2></div>
            <div className="form-hover">
            <form id="zip-form" onSubmit = {handleSubmit}>
                <input
                    id="zip-input"
                    className='movie-input'
                    type='file'
                    placeholder='letterbox csv file here'
                    name = 'file'
                    value={input.movieName}
                    onChange={changeHandler}
                
                
                />
                {/* <button id="submit-button">Groa</button> */}
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
