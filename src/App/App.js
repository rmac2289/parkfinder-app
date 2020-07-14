import React, { useContext, useEffect } from 'react';
import './App.css';
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import Main from '../Main/Main'
import { Route, Redirect } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm'
import SignupForm from '../SignupForm/SignupForm';
import Park from '../Park/Park'
import ParkList from '../ParkList/ParkList'
import AddPark from '../AddPark/AddPark';
import CommentList from '../CommentList/CommentList'
import { ParkNameContextProvider } from '../Contexts/ParkNameContext';
import { ActivityContextProvider } from '../Contexts/ActivitiesContext';
import { LoginContext } from '../Contexts/LoginContext';
import { RedirectContextProvider } from '../Contexts/RedirectContext';
import { CommentsContextProvider } from '../Contexts/CommentsContext';
import ParkApiService from '../services/ParkApiService';
import { ParkContext } from '../Contexts/ParkContext';


function App() {
  const [park, setPark] = useContext(ParkContext)
  useEffect(() => {
    ParkApiService.getParks()
          .then(data => setPark(data))
          .catch((error) => { console.error('Error:', error) });
      },[setPark]);
  

  const [loggedIn] = useContext(LoginContext)
  return (
      <ActivityContextProvider>
        <ParkNameContextProvider>
            <CommentsContextProvider>
              <RedirectContextProvider>
          <div className="App">
            <Nav />
            <Route exact path='/login' component={LoginForm} />
            <Route exact path='/' component={Main} />
            <Route exact path='/signup' component={SignupForm} />
            <Route exact path='/park' component={Park} />
            <Route exact path='/parklist' component={ParkList} />
            <Route exact path='/commentlist' component={CommentList}>
            {!loggedIn ? <Redirect to="/login" /> : <CommentList />}
            </Route>
            <Route exact path='/addpark'>
            {!loggedIn ? <Redirect to="/login" /> : <AddPark />}
              </Route>
            <Route
            path='/park/:parkId'
            component={Park}
            />
          <Footer />
          </div>
              </RedirectContextProvider>
            </CommentsContextProvider>
        </ParkNameContextProvider>
      </ActivityContextProvider>
  );
}

export default App;
