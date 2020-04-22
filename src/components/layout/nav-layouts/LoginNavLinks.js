import React from "react";
import { ifDev } from "../../../utils/removeAttribute.js";
// styling imports
import GroaLogo from "../../../img/groa-logo-nav.png";


export default function LoginNavLinks() {
  return (
    <div className="login nav" data-test={ifDev("login-nav-component")}>
      <img src={GroaLogo} alt="Groa Logo" />
     <p className="signin-title">Sign In</p>
    </div>
  );
}
// 