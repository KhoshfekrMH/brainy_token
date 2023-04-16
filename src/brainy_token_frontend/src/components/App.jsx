import * as React from "react";
import {Header} from "./Header";
import {Faucet} from "./Faucet";
import {Balance} from "./Balance";
import {Transfer} from "./Transfer";

export const App = () => {
    return (
        <div>
            <Header />
            <Faucet />
            <Balance />
            <Transfer />
        </div>
    );
};