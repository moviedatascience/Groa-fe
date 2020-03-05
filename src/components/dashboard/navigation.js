import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  faSearch,
  faUserCircle,
  faAngleDown,
  faBars
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../dashboard/_Navigation.scss";
import { faBell, faQuestionCircle } from "@fortawesome/free-regular-svg-icons";

import { ifDev } from "../../utils/removeAttribute.js";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <div className="mainContainer" data-test={ifDev("navigation")}>
        <div className='navContainer'>
        <div className="Bars">
          <FontAwesomeIcon className="bars-icon" icon={faBars} />
          <i className="far fa-bars"></i>
        </div>

        <div className="Links">
          <NavLink className="Groa-NavLink" to="/">
            Groa
          </NavLink>
          <NavLink className="NavLink" to="/diary">
            Diary
          </NavLink>

          <NavLink className="NavLink" to="/trending">
            Trending
          </NavLink>

          <NavLink className="NavLink" to="/recommended">
            Recommended
          </NavLink>

          <NavLink className="NavLink" to="/watchlist">
            Watchlist
          </NavLink>

          <NavLink className="NavLink" to="/explore">
            Explore
          </NavLink>
        </div>

        <div className="searchContainer">
          <FontAwesomeIcon className="search-icon fa-icons" icon={faSearch} />
          <input
            className="searchBox"
            type="text"
            name="search"
            value={this.search}
            onChange={this.handleChange}
            placeholder="search..."
          />
        </div>

        <div className="fa-icons">
          <FontAwesomeIcon className="bell-icon" icon={faBell} />
          <i className="far fa-bell"></i>

          <FontAwesomeIcon className="question-icon" icon={faQuestionCircle} />
          <i className="far fa-question-circle"></i>

          <FontAwesomeIcon className="user-circle-icon" icon={faUserCircle} />
          <i className="far fa-user-circle"></i>

          <FontAwesomeIcon className="angle-down-icon" icon={faAngleDown} />
          <i className="far fa-angle-down"></i>
        </div>
        </div>
        {/* END navContainer */}
      </div>
    );
  }
}

export default Navigation;
