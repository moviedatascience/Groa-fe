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
        }, 3000);
        // setTimeout(() => {
        //     setLoading(<h2 className = 'loading' style={{paddingLeft:'10px'}}>..loading</h2>)
        // }, 2000);
        // setTimeout(() => {
        //     setLoading(<h2 className = 'loading' style={{paddingLeft:'15px'}}>...loading</h2>)
        // }, 3000);
        // setTimeout(() => {
        //     setLoading(<h2 className = 'loading' style={{paddingLeft:'20px'}}>....loading</h2>)
        // }, 4000);

        // setTimeout(() => {
        //     setLoading('..loading')
        // }, 4000);
        // setTimeout(() => {
        //     setLoading('.loading')
        // }, 5000);
   
}

return (
<div className='DataUploadPage'>
    <div className='container'>
            <div className='textholder1'> 
                    <h1>Already rated movies elsewhere?</h1>
                    <h3>Groa lets you easily upload your ratings from 
                        <br/>
                    either LetterBoxd or IMDb:</h3>

            </div>
        <div className='DboxContainer'> 
    <div className='DboxLeft'>
        <form className='boxInside'>
        <div className='image1'/>
        <p className='ptext'>1.Log in to Letterboxd</p>
        <p className='ptext'>2.Click on your username and select SETTINGS from the dropdown menu.</p>
        <p className='ptext'>3.Go to the IMPORT and XPORT tab, then click EXPORT YOUR DATA. Save the ratings.csv file somwhere
            convenient like your desktop or downloads folder.</p>
        <p className='ptext'>4.Click to browse or simply drop your .csv file below</p>


        </form>
 {/* END FORM */}        
    </div> 
 {/* END BOX LEFT */}   
    <div className='DboxRight'>
        <div className='boxInside'>
        <div className='image2'/>
        <p className='ptext'>1.Log in to IMDb</p>
        <p className='ptext'>2.Click on your username and select YOUR RATINGS fromthe dropdown menu.</p>
        <p className='ptext'>3.Click on the icon and select Export. Save the ratings.csv file somwhere convenient like your desktop or downloads folder.</p>
        <p className='ptext'>4.Click to browse or simply drop your .csv file below</p>
        
        </div>
    </div>
{/* END BOX RIGHT */}
    </div>

{/* UPLOAD FILE */}
        <div className='UploadContainer'>
            <div className='inputholder'>
                <input className='uploadData'
                    type='file'
                    placeholder='letterbox csv file here'
                    name = 'movies'
                    value={input.movieName}  // im not sure why this works but it does.
                    onChange={handleChange}
                />
            </div> 
        </div>

<h5>Groa values your privacy strives to be transparent to all users.
    <br/>
    Your data will be kept strictly confidential-you're the only one
    who will be able to view or access it.
</h5>
{/* END BOX CONTAINER */}
    </div>
{/* END CONTAINER */}
</div>
   )
 

}
