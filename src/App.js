import React from 'react';
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar.js'
import Feed from './Feed.js'
import { useSelector } from 'react-redux';
import {selectUser} from '../src/features/userSlice.js'
import Login from '../src/Login'
function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">
      <Header/>

      {!user ? <Login/> : (<div className="app__body">
        <Sidebar/>
        <Feed/>
      </div>)}
      
      
    </div>
  );
}

export default App;
