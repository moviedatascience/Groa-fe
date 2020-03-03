import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ifDev } from "./utils/removeAttribute.js";

// local imports
import Dashboard from "./components/dashboard/index.js";
// import Login from './auth/Login';
import Register from './components/auth/Register';
import LoadingScreen from "./components/layout/LoadingScreen.js";
import { PrivateRoute } from './utils/privateRoute.js'; 
import Navigation from "./components/dashboard/navigation.js";
import WatchList from "./components/movies/WatchList.js";

// config imports
import reactGAinitialization from "./config/analytics.js";

function App() {
  useEffect(() => reactGAinitialization(), []);

  return (
    <Router>
      <div className="App" data-test={ifDev("App-component")}>
        <Switch>
        <Route exact path='/' component = {Register}/>
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
        {/* <Route path='/login' component = {Login}/> */}
          <Route path="/watch-list" component={WatchList} />
          {/* <Route exact path="/" component={LoadingScreen} /> */}
          <Route exact path="/navigation" component={Navigation} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
