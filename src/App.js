import React, { Component } from 'react';
import DashboardComponent from './components/DashboardComponent/DashboardComponent';
import NavBarComponent from './components/NavBarComponent/NavBarComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBarComponent></NavBarComponent>
        <DashboardComponent></DashboardComponent>
      </div>
    );
  }
}

export default App;
