import React from 'react';
import './App.css';
import { MongoStatusChecker } from './components/mongo-status-checker/mongo-status-checker';

function App() {
  return (
    <div className="App">
      <h1>Bit 元件 - 測試 MongoDB</h1>
      <MongoStatusChecker />
    </div>
  );
}

export default App;
