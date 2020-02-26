import React from "react";
import { Route, Switch } from "react-router-dom";

// local imports
// import Dashboard from "./components/dashboard/index.js";
// import Login from './auth/Login';
// import Register from './auth/Register';
import LoadingScreen from "./components/layout/LoadingScreen.js";

// config imports
import reactGAinitialization from "./config/analytics.js";

function App() {
  reactGAinitialization();
  
  return (
    <div className="App">
      <Switch>
        {/* <Route exact path="/" component={Dashboard} /> */}
        {/* <Route path='/login' component = {Login}/>
      <Route path='/register' component = {Register}/> */}
        <Route exact path="/" component={LoadingScreen} />
      </Switch>
    </div>
  );
}

export default App;
