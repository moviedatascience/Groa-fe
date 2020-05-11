import React, { useEffect } from "react";
import { Route } from "react-router-dom";

import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import Test from './Test';

// local imports
import PrivateRoute from "./utils/privateRoute.js";
import Recommendations from "./components/dashboard/Recommendations.js";
import Navigation from "./components/dashboard/Navigation.js";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import DataUpload from "./components/auth/DataUpload";
import Watchlist from "./components/dashboard/Watchlist.js";
import Ratings from './components/dashboard/Ratings';
import Explore from "./components/dashboard/Explore.js";
import Onboarding from './components/auth/Onboarding';
import Onboarding2 from './components/auth/Onboarding2';
import SearchBar from './components/auth/SearchBar';
import OnboardingPlateform from './components/auth/OnboardingPlateform';
// for testing
import { ifDev } from "./utils/removeAttribute.js";
import oktaConfig from './config/oktaConfig';
import { useOktaAuth } from '@okta/okta-react';


// config imports
import reactGAinitialization from "./config/analytics.js";

// creating the store
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { reducer } from "./store/reducers";
import { BrowserRouter as Router } from "react-router-dom";
import { loadState, saveState } from "./store/localStorage.js";

//for theme color change
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";





const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  loadState(),
  composeEnhancers(applyMiddleware(thunk, logger))
);

store.subscribe(() => {
  saveState({
    login: store.getState().login,
    recommendations: store.getState().recommendations,
    rating: store.getState().rating,
    watchlist: store.getState().watchlist
  });
});

function App() {
<<<<<<< HEAD
  //used to create theme of app
=======
  


>>>>>>> a883fac84b969c09c86686f1f0d809ea0d19f6cf
  useEffect(() => reactGAinitialization(), []);
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: "dark",
          primary: {
            main: "#DBE0DF"
          },
          secondary: {
            main: "#6E8B3D"
          }
        },
        typography: {
          fontFamily: "Mallanna, sans-serif"
        }
      }),
    []
  );
  return (
    <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router>
      <Security {...oktaConfig.oidc}>

        <div className="App" data-test={ifDev("App-component")}>        

          {/* this is fine as a route because all of the routes that will have display their component will only be avalible on a private route */}
          <Route path="/implicit/callback" component={LoginCallback} />

          <Route
            exact
            path={[
              "/:user_id/recommendations",
              "/:user_id/watchlist",
              "/:user_id/explore",
              "/:user_id/upload",
              "/:user_id/ratings"
            ]}
            component={Navigation}
          />
          <SecureRoute
            exact
            path="/:user_id/recommendations"
            component={Recommendations}
            data-test={ifDev("dash-component")}
          />
          <SecureRoute
            exact
            path="/:user_id/watchlist"
            component={Watchlist}
          />
<<<<<<< HEAD
          <Route
            exact
            path={[
              '/:user_id/onboarding',
              '/:user_id/onboarding2', 
            ]}
            component={SearchBar}
          />
          <PrivateRoute 
          path='/:user_id/onboardingplateform' 
          component={OnboardingPlateform}
          />
          <PrivateRoute 
          path='/:user_id/onboarding' 
          component={Onboarding}
          />
           <PrivateRoute 
          path='/:user_id/onboarding2' 
          component={Onboarding2}
          />

=======
          <SecureRoute
            exact
            path="/test"
            component={Test}
          />
>>>>>>> a883fac84b969c09c86686f1f0d809ea0d19f6cf
          <Route exact path="/:user_id/upload" component={DataUpload} />
          <Route exact path={["/","/login" ]} component={Login} />
          <Route path="/logout" component={Login} />
          <Route path="/register" component={Register} />
          {/* this could be a modal */}
          {/* <Route path="/congrats" component={Congrats} /> */}
          <SecureRoute exact path="/:user_id/ratings" component={Ratings}/>
          <SecureRoute exact path="/:user_id/explore" component={Explore}/>
        </div>
        </Security>
      </Router>
    </Provider>
    </ThemeProvider>
  );
}

export default App;
