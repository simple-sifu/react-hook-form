require("file-loader?name=[name].[ext]!../index.html");
import React from "react";
import ReactDOM from "react-dom";
import FunctionalAstronauts from "./FunctionalAstronauts";

ReactDOM.render(<FunctionalAstronauts />, document.getElementById("root"));
