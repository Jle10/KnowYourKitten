import { render, screen } from '@testing-library/react';
import Title from './Title';

test('renders and test the main title', () => {
    render(<Title />);
    const mainTitle = screen.getByTestId('main-title');

    expect(mainTitle).toBeInTheDocument();
    expect(mainTitle.tagName).toBe('H1');
    expect(mainTitle.textContent).toBe('Know Your Kitten');
});