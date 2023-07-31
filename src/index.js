import React from "react";
import ReactDOM from "react-dom";
import { add, multiply, subtract, divide } from "./calculator";

ReactDOM.render(
  <div>
    <ul>
      <li>Addition: {add(1, 2)} </li>
      <li>Multiplication: {multiply(5, 8)} </li>
      <li>Subtraction: {subtract(7, 2)} </li>
      <li>Division: {divide(10, 2)} </li>
    </ul>
  </div>,
  document.getElementById("root")
);
