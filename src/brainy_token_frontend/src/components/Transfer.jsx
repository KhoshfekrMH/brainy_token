import React, {useState} from "react";
import {brainy_token_backend} from "../../../declarations/brainy_token_backend";
import {Principal} from "@dfinity/principal";

export const Transfer = () => {

    const [recipientId, setId] = useState("");
    const [amount, setAmount] = useState("");
    const [isDisabled, setDisabled] = useState(false);
    const [feedback, setFeedback] = useState("");
    const [isHidden, setHidden] = useState(true);

    async function handleClick() {
        setHidden(true);
        setDisabled(true);
        const recipient = Principal.fromText(recipientId);
        const amountToTransfer = Number(amount);
        const result = await brainy_token_backend.transfer(recipient, amountToTransfer);
        setFeedback(result);
        setHidden(false);
        setDisabled(false);
    }

    return (
        <div className="menu">
            <h2 className="title"><span role="img" aria-label="tap emoji">🔄</span> Transfer</h2>
            <div>
                <fieldset>
                    <legend>To Account:</legend>
                    <ul>
                        <li>
                            <input
                                type="text"
                                id="transfer-to-id"
                                value={recipientId}
                                onChange={(e) => setId(e.target.value)}
                            />
                        </li>
                    </ul>
                </fieldset>
                <fieldset>
                    <legend>Amount:</legend>
                    <ul>
                        <li>
                            <input
                                type="number"
                                id="amount"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                        </li>
                    </ul>
                </fieldset>
            </div>
            <button
                className="button-faucet"
                onClick={handleClick}
                disabled={isDisabled}
            >
                Transfer
            </button>
            <p hidden={isHidden}>{feedback}</p>
        </div>
    );
};