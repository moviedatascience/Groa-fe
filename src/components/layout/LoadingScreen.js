import React from "react";
import { ifDev } from "../../utils/removeAttribute.js";

export default function LoadingScreen() {
  return (
    <div data-test={ifDev("loading-screen")}>
      <p>Hello</p>
    </div>
  );
}
