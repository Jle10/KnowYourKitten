import React from 'react';
import Card from '../Card/Card'

import {GridContainer} from './Grid.styles';
import useFactsLoading from "../../hooks/FactsLoading";
import useFactsContext from "../../hooks/FactsContext";

const Grid = () => {
    const {facts} = useFactsContext();
    useFactsLoading();

    return (
        <GridContainer data-testid="grid-container">
            {
                facts.map((card, index) => (
                    <Card key={index} card={card}/>
                ))
            }
        </GridContainer>
    );
}

export default Grid;