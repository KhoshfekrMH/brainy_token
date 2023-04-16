import React from "react";
export const Transfer = () => {
    return (
        <div className="menu">
            <h2 className="title"><span role="img" aria-label="tap emoji">🔄</span> Transfer</h2>
            <div>
                <fieldset>
                    <legend>To Account:</legend>
                    <ul>
                        <li>
                            <input type="text" id="transfer-to-id"/>
                        </li>
                    </ul>
                </fieldset>
                <fieldset>
                    <legend>Amount:</legend>
                    <ul>
                        <li>
                            <input type="number" id="amount"/>
                        </li>
                    </ul>
                </fieldset>
            </div>
            <button className="button-faucet">Transfer</button>
        </div>
    );
};