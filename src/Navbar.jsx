import { useState } from 'react';
import { IoHome, IoPersonSharp, IoBriefcase, IoLink, IoSunny, IoMoon } from 'react-icons/io5';
import { useTheme } from './context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home');
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="dynamic-island-nav">
      <div className="nav-content">
        <div className={`nav-item ${activeItem === 'home' ? 'active' : ''}`} onClick={() => setActiveItem('home')}>
          <IoHome size={24} />
          <span className="nav-label">Home</span>
        </div>

        <div className={`nav-item ${activeItem === 'about' ? 'active' : ''}`} onClick={() => setActiveItem('about')}>
          <IoPersonSharp size={24} />
          <span className="nav-label">About me</span>
        </div>

        <div className={`nav-item ${activeItem === 'portfolio' ? 'active' : ''}`} onClick={() => setActiveItem('portfolio')}>
          <IoBriefcase size={24} />
          <span className="nav-label">Portfolio</span>
        </div>

        <div className={`nav-item ${activeItem === 'links' ? 'active' : ''}`} onClick={() => setActiveItem('links')}>
          <IoLink size={24} />
          <span className="nav-label">Links</span>
        </div>

        <div className="nav-separator"></div>

        <div className="nav-item theme-toggle" onClick={toggleTheme}>
          {isDark ? <IoSunny size={24} /> : <IoMoon size={24} />}
          <span className="nav-label">{isDark ? 'Light mode' : 'Dark mode'}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
