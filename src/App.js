import React from "react";
import { Route, Switch } from "react-router-dom";
<<<<<<< HEAD
import Dashboard from "./components/dashboard/index.js";
import Login from './components/auth/login'
=======
// import Dashboard from "./components/dashboard/index.js";
// import Login from './auth/Login';
>>>>>>> ed52cd8203f86bb702b466b22731ec8836a9b37a
// import Register from './auth/Register';
import LoadingScreen from "./components/layout/LoadingScreen.js";

import './components/auth/login.scss'



function App() {
  return (
    <div className="App">
      <Switch>
<<<<<<< HEAD
        <Route exact path="/" component={Dashboard} />
        <Route path='/login' component = {Login}/>
      {/* <Route path='/register' component = {Register}/> */}
=======
        {/* <Route exact path="/" component={Dashboard} /> */}
        {/* <Route path='/login' component = {Login}/>
      <Route path='/register' component = {Register}/> */}
        <Route exact path="/" component={LoadingScreen} />
>>>>>>> ed52cd8203f86bb702b466b22731ec8836a9b37a
      </Switch>
    </div>
  );
}

export default App;
