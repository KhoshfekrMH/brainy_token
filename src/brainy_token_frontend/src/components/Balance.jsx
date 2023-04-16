import React from "react";

export const Balance = () => {
    return (
        <div className="menu">
            <h2 className="title"><span role="img" aria-label="tap emoji">🛂</span> Balance Check</h2>
            <label>Check account token balance:</label>
            <div style={{marginTop: "20px"}}>
                <input type="text" id="balance-principal-id" placeholder="Enter a Principal ID" style={{width: "600px"}}/>
            </div>
            <button id="btn-request-balance" className="button-faucet">Check Balance</button>
        </div>
    );
};