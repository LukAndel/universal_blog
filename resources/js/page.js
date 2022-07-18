import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Page/App";

const root = ReactDOM.createRoot(document.querySelector("#root"));
typeof data != "undefined"
    ? root.render(<App data={data} />)
    : root.render(<App />);
