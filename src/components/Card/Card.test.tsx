import { render, screen } from '@testing-library/react';
import Card from './Card';
import {Fact} from "../../context/FactsContext";

const card = jest.fn();

test('renders and tests the card and its elements', () => {
    // render(<Card card={card} />);
    const cardContainer = screen.getByTestId('card-container')
    expect(cardContainer).toBeInTheDocument();
    expect(cardContainer.tagName).toBe('DIV');
});
