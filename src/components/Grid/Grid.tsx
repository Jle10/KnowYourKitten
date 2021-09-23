import React from 'react';
import Card from '../Card/Card'

import { GridContainer } from './Grid.styles';
import useFetchData from "../../hooks/FetchData";
import { FactsContext } from "../../context/FactsContext";

const Grid = () => {
    const factsContextValue = useFetchData('https://catfact.ninja/facts?limit=6&max_length=400');
    const facts = factsContextValue.facts;

    return (
        <FactsContext.Provider value={factsContextValue}>
            <GridContainer data-testid="grid-container">
                {
                    facts.map(card => (
                        <Card card={card}/>
                    ))
                }
            </GridContainer>
        </FactsContext.Provider>
    );
}

export default Grid;