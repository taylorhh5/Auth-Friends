import React from 'react';
import { BrowserRouter as Router, Route,  Link } from 'react-router-dom';
import './App.css';
import Login from './components/Login.js'
import PrivateRoute from './components/PrivateRoute.js';
import FriendsList from './components/Friends.js'


function App() {
  return (


    <Router>
      <div className="App">

        <Link to="/login">Login</Link>
    
     
        <PrivateRoute exact path="/protected" component={FriendsList} />
        <Route  component={Login} />
    

      </div>
    </Router>
  );
}

export default App;
