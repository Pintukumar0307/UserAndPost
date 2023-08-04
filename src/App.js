import React from 'react'
import './App.css';
import Header from './component/Header';
import User from './pages/User';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Post from './pages/Post';
import UserDetails from './pages/UserDetails';
import PostDetails from './pages/PostDetails';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/user" element={<User/>}></Route>
        <Route path="/user/:id" element={<UserDetails/>}></Route>
        <Route path='/post' element={<Post/>}></Route>
        <Route path='/post/:id' element={<PostDetails/>}></Route>
        
      </Routes>
     
    </Router>
  )
}

export default App