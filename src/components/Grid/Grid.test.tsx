import { render, screen } from '@testing-library/react';
import Grid from './Grid';

test('renders and tests the grid', () => {
    render(<Grid />);
    const grid = screen.getByTestId('grid-container')
    expect(grid).toBeInTheDocument();
    expect(grid.tagName).toBe('DIV');
});
