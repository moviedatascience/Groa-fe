<<<<<<< HEAD
import React from "react";
import { Route, Switch } from "react-router-dom";
// import Dashboard from "./components/dashboard/index.js";
// import Login from './auth/Login';
// import Register from './auth/Register';
// import LoadingScreen from "./components/layout/LoadingScreen.js";
import DataUpload from './components/auth/dataUpload';
=======
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ifDev } from "./utils/removeAttribute.js";

// local imports
import PrivateRoute from "./utils/privateRoute.js";
import Dashboardv1 from "./components/dashboard/dashboardv1.js";

import Navigation from "./components/dashboard/navigation.js";
import Register from "./components/auth/Register";
import Login from "./components/auth/login";

// config imports
import reactGAinitialization from "./config/analytics.js";

// creating the store
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { reducer } from "./store/reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);
>>>>>>> 058f81acdd0305d2f2b5926da0c56b45cf92918a

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  useEffect(() => reactGAinitialization(), []);

  return (
<<<<<<< HEAD
    <div className="App">
      <Switch>
        {/* <Route exact path="/" component={Dashboard} /> */}
        {/* <Route path='/login' component = {Login}/>
      <Route path='/register' component = {Register}/> */}
        {/* <Route exact path="/" component={LoadingScreen} /> */}
        <Route path='/dataupload' component = {DataUpload}/>
      </Switch>
    </div>
=======
    <Provider store={store}>
      <Router>
        <div className="App" data-test={ifDev("App-component")}>
            <Route
              path="/login"
              render={props => (
                <Login {...props} token={token} updateToken={setToken}/>
              )}
            />
            <Route
              exact
              path="/"
              render={props => (
                <Register {...props} token={token} updateToken={setToken}/>
              )}
            />
            <Route exact path={["/dashboard", "/trending", "/recommended", "/watchlist", "/explore"]} component={Navigation} />
            <PrivateRoute exact path="/dashboard" component={Dashboardv1} data-test={ifDev("dash-component")}/>
        </div>
      </Router>
    </Provider>
>>>>>>> 058f81acdd0305d2f2b5926da0c56b45cf92918a
  );
}

export default App;