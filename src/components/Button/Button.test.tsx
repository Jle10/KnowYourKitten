import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders and tests the app', () => {
    render(<Button />);
    const button = screen.getByTestId('button')
    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe('BUTTON');
});