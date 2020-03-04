import React from "react";

import Dashboardv1 from "./dashboardv1";
import Navigation from "./Navigation.js";

const Dashboard = () => {
  return (
    <div
      style={{
        marginTop: "-30px",
        marginBottom: "-50px",
        backgroundColor: "#7A7A7A",
        zIndex: "1"
      }}
    >
      <Navigation />
      <Dashboardv1 style={{ zIndex: "10" }} />
    </div>
  );
};

export default Dashboard;
