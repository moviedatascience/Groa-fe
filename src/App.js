import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ifDev } from "./utils/removeAttribute.js";

// local imports
import PrivateRoute from "./utils/PrivateRoute.js";
import Dashboardv1 from "./components/dashboard/Dashboardv1.js";
import Navigation from "./components/dashboard/Navigation.js";
import Register from "./components/auth/Register";

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
  useEffect(() => reactGAinitialization(), []);

  return (
    <Provider store={store}>
      <Router>
        <div className="App" data-test={ifDev("App-component")}>
          <Navigation />
          <Switch>
            <PrivateRoute path="/dashboard" component={Dashboardv1} />
            <Route exact path="/navigation" component={Navigation} />
            <Route exact path="/" component={Register} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
