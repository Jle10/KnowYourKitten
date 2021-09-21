import { render, screen } from '@testing-library/react';
import App from './App';

test('renders and tests the app', () => {
    render(<App />);
    const mainContainer = screen.getByTestId('main-container')
    expect(mainContainer).toBeInTheDocument();
    expect(mainContainer.tagName).toBe('MAIN');
});
