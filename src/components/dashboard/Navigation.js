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
  // faSearch,
  faUserCircle,
  faAngleDown,
  faBars,
  faSync,
  // faBackspace
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ifDev } from "../../utils/removeAttribute.js";
import GroaLogo from "../../img/groa-logo-nav.png";

//for search bar 
import { makeStyles, fade } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";


const useStyles = makeStyles(theme => ({
  searchContainer: {
    width: "46%",
    margin: "auto"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'white',
    "&:hover": {
      backgroundColor: '#00B392'
    },
    marginTop: 30,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  }
}));


const Navigation = props => {
  const classes = useStyles();

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
      {/* <div
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
        </div> */}
         <div className={classes.searchContainer}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  type='text'
                  onChange={handleChange}
                  value={query.query}
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  inputProps={{ "aria-label": "search" }}
                  onKeyDown={handleSubmit}
                />
              </div>
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
