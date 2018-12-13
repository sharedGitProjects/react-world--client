import React from "react";
import "./style.css";

export default ({ x, y }) => <div className="grandma" style={{ gridColumn: x + 1, gridRow: y + 1 }} />;
