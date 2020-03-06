import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ifDev } from "./utils/removeAttribute.js";

// local imports
import PrivateRoute from "./utils/privateRoute.js";
import Dashboardv1 from "./components/dashboard/dashboardv1.js";
//TOOK OUT Navigation in Dashboardv1 now.
// import Navigation from "./components/dashboard/navigation.js";
import Register from "./components/auth/Register";
//TOOK OUT RegisterNavlinks - in Register now.
// import RegisterNavLinks from "./components/layout/nav-layouts/RegisterNavLinks.js";

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

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  useEffect(() => reactGAinitialization(), []);


 

  return (
    <Provider store={store}>
      <Router>
        <div className="App" data-test={ifDev("App-component")}>

         
          {/* {token === null ? <RegisterNavLinks /> : <Navigation /> } */}
          <Switch>
            <PrivateRoute path="/dashboard" component={Dashboardv1} />
            {/* <Route exact path="/navigation" component={Navigation} /> */}
            <Route
              exact
              path="/"
              render={props => (
                <Register {...props} token={token} updateToken={setToken} />
              )}
            />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
