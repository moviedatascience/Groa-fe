import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/index.js";
// import Login from './auth/Login';
import Register from './components/auth/Register';
import LoadingScreen from "./components/layout/LoadingScreen.js";
import { PrivateRoute } from './utils/privateRoute.js'; 






function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component = {Register}/>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        {/* <Route path='/login' component = {Login}/> */}
      
        {/* <Route exact path="/" component={LoadingScreen} /> */}
      </Switch>
    </div>
  );
}

export default App;
