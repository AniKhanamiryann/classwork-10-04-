import React from 'react';
import './App.css';
import PostsList from "./components/PostsList";


function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to My React App</h1>
        </header>
        <div>
          <PostsList/>
        </div>
      </div>
  );
}

export default App;
