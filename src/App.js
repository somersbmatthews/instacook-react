import React, { Component } from 'react';
import './App.css';
import IntegrationAutosuggest from './components/AutoSuggest';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Instacook</h1>
        <h2>Search for a recipe...</h2>

        <IntegrationAutosuggest />
      </div>
    );
  }
}

export default App;
