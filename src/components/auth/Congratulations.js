import React from "react";
import "../auth/Congratulations.scss";

const Congrats = props => {

    return (
        <div className="CongratsPage" data-test="congrats-screen">
            <div className='CenterBox'>
                <div className='congratsForm'>
                    <div className='textHolder'>
                    <h1>Congratulations!</h1>
                        <h2>Your ratings have been successfully uploaded.</h2>
                       <img src="./public/success.png "/>
                        <button className='Btn'>Go to Dashboard</button>
                    </div>
               
                </div>
            </div>
            
        </div>
    )
}
export default Congrats