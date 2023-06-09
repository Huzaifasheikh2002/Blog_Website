import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Muigridfooter from './components/Footer';

const App = () => {
  return (<>
    <Navbar/>
    <div className='container'>
      <Switch>
      
      {/* <Route path='/' exact component={Nav} /> */}
        <Route path='/' exact component={Home} />
        <Route path='/blog/:id' component={Blog} />
        <Redirect to='/' />

      </Switch>
    </div>
    <Muigridfooter/>
  </> );
};

export default App;
