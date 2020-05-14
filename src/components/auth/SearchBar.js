import React, { useState } from "react";
import { connect } from "react-redux";
import {
  loginAction,
  setFilter,
  recommendationAction
} from "../../store/actions";
//for search bar 
import { makeStyles} from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles(theme => ({
  searchContainer: {
    width: "40%",
    margin: 'auto',
    // backgroundColor: '#505050',
    paddingTop: '4%',
  },
  [theme.breakpoints.down("xs")]: {
    searchContainer: {
      width: "90%",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#5c5b5b',
    color: '#ffffff',
    "&:hover": {
      backgroundColor: '#5c5b5b',
      color: '#ffffff',
    },
    width: "100%",
    [theme.breakpoints.down("sm")]: {
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
    justifyContent: "center",
    color: '#ffffff',
    "&:hover": {
      // backgroundColor: '#5c5b5b',
      color: '#D8D8D8',
    },
  },
  inputRoot: {
    color: '#ffffff',
    "&:hover": {
      color: '#ffffff',
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
}));


const Navigation = props => {
  //for user icon menu
//   const [anchorEl, setAnchorEl] = React.useState(null);

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

  return (
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
