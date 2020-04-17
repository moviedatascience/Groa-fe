import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {
  loginAction,
  setFilter,
  recommendationAction
} from "../../store/actions";
// import debounce from "../../utils/debounce";
import {
  faSearch,
  faUserCircle,
  faAngleDown,
  faBars,
  faSync,
  faBackspace
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ifDev } from "../../utils/removeAttribute.js";
import GroaLogo from "../../img/groa-logo-nav.png";

const Navigation = props => {
  const [query, setQuery] = useState({
    query: ""
  });

  const handleChange = e => {
    setQuery({ query: e.target.value });
    sendChange(e.target.value.trim());
  };

  const sendChange = query => {
    props.setFilter(query);
  };

  const handleSubmit = e => {
    if (e.keyCode === 13 && query.query !== "") props.setFilter(e.target.value);
  };

  const clearInput = e => {
    setQuery({ query: "" });
    props.setFilter("");
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("state");
  };

  const getNewRecommendations = id => {
    // Gets new recommendations for account, if applicible
    props.recommendationAction(id);
  };

  return (
    <div className="mainContainer" data-test={ifDev("navigation")}>
      <div className="navContainer">
        <div className="Bars hidden">
          <FontAwesomeIcon className="bars-icon" icon={faBars} />
          <i className="far fa-bars"></i>
        </div>

        <div className="Links">
          <img src={GroaLogo} alt="Groa Logo" />

          <NavLink
            className="NavLink recommended"
            to={`/${props.userid}/recommended`}
          >
            Recommended
          </NavLink>

          <NavLink
            className="NavLink  watchlist"
            to={`/${props.userid}/watchlist`}
          >
            Watchlist
          </NavLink>

          <NavLink className="NavLink explore" to={`/${props.userid}/explore`}>
            Explore
          </NavLink>
        </div>

        {/* If the path is upload hide the search container */}
        <div
          className={`searchContainer ${
            window.location.pathname === `/${props.userid}/upload`
              ? `hidden`
              : null
          }`}
        >
          <div className="search-wrapper">
            <FontAwesomeIcon className="search-icon" icon={faSearch} />
            <input
              className="searchBox"
              type="text"
              name="search"
              value={query.query}
              onChange={handleChange}
              placeholder="Search..."
              onKeyDown={handleSubmit}
            />
          </div>
          <FontAwesomeIcon
            className="backspace-icon"
            icon={faBackspace}
            onClick={clearInput}
          />
        </div>

        {/* If the path is recommended show update recommendations button */}
        <button
          className={`recommendations-button ${
            window.location.pathname === `/${props.userid}/recommended`
              ? null
              : ` hidden`
          }`}
          onClick={() => getNewRecommendations(props.userid)}
        >
          <FontAwesomeIcon className="sync-icon fa-fw" icon={faSync} />
          <i className="fas fa-sync"></i>
          Update your recs
        </button>

        <div className="fa-icons">
          {/* This is the container for the user-icon and the arrow */}
          <div className="dropdown-hover">
            <FontAwesomeIcon className="user-circle-icon" icon={faUserCircle} />
            <i className="far fa-user-circle"></i>

            <FontAwesomeIcon className="angle-down-icon" icon={faAngleDown} />
            <i className="fas fa-angle-down"></i>

            <div className="dropdown-content">
              {/* This is the dropdown menu, links display based on media query */}
              <NavLink
                className="NavLink recommended-menu"
                to={`/${props.userid}/recommended`}
              >
                Recommended
              </NavLink>

              <NavLink
                className="NavLink explore-menu"
                to={`/${props.userid}/explore`}
              >
                Explore
              </NavLink>

              <NavLink
                className="NavLink ratings-menu"
                to={`/${props.userid}/ratings`}
              >
                Ratings
              </NavLink>

              <NavLink
                className="NavLink upload-menu"
                to={`/${props.userid}/upload`}
              >
                Upload data
              </NavLink>

              <NavLink
                className="NavLink watchlist-menu"
                to={`/${props.userid}/watchlist`}
              >
                Watchlist
              </NavLink>

              <NavLink
                className="NavLink logout-menu"
                onClick={logout}
                data-test={ifDev("logoutBtn")}
                to="/login"
              >
                Log out
              </NavLink>
            </div>
            {/* END dropdown-content */}
          </div>
          {/* END dropdown-hover */}
        </div>
        {/* END fa-icons */}
      </div>
      {/* END navContainer */}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userid: state.login.userid,
    searchTerm: state.filter.searchTerm
  };
};
export default connect(mapStateToProps, {
  loginAction,
  recommendationAction,
  setFilter
})(Navigation);
