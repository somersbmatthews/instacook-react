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
        <video width="600" height="400" controls>
        <source src="movie.mp4" type="video/mp4">
        <source src="movie.ogg" type="video/ogg">
        Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}

export default App;
