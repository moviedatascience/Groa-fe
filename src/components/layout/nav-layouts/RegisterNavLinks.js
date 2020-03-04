import React from "react";
import { ifDev } from "../../../utils/removeAttribute.js";
import { Link } from "react-router-dom";
import "./RegisterNavLinks.scss";

export default function RegisterNavLinks() {
  return (
    <div className="register-nav" data-test={ifDev("loading-screen")}>
      <Link className="login-link" to="/login">
        Log in
      </Link>
    </div>
  );
}
