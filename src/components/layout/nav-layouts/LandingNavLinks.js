import React from "react";
import { ifDev } from "../../../utils/removeAttribute.js";
import GroaLogo from "../../../img/groa-logo-nav.png";

export default function RegisterNavLinks() {
  return (
    <div className="register nav" data-test={ifDev("register-nav-component")}>
      <img src={GroaLogo} alt="Groa Logo" />
     <h3 className="signin-title">Login</h3>
    </div>
  );
}
