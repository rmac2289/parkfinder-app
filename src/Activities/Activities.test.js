import React from 'react';
import Activities from './Activities';
import ReactDOM from 'react-dom';
import { ActivityContextProvider } from '../Contexts/ActivitiesContext'
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
        <ActivityContextProvider>
            <Activities />
        </ActivityContextProvider>
    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});