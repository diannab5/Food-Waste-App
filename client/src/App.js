import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
}
from 'react-router-dom';
import './App.css';

import Layout from './components/layouts/Layout';
import LoggedInLayout from './components/layouts/LoggedInLayout';
import CustomRoute from './components/custom-route/CustomRoute';
import Register from './components/register/Register';
import SignIn from './components/signin/SignIn';
import Home from './components/home/Home';
import FirstPage from './components/firstPage/FirstPage';
import Foodlist from './components/foodlist/Foodlist';
import CreateProduct from './components/createproduct/CreateProduct';
import Profile from './components/profile/Profile';


class App extends Component {
  render() {
    return (
      <div>
      <Router>
      <Layout/>
        <Switch>
          <CustomRoute exact path="/" Layout={Layout} Component={Home} />
         <CustomRoute path="/register" Layout={Layout} Component={Register} />
         <CustomRoute path="/signin" Layout={Layout} Component={SignIn} />
         <CustomRoute path="/firstpage" Layout={LoggedInLayout} Component={FirstPage}/>
         <CustomRoute path="/foodlist" Layout={LoggedInLayout} Component={Foodlist}/>
        <CustomRoute path="/createproduct" Layout={LoggedInLayout} Component={CreateProduct}/>
         <CustomRoute path="/profile" Layout={LoggedInLayout} Component={Profile}/>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
