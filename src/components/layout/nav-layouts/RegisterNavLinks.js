import React from "react";
import { ifDev } from "../../../utils/removeAttribute.js";
import { Link } from "react-router-dom";
import "./RegisterNavLinks.scss";

export default function RegisterNavLinks() {
  return (
    <div className="register-nav" data-test={ifDev("register-nav-component")}>
      <Link className="login-link" to="/login" data-test={ifDev("login-link")}>
        Log in
      </Link>
    </div>
  );
}