import React, {useState} from 'react';
import axios from 'axios';
import './dataUpload.scss'

export default function DataUpload() {


const [input, setInput] = useState({file:''})
    const [ratings, setRatings] = useState({})
    const [loading, setLoading] = useState()

  


function clikL() {
    document.getElementById("myDropdownL").classList.toggle("show");
  }

function clikR() {
    document.getElementById("myDropdownR").classList.toggle("show");
  }  

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }





 

    const handleChange = e => { 
        let data = new FormData()
        data.append('movies', e.target.files[0] , e.target.files[0].name)
        // NOT USING CORRECT? -> //Groabe-env.v3umry9g8h.us-east-1.elasticbeanstalk.com/
        axios.post('https://api.groa.us/api/users/:id/uploading', data,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        })
        .then(res => { 
            console.log(res);
            setRatings(res.data)
            // this.props.history.push('/dashboard');
        }).catch(err => { 
            console.log(err)
        })
        data = new FormData()
        setTimeout(() => {
            setLoading(<h2 className = 'loading' style={{paddingLeft:'5px'}}>.loading</h2>)
        }, 3000);
       
   
}

return (
<div className='DataUploadPage'>
    <div>
            <div className='textholder1'> 
                    <h1>Already rated movies elsewhere?</h1>
                    <h3>Groa lets you easily upload your ratings from 
                        <br/>
                    either LetterBoxd or IMDb:</h3>

            </div>
      
    <div className='DboxContainer'>
        
        <div className="dropdown">
            <button onClick={clikL} className="dropbtn">Instructions LetterBoxd</button>
            <div id="myDropdownL" className="dropdown-content">
                <div className='DboxLeft'>
                    <div className='boxInside'>
                        <p className='ptext'>1.Log in to Letterboxd</p>
                        <p className='ptext'>2.Click on your username and select SETTINGS from the dropdown menu.</p>
                        <p className='ptext'>3.Go to the IMPORT and XPORT tab, then click EXPORT YOUR DATA. Save the ratings.csv file somwhere
                            convenient like your desktop or downloads folder.</p>
                        <p className='ptext'>4.Click to browse or simply drop your .csv file below</p>
                    </div>
                </div>
                {/* END  DboxLeft*/}
            </div>
            {/* END dropdown-content*/}
        </div>
        {/* END DROPDOWN */}

        
        <div className="dropdown">
            <button onClick={clikR} className="dropbtn">Instructions IMDb</button>
            <div id="myDropdownR" className="dropdown-content">
                <div className='DboxRight'>
                    <p className='ptext'>1.Log in to IMDb</p>
                    <p className='ptext'>2.Click on your username and select YOUR RATINGS fromthe dropdown menu.</p>
                    <p className='ptext'>3.Click on the icon and select Export. Save the ratings.csv file somwhere convenient like your desktop or downloads folder.</p>
                    <p className='ptext'>4.Click to browse or simply drop your .csv file below</p>    
                </div>
                {/* END DboxRight*/}
            </div>
            {/* END dropdown-content*/}
        </div>
{/* END DROPDOWN */}
    </div>
{/* END DboxContainer */}
    
{/* ///////////////UPLOAD FILE //////////////////// */}
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
        <div className='textholder2'> 
            <h5>Groa values your privacy strives to be transparent to all users.
                <br/>
                Your data will be kept strictly confidential-you're the only one
                who will be able to view or access it.
            </h5>
        </div>

    </div>

</div>
// END DataUploadPage
   )
 

}
