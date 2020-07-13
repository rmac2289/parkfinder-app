import React from 'react';
import LoginForm from './LoginForm';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { LoginContextProvider } from '../Contexts/LoginContext';
import { RedirectContextProvider } from '../Contexts/RedirectContext';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
    <LoginContextProvider>
        <RedirectContextProvider>
            <LoginForm />
        </RedirectContextProvider>
    </LoginContextProvider>
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});