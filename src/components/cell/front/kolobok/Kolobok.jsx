import React from "react";
import "./style.css";

export default ({ x, y, isDead }) => (
  <div className={isDead ? "skull" : "kolobok"} style={{ gridColumn: x + 1, gridRow: y + 1 }} />
);
