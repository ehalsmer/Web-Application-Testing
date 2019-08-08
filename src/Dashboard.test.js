import { render } from '@testing-library/react';
import React from 'react';
import Dashboard from './Dashboard';
// import '@testing-library/react/cleanup-after-each';

describe('<Dashboard />', () => {
    it('should show a button with text Strike', () => {
        const dash = render(<Dashboard />)
        dash.getByText(/Strike/)
    })
})