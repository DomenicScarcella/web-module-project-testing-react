import React, { useState } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Display from '../Display';

//2. Test that the Display component renders without any passed in props.
test('Display renders without props', () => {
    render(<Display />);
});

//3. Rebuild or copy a show test data element as used in the previous set of tests.
const testShow = {
    name: 'Showname',
    summary: 'Showsummary',
    seasons: [
        {
            id: 0,
            name: 'S1',
            episodes: []
        },
        {
            id: 1,
            name: 's2',
            episodes: []
        }
    ]
};

//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
test('press button and display show component', () => {
    render(<Display />);

    const button = screen.getByRole('button');
    userEvent.click(button)
    
    const show = screen.queryByTestId('show-container');

    waitFor(() => 
        expect(show).toBeInTheDocument()
    );
});

//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
test('press button and all select options appear', () => {
    render(<Display show={testShow} />);
    const button = screen.getByRole('button');
    userEvent.click(button)

    const seasons = screen.queryAllByTestId('season-option');
    
    waitFor(() =>
        expect(seasons).toHaveLength(2)
    );
});

//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
test('press button and call displayFunc', () => {
    const mockDisplayFunc = jest.fn();

    render(<Display displayFun={mockDisplayFunc} />)
    const button = screen.getByRole('button');
    userEvent.click(button);

    waitFor(() =>
        expect(mockDisplayFunc).toHaveBeenCalled()
    );
});










///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.



