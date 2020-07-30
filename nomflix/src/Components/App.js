import React, { Component } from 'react';
//import { HashRouter as Router, Route } from "react-router-dom";
import Router from "Components/Router"
import Header from "Components/Header"

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Router />
      </>
    );
  }
}

export default App;
