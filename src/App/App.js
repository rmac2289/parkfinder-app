import React from 'react';
import './App.css';
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import Main from '../Main/Main'
import { Route } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm'
import SignupForm from '../SignupForm/SignupForm';
import Park from '../Park/Park'
import ParkList from '../ParkList/ParkList'
import AddPark from '../AddPark/AddPark'


function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path='/login' component={LoginForm} />
      <Route exact path='/' component={Main} />
      <Route exact path='/signup' component={SignupForm} />
      <Route exact path='/park' component={Park} />
      <Route exact path='/parklist' component={ParkList} />
      <Route exact path='/addpark' component={AddPark} />
      <Route
            path='/park/:parkId'
            component={Park}
         />
      <Footer />
    </div>
  );
}

export default App;
