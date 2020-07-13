import React from 'react';
import Park from './Park';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { RedirectContextProvider } from '../Contexts/RedirectContext';
import { ActivityContextProvider } from '../Contexts/ActivitiesContext';
import { ParkNameContextProvider }  from '../Contexts/ParkNameContext';
import ParkList from '../ParkList/ParkList'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
  <ActivityContextProvider>
     <RedirectContextProvider>
         <ParkNameContextProvider>
             <ParkList>
                <Park />
            </ParkList>
        </ParkNameContextProvider>    
    </RedirectContextProvider>
    </ActivityContextProvider>
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});