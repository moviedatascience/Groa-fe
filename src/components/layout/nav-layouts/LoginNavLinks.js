import React from "react";
import { ifDev } from "../../../utils/removeAttribute.js";
import { Link } from "react-router-dom";
// styling imports
import GroaLogo from "../../../img/groa-logo-nav.png";

export default function LoginNavLinks() {
  return (
    <div className="login nav" data-test={ifDev("login-nav-component")}>
      <img src={GroaLogo} alt="Groa Logo" />
      <Link className="register link" to="/register" data-test={ifDev("register-link")}>
        Sign up
      </Link>
    </div>
  );
}
