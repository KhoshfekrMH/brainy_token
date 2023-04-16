import * as React from "react";
import {Header} from "./Header";
import {Faucet} from "./Faucet";
import {Balance} from "./Balance";

export const App = () => {
    return (
        <div>
            <Header />
            <Faucet />
            <Balance />
        </div>
    );
};