import React from 'react';
import Search from './Search';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ActivityContextProvider } from '../Contexts/ActivitiesContext';
import { ParkNameContextProvider } from '../Contexts/ParkNameContext';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
        <ActivityContextProvider>
            <ParkNameContextProvider>
                <Search />
            </ParkNameContextProvider>
        </ActivityContextProvider>
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});