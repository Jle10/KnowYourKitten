import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";
import FactsLoading from "../../hooks/FactsLoading";

jest.mock('../../hooks/FactsLoading');
const mockFactsLoading = FactsLoading as jest.MockedFunction<typeof FactsLoading>

test('renders and tests the app', async () => {
    render(<App />);
    const mainContainer = screen.getByTestId('main-container')
    expect(mainContainer).toBeInTheDocument();
    expect(mainContainer.tagName).toBe('MAIN');

    expect(mockFactsLoading).toBeCalledTimes(1);

    const cards = await screen.queryAllByTestId('card-container');
    expect(cards).toMatchSnapshot();

    const button = screen.getByTestId('button');
    expect(button).toBeInTheDocument();

    userEvent.click(button);
    expect(mockFactsLoading).toBeCalledTimes(2);
});
