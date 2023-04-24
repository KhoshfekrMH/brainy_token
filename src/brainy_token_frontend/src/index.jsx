import React, {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import {App} from "./components/App";
import "../assets/main.css"
import {AuthClient} from "@dfinity/auth-client";

const init = async () => {
    const authClient = await AuthClient.create();

    if (await authClient.isAuthenticated()) {
        await handleAuthenticated ( authClient );
    } else {
        await authClient.login({
            identityProvider: "https://identity.ic0.app/",
            onSuccess: () => {
                handleAuthenticated(authClient);
            }
        });
    }
};

async function handleAuthenticated(authClient) {
    const root = ReactDOM.createRoot ( document.getElementById ( 'root' ) );
    root.render (
        <StrictMode>
            <App />
        </StrictMode>
    );
}

init ();