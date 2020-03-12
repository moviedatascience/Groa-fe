import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

// local imports
import PrivateRoute from "./utils/privateRoute.js";
import Dashboardv1 from "./components/dashboard/dashboardv1.js";
import Navigation from "./components/dashboard/navigation.js";
import Register from "./components/auth/Register";
import Login from "./components/auth/login";
import PostLogin from "./components/auth/postLogin.js";
import LoadingScreen from "./components/layout/LoadingScreen.js";
import Congrats from "./components/auth/Congratulations.js";
// for testing
import { ifDev } from "./utils/removeAttribute.js";
// config imports
import reactGAinitialization from "./config/analytics.js";

// creating the store
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { reducer } from "./store/reducers";
import { BrowserRouter as Router } from "react-router-dom";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

function App() {
  const [hasToken, setHasToken] = useState(localStorage.getItem("token"));
  const [userid, setUserid] = useState();
  useEffect(() => reactGAinitialization(), [userid]);

  return (
    <Provider store={store}>
      <Router>
        <div className="App" data-test={ifDev("App-component")}>
          {/* this is fine as a route because all of the routes that will have display their component will only be avalible on a private route */}
          <Route
            exact
            path={[
              "/:userid/recommended",
              "/:userid/trending",
              "/:userid/watchlist",
              "/:userid/explore"
            ]}
            render={props => <Navigation {...props} userid={userid} />}
          />
          <PrivateRoute
            exact
            path="/:userid/recommended"
            component={Dashboardv1}
            data-test={ifDev("dash-component")}
          />
          <Route
            path="/login"
            render={props => (
              <Login
                {...props}
                hasToken={hasToken}
                updateToken={setHasToken}
                updateUserid={setUserid}
              />
            )}
          />
          <Route
            exact
            path={["/", "/register"]}
            render={props => (
              <Register
                {...props}
                hasToken={hasToken}
                updateToken={setHasToken}
                updateUserid={setUserid}
              />
            )}
          />
          <Route
           path="/congrats"
           component={Congrats}
          />
          <Route exact path="/setup-wizard" component={PostLogin} />
          <Route exact path="/loading-screen" component={LoadingScreen} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;