import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import ArraySearch from './components/ArraySearch';

const arr = ['next', 'react', 'vue', 'bomberman', 'css', 'border', 'web', 'dear'];

function App() {
  return (
    <div className="App">
      <ArraySearch searchArray={arr} searchRange={2} searchWord={'bo'}></ArraySearch>
      <ArraySearch searchArray={arr} searchRange={1} searchWord={'bo'}></ArraySearch>

      <div className="container">
        <Calculator />
      </div>
    </div>
  );
}

export default App;
