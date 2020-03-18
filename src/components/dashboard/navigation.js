import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { loginAction } from "../../store/actions/loginAction";
import {
  faSearch,
  faUserCircle,
  faAngleDown,
  faBars
} from "@fortawesome/free-solid-svg-icons";
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
    this.handleChange = this.handleChange.bind(this);
    this.logout = this.logout.bind(this);
  }

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  logout = () => {
    localStorage.removeItem("token");
    this.props.history.push("/login");
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
            <NavLink
              className="Groa-NavLink"
              to={`/${this.props.userid}/recommended`}
            >
              Groa
            </NavLink>

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

            {/* adding this here until all other nav functionality is added */}
            <NavLink className="NavLink" to={`/${this.props.userid}/upload`}>
              Upload Data
            </NavLink>

            <button
              className="NavLink"
              onClick={this.logout}
              data-test={ifDev("logoutBtn")}
            >
              Logout
            </button>

            <NavLink
              className="NavLink  hidden"
              to={`/${this.props.userid}/watchlist`}
            >
              Watchlist
            </NavLink>

            <NavLink
              className="NavLink  hidden"
              to={`/${this.props.userid}/explore`}
            >
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
