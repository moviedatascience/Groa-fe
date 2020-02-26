import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/index.js";
// import Login from './auth/Login';
// import Register from './auth/Register';
import LoadingScreen from "./components/layout/LoadingScreen.js";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Dashboard} />
        {/* <Route path='/login' component = {Login}/>
      <Route path='/register' component = {Register}/> */}
        {/* <Route exact path="/" component={LoadingScreen} /> */}
      </Switch>
    </div>
  );
}

export default App;
