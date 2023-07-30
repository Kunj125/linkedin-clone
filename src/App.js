import React from 'react';
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar.js'
import Feed from './Feed.js'
function App() {
  return (
    <div className="app">
      {/* header  */}
      <Header/>
      <div className="app__body">
        <Sidebar/>
        <Feed/>
      {/* main -> sidebar, feed, widgets */}
      </div>
      
    </div>
  );
}

export default App;
