import React from "react";
import { Route, Switch } from "react-router-dom";
// import Dashboard from "./components/dashboard/index.js";
// import Login from './auth/Login';
// import Register from './auth/Register';
<<<<<<< HEAD
import PostLogin from './components/auth/postLogin';
import './components/auth/postLogin.scss';
=======
import LoadingScreen from "./components/layout/LoadingScreen.js";
>>>>>>> ed52cd8203f86bb702b466b22731ec8836a9b37a

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route exact path="/" component={Dashboard} /> */}
        {/* <Route path='/login' component = {Login}/>
      <Route path='/register' component = {Register}/> */}
<<<<<<< HEAD
      <Route path='/login/postlogin' component={PostLogin}/>
=======
        <Route exact path="/" component={LoadingScreen} />
>>>>>>> ed52cd8203f86bb702b466b22731ec8836a9b37a
      </Switch>
    </div>
  );
}

export default App;
