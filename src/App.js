import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/index.js";
// import Login from './auth/Login';
import Register from "./components/auth/Register.js";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Dashboard} />
        {/* <Route path='/login' component = {Login}/> */}
        <Route path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
