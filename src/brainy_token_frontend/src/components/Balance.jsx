import React, {useState} from "react";
import { Principal } from "@dfinity/principal";
import {brainy_token_backend} from "../../../declarations/brainy_token_backend";

export const Balance = () => {
    
    const [inputValue, setInput] = useState("");
    const [balanceResult, setBalance] = useState("");
    const [cryptoSymbol, setSymbol] = useState("");
    const [isHidden, setHidden] = useState(true);

    async function handleClick() {
        const principal = Principal.fromText(inputValue);
        const balance = await brainy_token_backend.balanceOf(principal);
        setBalance(balance.toLocaleString());
        setSymbol(await brainy_token_backend.getSymbol());
        setHidden(false);
    }

    return (
        <div className="menu">
            <h2 className="title"><span role="img" aria-label="tap emoji">🛂</span> Balance Check</h2>
            <label>Check account token balance:</label>
            <div style={{marginTop: "20px"}}>
                <input
                    type="text"
                    id="balance-principal-id"
                    placeholder="Enter a Principal ID"
                    style={{width: "600px"}}
                    value={inputValue}
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>
            <button
                id="btn-request-balance"
                className="button-faucet"
                onClick={handleClick}
            >
                Check Balance
            </button>
            <p hidden={isHidden}>This Account has a balance of {balanceResult} {cryptoSymbol}.</p>
        </div>
    );
};