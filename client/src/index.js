import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routes from "./routes";

require("dotenv").config();

ReactDOM.render(<Routes />, document.getElementById("root"));
