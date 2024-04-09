import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Gallery from './pages/Gallery';
import Posts from './pages/Posts';
import Todo from './pages/Todo';

function App() {
  return (
    <Router>
      <div className='App'>
        <Sidebar />
        <Routes>
          <Route path='/albums' element={<Gallery />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/todos' element={<Todo />} />
          <Route path='/' element={<Navigate replace to='/users' />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
