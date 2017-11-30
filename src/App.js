import React from 'react';
import logo from './logo.svg';
import SearchBar from './components/SearchBar/SearchBar';
import Wrapper from './components/Wrapper/Wrapper'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <Wrapper />
        </div>
      </div>
    );
  }
}

export default App;
