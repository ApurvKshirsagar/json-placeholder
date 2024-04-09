import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Sidebar.css';
import user_logo from '../assets/user_logo.png';
import { FiMenu } from 'react-icons/fi';

export default function SideBar() {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <button
        className='sidebar-toggle'
        onClick={handleToggleSidebar}
        aria-label='Toggle Sidebar'
      >
        <FiMenu size={24} color='#fff' />
      </button>
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className='user-info'>
          <img src={user_logo} alt='User' className='user-avatar' />
          <h2 className='user-name'>User123</h2>
          <p className='user-detail'>User Name</p>
        </div>
        <nav className='navigation'>
          <ul className='nav-list'>
            <li
              className={`nav-item ${activeItem === '/posts' ? 'active' : ''}`}
            >
              <Link to='/posts' onClick={() => setActiveItem('/posts')}>
                Posts
              </Link>
            </li>
            <li
              className={`nav-item ${activeItem === '/albums' ? 'active' : ''}`}
            >
              <Link to='/albums' onClick={() => setActiveItem('/albums')}>
                Albums
              </Link>
            </li>
            <li
              className={`nav-item ${activeItem === '/todos' ? 'active' : ''}`}
            >
              <Link to='/todos' onClick={() => setActiveItem('/todos')}>
                To Dos
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
