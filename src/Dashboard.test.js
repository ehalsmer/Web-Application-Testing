import { render, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect'
import React from 'react';
import Dashboard from './Dashboard';
import '@testing-library/react/cleanup-after-each';

describe('<Dashboard />', () => {
    it('should show buttons with text Strike, Ball, Foul, Hit', () => {
        const dash = render(<Dashboard />)
        const buttons = dash.getAllByTestId("button");
        expect(buttons).toHaveLength(4);
    })
    it('Buttons should fire events when clicked', () => {
        const dash = render(<Dashboard />)
        const buttons = dash.getAllByTestId("button");
        buttons.forEach(button => fireEvent.click(button))
    })
})