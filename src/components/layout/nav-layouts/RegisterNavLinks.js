import React from "react";
import { ifDev } from "../../../utils/removeAttribute.js";
import { Link } from "react-router-dom";
// styling imports
import MiniGroaLogo from "../../auth/GroaWhite.png";

export default function RegisterNavLinks() {
  return (
    <div className="register nav" data-test={ifDev("register-nav-component")}>
      <img src={MiniGroaLogo} alt="Groa Logo" />
      <Link className="login link" to="/login" data-test={ifDev("login-link")}>
        Login
      </Link>
    </div>
  );
}
