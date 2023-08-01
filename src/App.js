import React from 'react';
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar.js'
import Feed from './Feed.js'
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, login, logout } from '../src/features/userSlice.js'
import Login from '../src/Login'
import { auth } from './firebase';
import { useEffect } from 'react';
import Widgets from './Widgets';
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user is logged in 
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL
        }));
      } else {
        dispatch(logout())
      }
    })
  }, []);

  return (
    <div className="app">

      {!user ? <Login /> : (<>     <Header />
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets/>
        </div></>)}


    </div>
  );
}

export default App;
