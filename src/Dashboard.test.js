import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import Dashboard from './Dashboard';
import '@testing-library/react/cleanup-after-each';

describe('<Dashboard />', () => {
    it('should show buttons with text Strike, Ball, Foul, Hit', () => {
        const dash = render(<Dashboard />)
        dash.getByText(/Strike/)
        dash.getByText(/Ball/)
        dash.getByText(/Foul/)
        dash.getByText(/Hit/)
    })
    it('Buttons should fire events when clicked', () => {
        const dash = render(<Dashboard />)
        fireEvent.click(dash.getByText(/Strike/));
        fireEvent.click(dash.getByText(/Ball/));
        fireEvent.click(dash.getByText(/Foul/));
        fireEvent.click(dash.getByText(/Hit/));
    })
})