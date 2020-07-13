import React from 'react';
import CommentForm from './CommentForm';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { CommentsContextProvider } from '../Contexts/CommentsContext';
import { ParkNameContextProvider } from '../Contexts/ParkNameContext';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
    <CommentsContextProvider>
        <ParkNameContextProvider>
            <CommentForm />
        </ParkNameContextProvider>
    </CommentsContextProvider>
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});