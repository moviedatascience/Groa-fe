import React, {useState} from 'react';
import axios from 'axios';
import './postLogin.scss'
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
            <div className='textholder1'> 
                    <h1>Groa grows with you.</h1>
                    <h3>The more movies your rate, 
                        <br/>
                    the better your recommenations.</h3>

                    <h2>Select how you'd like to join:</h2>
            </div>
        <div className='boxContainer'> 
    <div className='boxLeft'>
        <form className='boxInside'>
        <div className='image1'/>
        <div className='image2'/>
        <h3>Upload ratings from Letterboxd or IMDb</h3>
        <h4>For users who already have accounts on these popular film rating sites.</h4>

        <div className='holder'>
        <button className='btn'>Select</button>
        </div>

        {/* UPLOAD FILE */}
            {/* <input className='movie-input'
                type='file'
                placeholder='letterbox csv file here'
                name = 'movies'
                value={input.movieName}  // im not sure why this works but it does.
                onChange={handleChange}
            />  */}
    
        </form>
 {/* END FORM */}        
    </div> 
 {/* END BOX LEFT */}   
    <div className='boxRight'>
        <div className='boxInside'>
        <div className='image2'/>
        <h3>Recommendation <br/> setup wizard</h3>
        <h4>For users who want to use Groa without uploading data.</h4>
        
        <div className='holder'>
        <button className='btn'>Select</button>
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
