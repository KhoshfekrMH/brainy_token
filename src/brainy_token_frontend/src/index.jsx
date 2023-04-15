import {brainy_token_backend} from "../../declarations/brainy_token_backend";
import React, {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import {App} from "./components/App";
import "../assets/main.css"

const init = async () => {
    const root = ReactDOM.createRoot ( document.getElementById ( 'root' ) );
    root.render (
        <StrictMode>
            <App />
        </StrictMode>
    );
};

init ();