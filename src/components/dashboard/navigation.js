import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { loginAction } from "../../store/actions/loginAction";
import { recommendationAction } from "../../store/actions/recommendationActions";
import {
  faSearch,
  faUserCircle,
  faAngleDown,
  faBars,
  faSync
} from "@fortawesome/free-solid-svg-icons";
import { faBell, faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ifDev } from "../../utils/removeAttribute.js";
import GroaLogo from "../auth/Groa-logo-B2AA.png";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.logout = this.logout.bind(this);
    this.getNewRecommendations = this.getNewRecommendations.bind(this);
  }

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("state");
  };

  getNewRecommendations = id => {
    // Gets new recommendations for account, if applicible
    this.props.recommendationAction(id);
  };

  render() {
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
              className="NavLink  hidden"
              to={`/${this.props.userid}/trending`}
            >
              Trending
            </NavLink>

            <NavLink
              className="NavLink"
              to={`/${this.props.userid}/recommended`}
            >
              Recommended
            </NavLink>

            <NavLink className="NavLink" to={`/${this.props.userid}/ratings`}>
              Ratings
            </NavLink>

            {/* adding this here until all other nav functionality is added */}
            <NavLink className="NavLink" to={`/${this.props.userid}/upload`}>
              Upload Data
            </NavLink>

            <NavLink className="NavLink" to={`/${this.props.userid}/watchlist`}>
              Watchlist
            </NavLink>

            <NavLink
              className="NavLink  hidden"
              to={`/${this.props.userid}/explore`}
            >
              Explore
            </NavLink>
          </div>

          <button
            className="recommendations-button"
            onClick={() => this.getNewRecommendations(this.props.userid)}
          >
            <FontAwesomeIcon className="sync-icon" icon={faSync} />
            <i className="fas fa-sync"></i> Update your recs
          </button>

          <div className="searchContainer  hidden">
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
            <FontAwesomeIcon className="bell-icon  hidden" icon={faBell} />
            <i className="far fa-bell"></i>

            <FontAwesomeIcon
              className="question-icon  hidden"
              icon={faQuestionCircle}
            />
            <i className="far fa-question-circle  hidden"></i>

            <FontAwesomeIcon
              className="user-circle-icon  hidden"
              icon={faUserCircle}
            />
            <i className="far fa-user-circle"></i>

            <div className="dropdown-hover">
              <FontAwesomeIcon className="angle-down-icon" icon={faAngleDown} />
              <i className="far fa-angle-down"></i>
              <div className="dropdown-content">
                <NavLink
                className="NavLink"
                onClick={this.logout}
                data-test={ifDev("logoutBtn")}
                to="/login"
                >
                  Logout
               </NavLink>              
               </div>
             </div>
          </div>
        </div>
        {/* END navContainer */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userid: state.login.userid
  };
};
export default connect(mapStateToProps, { loginAction, recommendationAction })(
  Navigation
);
