import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/index.js";
import Login from './components/auth/login'
// import Register from './auth/Register';

import './components/auth/login.scss'



function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path='/login' component = {Login}/>
      {/* <Route path='/register' component = {Register}/> */}
      </Switch>
    </div>
  );
}

export default App;
