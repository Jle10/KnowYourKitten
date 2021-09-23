import {cleanup, render, screen} from '@testing-library/react';
import Card from './Card';
import userEvent from "@testing-library/user-event";

const props = {
    fact: 'Test fact',
    length: 100
}
afterEach(cleanup);

test('Render a card with less than 120 characters and read more is not visible', () => {
    render(<Card card={props} />);
    const cardContainer = screen.queryByTestId('card-container');
    expect(cardContainer).toBeInTheDocument();

    const readMore = screen.queryByTestId('card-readmore');
    expect(readMore).not.toBeInTheDocument();
});

const props2 = {
    fact: 'Test fact Test factTest factTest factTest factTest factTest factTest factTest factTest factTest factTest factTest fact',
    length: 200
}

test('Render a card with more than 120 characters, read more is visible, and click it', async () => {
    render(<Card card={props2} />);
    const cardContainer = await screen.queryByTestId('card-container');
    expect(cardContainer).toBeInTheDocument();

    const readMore = await screen.queryByTestId('card-readmore');
    expect(readMore).toBeInTheDocument();

    // @ts-ignore
    userEvent.click(readMore);

    const cardTooltip = await screen.queryByTestId('card-tooltip');
    expect(cardTooltip).toBeInTheDocument();
});
