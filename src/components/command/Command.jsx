import React from "react";
import "./style.css";

export default ({ operation, title }) => (
  <div className="command" onClick={operation}>
    {title}
  </div>
);
