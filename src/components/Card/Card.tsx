import React, {useEffect, useState} from 'react';

import {
    CardContainer,
    CardImg,
    CardFact,
    CardReadMore,
    CardTooltip
} from './Card.styles';

import {Fact} from "../../context/FactsContext";
import axios from "axios";

export const baseUrl = 'https://cataas.com/cat'

const Card = ({card}: { card: Fact }) => {
    const [src, setSrc] = useState('');
    const [readMore, setReadMore] = useState('')

    useEffect(() => {
        const jsonUrl = baseUrl + '?json=true&width=300';
        axios.get(jsonUrl).then((response) => {
            setSrc(baseUrl + '/' + response.data.id);
        }).catch((error) => {
            throw new Error("Something went wrong fetching the data:" + error)
        });
    }, [card]);

    function toggleReadMore() {
        readMore === 'in' ? setReadMore('') : setReadMore('in');
    }

    return (
        <CardContainer data-testid="card-container">
            <CardImg src={src} alt="Cat image" width="300px" height="200px"/>
            <CardFact>
                <span className="ellipsis">
                    {card.fact}
                </span>
                {card.length > 120 &&
                <CardReadMore data-testid="card-readmore" type="button" className={readMore} onClick={toggleReadMore}>
                    {readMore === 'in' ? 'Read Less' : 'Read More'}
                    <CardTooltip data-testid="card-tooltip">
                        {card.fact}
                    </CardTooltip>
                </CardReadMore>
                }
            </CardFact>
        </CardContainer>
    );
};

export default Card;
