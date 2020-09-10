import React from "react";
import Navigation from "./navigation.js";

import "../styles/global.scss";

export default ({ children }) => (
  <div className="container">
    <Navigation />
    {children}
  </div>
);
