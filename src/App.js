import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

// local imports
// import Dashboard from "./components/dashboard/index.js";
// import Login from './auth/Login';
// import Register from './auth/Register';
import LoadingScreen from "./components/layout/LoadingScreen.js";
import WatchList from "./components/movies/WatchList.js";

// config imports
import reactGAinitialization from "./config/analytics.js";

function App() {
  reactGAinitialization();

  return (
    <Router history={createBrowserHistory()}>
      <div className="App" data-test="App-component">
        <Switch>
          {/* <Route exact path="/" component={Dashboard} /> */}
          {/* <Route path='/login' component = {Login}/>
      <Route path='/register' component = {Register}/> */}
          <Route path="/watch-list" component={WatchList} />
          <Route exact path="/" component={LoadingScreen} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
