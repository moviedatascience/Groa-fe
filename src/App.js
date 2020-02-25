import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/index.js";
// import Login from './auth/Login';
// import Register from './auth/Register';
import PostLogin from './components/auth/postLogin';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Dashboard} />
        {/* <Route path='/login' component = {Login}/>
      <Route path='/register' component = {Register}/> */}
      <Route path='/login/postlogin' component={PostLogin}/>
      </Switch>
    </div>
  );
}

export default App;
