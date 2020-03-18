import React from "react";
import { ifDev } from "../../../utils/removeAttribute.js";
import { Link } from "react-router-dom";

export default function LoginNavLinks() {
  return (
    <div className="login nav" data-test={ifDev("login-nav-component")}>
      <Link className="link" to="/register" data-test={ifDev("register-link")}>
        Register
      </Link>
    </div>
  );
}
