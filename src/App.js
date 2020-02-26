import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/index.js";
// import Login from './auth/Login';
import Register from "../src/components/auth/register.js";
import "../src/components/auth/register.scss"; // this is needed for the styling //

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
