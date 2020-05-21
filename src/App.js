import React, {Component} from 'react';
import './App.css';
import Techno from "./Techno";
import Header from "./Header";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
        <div>
          <Header />
          <Techno />
          <Footer />
        </div>
    );
  }
}


export default App;
