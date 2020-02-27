import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { faSearch,faUserCircle,faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../dashboard/navigation.scss";
import {faBell, faQuestionCircle} from '@fortawesome/free-regular-svg-icons';


class Navigation extends Component {

    state = {

            search: ''
    };
    

    handleChange = e =>{
        this.setState({search: e.target.value})
    }
        
    render() {
        return(

            <div className="mainContainer">

                <div className="Links">
                    
                <NavLink className='NavLink' to="/">
                    Groa 
                </NavLink>

                <NavLink className='NavLink' to="/trending">
                    Trending
                </NavLink>

                <NavLink  className='NavLink' to="/recommended"> 
                    Recommended
                </NavLink>

                <NavLink className='NavLink' to="/watchlist">
                    Watchlist 
                </NavLink>

                <NavLink className='NavLink' to="/explore"> 
                    Explore
                </NavLink>
                </div>
              
            
                <div className='searchContainer'>
                <FontAwesomeIcon 
                className='search-icon' 
                icon={faSearch}
                 />
                <input className='searchBox'
                type="text" 
                //type='search'
                name="search" 
                value={this.search} 
                onChange={this.handleChange} 
                placeholder= 'search...'/>
             </div>

             <FontAwesomeIcon 
                className='bell-icon' 
                icon={faBell}
              />
                <i class="far fa-bell"></i>
                
                <FontAwesomeIcon 
                className='question-icon' 
                icon={faQuestionCircle}
              />
                <i class="far fa-question-circle"></i>

                <FontAwesomeIcon 
                className='user-circle-icon' 
                icon={faUserCircle}
              />
                <i class="far fa-user-circle"></i>

                <FontAwesomeIcon 
                className='angle-down-icon' 
                icon={faAngleDown}
              />
               <i class="far fa-angle-down"></i>
            </div>
        )
    }
}

export default Navigation;