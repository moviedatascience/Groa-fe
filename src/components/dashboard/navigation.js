import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  faSearch,
  faUserCircle,
  faAngleDown,
  faBars
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../dashboard/navigation.scss";
import { faBell, faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import RegisterNavLinks from "../layout/nav-layouts/RegisterNavLinks";

class Navigation extends Component {
  state = {
    search: ""
  };

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    if (window.location.pathname === "/") return <RegisterNavLinks />;
    return (
      <div className="mainContainer">
        <div className="Bars">
          <FontAwesomeIcon className="bars-icon" icon={faBars} />
          <i className="far fa-bars"></i>
        </div>

        <div className="Links">
          <NavLink className="Groa" to="/">
            Groa
          </NavLink>
          <NavLink className="NavLink" to="/dairies">
            Dairies
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
          <FontAwesomeIcon className="search-icon" icon={faSearch} />
          <input
            className="searchBox"
            type="text"
            //type='search'
            name="search"
            value={this.search}
            onChange={this.handleChange}
            placeholder="search..."
          />
        </div>

        <FontAwesomeIcon className="bell-icon" icon={faBell} />
        <i className="far fa-bell"></i>

        <FontAwesomeIcon className="question-icon" icon={faQuestionCircle} />
        <i className="far fa-question-circle"></i>

        <FontAwesomeIcon className="user-circle-icon" icon={faUserCircle} />
        <i className="far fa-user-circle"></i>

        <FontAwesomeIcon className="angle-down-icon" icon={faAngleDown} />
        <i className="far fa-angle-down"></i>
      </div>
    );
  }
}

export default Navigation;
