import React, { Component } from 'react';
//import { HashRouter as Router, Route } from "react-router-dom";
import Router from "Components/Router"
import GlobalStyles from 'Components/GlobalStyles';

class App extends Component {
  render() {
    return (
      <>
        <Router />
        <GlobalStyles />
      </>
    );
  }
}

export default App;
