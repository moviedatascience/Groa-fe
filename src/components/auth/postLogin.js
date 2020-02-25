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
    <div>
        <form >
            {/* <select>
                <option>Please Choose an Option</option>
                <option>movie1</option>
                <option>movie2</option>
                <option>movie3</option>
            </select> */}
        <input
            id="zip-input"
            className='movie-input'
            type='file'
            placeholder='letterbox csv file here'
            name = 'movies'
            value={input.movieName}  // im not sure why this works but it does.
            onChange={handleChange}
        />
        {/* <button id="submit-button">Groa</button> */}
        </form>
    </div>
    {/* END FORM */}
    <h1>If you dont have a Letterboxd Account take our quiz, so we can get a
        recommenation of movies for you.</h1>
</div>
   )
 

}
