import ReactGA from "react-ga";
import { createBrowserHistory } from "history";

// article source: https://levelup.gitconnected.com/using-google-analytics-with-react-3d98d709399b

export default function reactGAinitialization() {
  console.log(process.env.REACT_APP_ANALYTICS_ID_TEST);
  ReactGA.initialize(process.env.REACT_APP_ANALYTICS_ID_TEST);
  // , {
  // debug: true // please take me out when debugging is done.
  // standardImplementation: true
  // });

  // sets any user spefic data that we might want to track.
  // ReactGA.set({
  //   userId: 1 // hard coded until I can dynamically recieve userIds
  // });

  // initialize google analytics page view tracking
  // createBrowserHistory().listen(location => {
  //   ReactGA.set({ page: location.pathname }); // Update the user's current page
  //   ReactGA.pageview(location.pathname); // Record a pageview for the given page
  // });

  // can add modalviews
  // ReactGA.modalview({route uri})

  // loading times of js libraries? <-- waiting to hook up to proper domain name for google analytics.
  // ReactGA.timing({
  //   category: "JS Libraries",
  //   variable: "load",
  //   value: 20,
  //   label: "CDN libs"
  // });
}
