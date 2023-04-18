import React, {useState} from "react";
import {brainy_token_backend} from "../../../declarations/brainy_token_backend";

export const Faucet = () => {

    const [isDisabled, setDisabled] = useState(false);
    const [buttonText, setButtonText] = useState("Claim 10K BKH");
    async function handleClick() {
        setDisabled(true);
        const result = await brainy_token_backend.payOut();
        setButtonText(result);
    }

    return (
        <div className="menu">
            <h2 className="title"><span role="img" aria-label="tap emoji">🎟️</span> Faucet</h2>
            <label>Get your free Brainy Token here! claim 10,000 BKH token to </label>
            <button
                disabled={isDisabled}
                className="button-faucet"
                onClick={handleClick}
            >
                {buttonText}
            </button>
        </div>
    );
};