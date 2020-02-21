<<<<<<< HEAD
import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard/index.js';
// import Login from './auth/Login'; 
// import Register from './auth/Register'; 


=======
import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/index.js";
// import Login from './auth/Login';
// import Register from './auth/Register';
>>>>>>> 9ab2f27c2aea4c8f5f4c4283f949fb6712029fde

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Dashboard} />
        {/* <Route path='/login' component = {Login}/>
      <Route path='/register' component = {Register}/> */}
      </Switch>
    </div>
  );
}

export default App;
