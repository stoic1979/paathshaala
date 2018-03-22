import React, { Component } from 'react';
import './App.css';

import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Footer from "./components/Footer"

import Routes from "./routes"


class App extends Component {
  render() {
    return (
      <div>
          <Sidebar />
          <div class="page">
            <Header />
            <div>
            <Routes />
            </div>
            <Footer />
          </div>
      </div>
    );
  }
}

export default App;
