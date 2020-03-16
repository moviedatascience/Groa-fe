import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { loginAction } from "../../store/actions/loginAction";
import { faSearch, faUserCircle, faAngleDown, faBars} from "@fortawesome/free-solid-svg-icons";
import { faBell, faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../dashboard/_Navigation.scss";
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

  logout = () => {
    localStorage.removeItem("token");
  };

  render() {
    return (
      <div className="mainContainer" data-test={ifDev("navigation")}>
        <div className="navContainer">
          <div className="Bars" > 
          {/* hidden */}
          
          <a href="#main-menu" class="menu-toggle" aria-label= "Open main menu" 
            id = "main-menu-toggle">
            <FontAwesomeIcon className="bars-icon" icon={faBars} aria-label="main menu" />
            
              <span class = "sr-only"> Open main menu</span>
              <i aria-hidden='true' className="far fa-bars"></i>
          </a>

          <nav id="main-menu" className = "main-menu">
            <div className="title">
            <h2>Filter Options</h2>
            <a href="#main-menu-toggle" className="menu-close">X</a>
            </div>
            <ul>
              <li><a href="#">By Provider</a></li>
              <li><a href="#">Genre</a></li>
              <li><a href="#">Theme</a></li>
              <li><a href="#">By Date</a></li>
              <li><a href="#">Black and White</a></li>
              <li><a href="#">By actor, director, screenwriter, cigematographer(sort by tags)</a></li>
            </ul>
          </nav>
          <a href= "#main-menu-toggle" class = "backdrop" hidden tabindex="-1"/>
          </div>

          <div id="main-menu" className="Links">
            <NavLink
              className="Groa-NavLink"
              to={`/${this.props.userid}/recommended`}
            >
              Groa
            </NavLink>

            <NavLink
              className="NavLink"
              to={`/${this.props.userid}/trending`}
            >
              {/* hidden */}
              Trending
            </NavLink>

            <NavLink
              className="NavLink"
              to={`/${this.props.userid}/recommended`}
            >
              Recommended
            </NavLink>

            {/* adding this here until all other nav functionality is added */}
            <NavLink className="NavLink" to={`/${this.props.userid}/upload`}>
              Upload Data
            </NavLink>

            <NavLink
              className="NavLink"
              to="/login"
              onClick={this.state.logout}
            >
              Logout
            </NavLink>

            <NavLink
              className="NavLink"
              to={`/${this.props.userid}/watchlist`}
            >
              {/* hidden */}
              Watchlist
            </NavLink>

            <NavLink
              className="NavLink"
              to={`/${this.props.userid}/explore`}
            >
              {/* hidden */}
              Explore
            </NavLink>
          </div>
          
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

            <FontAwesomeIcon className="angle-down-icon" icon={faAngleDown} />
            <i className="far fa-angle-down"></i>
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
export default connect(mapStateToProps, { loginAction })(Navigation);