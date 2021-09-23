import React from 'react';

import {ButtonShuffle} from "./Button.styles";
import useFactsContext from "../../hooks/FactsContext";

function Button() {
    const {FetchData} = useFactsContext();

    return (
        <ButtonShuffle data-testid="button" onClick={() => {
            FetchData()
        }}>
            shuffle
        </ButtonShuffle>
    );
}

export default Button;