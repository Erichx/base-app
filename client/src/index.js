import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
require("dotenv").config();

ReactDOM.render(<Routes />, document.getElementById("root"));
