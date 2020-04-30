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
import { makeStyles, fade, useTheme } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

//for the navbar 
import clsx from 'clsx';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
//for user toggle menu
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
//icons
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import PublishRoundedIcon from '@material-ui/icons/PublishRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import ThumbUpRoundedIcon from '@material-ui/icons/ThumbUpRounded';
import PlaylistAddCheckRoundedIcon from '@material-ui/icons/PlaylistAddCheckRounded';
import GradeRoundedIcon from '@material-ui/icons/GradeRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';


const drawerWidth = 240;


const useStyles = makeStyles(theme => ({
  searchContainer: {
    width: "40%",
    margin:'auto',
    backgroundColor:'#505050',

  },
  [theme.breakpoints.down("xs")]: {
    searchContainer:{
      width:"90%",
    },
    userIcon:{
      display:'none',
     },
     groaLogo:{
      flex:'display',
      justifyContent:'center',
     },
  },
  search: {
    // display:'flex',
    // alignItems:'center',
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#ffffff',
    "&:hover": {
      backgroundColor: '#5c5b5b',
      color:'#ffffff',
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
    color: '#505050',
    "&:hover": {
      // backgroundColor: '#5c5b5b',
      color:'#D8D8D8',
    },
  },
  inputRoot: {
    color: "#505050",
    "&:hover": {
      color:'#ffffff',
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
  //for nav bar
  root: {
    display: 'flex',
    flexDirection:'column'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  toolBar:{
    backgroundColor:'#505050',
    display:'flex',
    justifyContent:'space-between'
  },
  appBar:{
    backgroundColor:'#5c5b5b'
  },
  groaLogo: {
    height:'2rem',
    width: 'auto',
  },
 
  drawerContainer:{
    display:'flex',
    flexDirection:'column',
    
  },
  
//     [theme.breakpoints.down("xs")]: {
//       margin:0,
      
// },
}));


const Navigation = props => {
  //for nav bar
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  // for side bar menu
  const linkAttributes = [{
    id:0,
    name: "Upload",
    icon: <PublishRoundedIcon /> 
  },
  {
    id:1,
    name: "Explore",
    icon: <SearchRoundedIcon /> 
  },
  {
    id:2,
    name: "Recommendations",
    icon: <ThumbUpRoundedIcon /> 
  },
  {
    id:3,
    name: "Watchlist",
    icon: <PlaylistAddCheckRoundedIcon /> 
  },
  {
    id:4,
    name: "Ratings",
    icon: <GradeRoundedIcon />
  },
  {id:5,
  name:'Log Out',
  icon: <ExitToAppRoundedIcon />
  },
];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  //for user icon menu
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
    <div className={classes.root}>
      <div className={classes.drawerContainer}>
      <CssBaseline />
      <AppBar className={classes.appBar}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.toolBar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
          <img className={classes.groaLogo} src={GroaLogo} alt="Groa Logo" />
          </Typography>
          
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      <PersonRoundedIcon className={classes.userIcon}/>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} button component="a" href={`/${props.userid}/ratings`} >Ratings</MenuItem>
        <MenuItem onClick={handleClose} button component="a" href={`/${props.userid}/upload`}>Upload</MenuItem>
        <MenuItem onClick={logout} button component="a" href={`/login`}>Logout</MenuItem>
      </Menu>
      
    
    
   

     
        </Toolbar>
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
      </AppBar>
      
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {linkAttributes.map((linkObject, index) => (
            <ListItem key={linkObject.id} button component="a" href={`/${props.userid}/${linkObject.name.toLowerCase()}`}>
              <ListItemIcon>{linkObject.icon}</ListItemIcon>
              <ListItemText primary={linkObject.name} />
            </ListItem>
          ))}
        </List>
        <Divider />
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
        
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        
      </main>
      
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
