import React, { Component } from 'react';
import {BrowserRouter,Router, Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route'
import NavBar from '../components/Nav';
import WelcomePage from '../components/WelcomePage';
import Home from '../components/Home';
import '../style/App.css';

class App extends Component {
  render() {
    return (
      
      <BrowserRouter>
        <div className="App">


            <Switch>
              <Route exact path="/" component={WelcomePage}/>
              <Route exact path="/home" component={Home} />

            </Switch>




        </div>
      </BrowserRouter>
    );
  }
}

export default App;
