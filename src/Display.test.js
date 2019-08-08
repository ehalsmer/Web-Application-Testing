import { render } from '@testing-library/react';
import React from 'react';
import Display from './Display';
import '@testing-library/react/cleanup-after-each';

describe('<Display />', () => {
    it('Should show an element with Strikes:',() => {
        const display = render(<Display />);
        display.getByText(/Strikes:/);
        display.getByText(/Balls:/);
    })
})