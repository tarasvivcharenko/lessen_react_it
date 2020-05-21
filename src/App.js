import React, {Component} from 'react';
import './App.css';
import Header from "./componets/Header";
import Navbar from "./componets/Navbar";
import Profile from "./componets/Profile";


class App extends Component {
  render() {
    return (
        <div className='app-wrap'>
          <Header />
          <Navbar />
          <Profile />
        </div>
    );
  }
}


export default App;
