import React, {useState} from 'react';
import axios from 'axios';

export default function PostLogin() {



const [input, setInput] = useState({file:''})
    const [ratings, setRatings] = useState({})
    const [loading, setLoading] = useState()

    const handleChange = e => { 
        let data = new FormData()
        data.append('movies', e.target.files[0] , e.target.files[0].name)
        //change user/1/ to be :id number
        //Groabe-env.v3umry9g8h.us-east-1.elasticbeanstalk.com/
        axios.post('http://localhost:4000/api/users/1/upload', data,{
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

return (
<div className='PostLoginPage'>
    <div className='container'>
            <h1>Welcome to Groa</h1>

            <h2>As you give us more data, the richer the experience we can deliver.</h2>
            <h2>Show, don't just tell</h2>
        <div className='boxContainer'> 
    <div className='boxLeft'>
        <form className='boxInside'>
        
        <h3>Upload your letterboxd csv file here.</h3>
        <div className='holder'>
            <input className='movie-input'
                type='file'
                placeholder='letterbox csv file here'
                name = 'movies'
                value={input.movieName}  // im not sure why this works but it does.
                onChange={handleChange}
            /> 
        </div>
        {/* <button id="submit-button">Groa</button> */}
        </form>
 {/* END FORM */}        
    </div> 
 {/* END BOX LEFT */}   
    <div className='boxRight'>
        <div className='boxInside'>
        
        <h3>If you dont have a Letterboxd Account take our quiz, so we can get a
        recommenation of movies for you.</h3>
        
        <div className='holder'>
        <button className='btnQuiz'>Take Quiz</button>
        </div>
        
        </div>
    </div>
{/* END BOX RIGHT */}
    </div>
{/* END BOX CONTAINER */}
    </div>
{/* END CONTAINER */}
</div>
   )
 

}
