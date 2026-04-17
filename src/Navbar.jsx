import { IoHome, IoPersonSharp, IoBriefcase, IoLink, IoSunny, IoMoon } from 'react-icons/io5';
import { useTheme } from './context/ThemeContext';
import './Navbar.css';

const Navbar = ({ activeSection, onSectionChange }) => {
  const { isDark, toggleTheme } = useTheme();

  const handleNavClick = (section) => {
    onSectionChange(section);
  };

  return (
    <nav className="dynamic-island-nav" role="navigation" aria-label="Main navigation">
      <div className="nav-content">
        <button
          className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}
          onClick={() => handleNavClick('home')}
          aria-label="Bosh sahifa"
          aria-current={activeSection === 'home' ? 'page' : undefined}
        >
          <IoHome size={24} />
          <span className="nav-label">Bosh sahifa</span>
        </button>

        <button
          className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}
          onClick={() => handleNavClick('about')}
          aria-label="Men haqimda"
          aria-current={activeSection === 'about' ? 'page' : undefined}
        >
          <IoPersonSharp size={24} />
          <span className="nav-label">Men haqimda</span>
        </button>

        <button
          className={`nav-item ${activeSection === 'portfolio' ? 'active' : ''}`}
          onClick={() => handleNavClick('portfolio')}
          aria-label="Portfolio"
          aria-current={activeSection === 'portfolio' ? 'page' : undefined}
        >
          <IoBriefcase size={24} />
          <span className="nav-label">Portfolio</span>
        </button>

        <button
          className={`nav-item ${activeSection === 'links' ? 'active' : ''}`}
          onClick={() => handleNavClick('links')}
          aria-label="Bog'lanish"
          aria-current={activeSection === 'links' ? 'page' : undefined}
        >
          <IoLink size={24} />
          <span className="nav-label">Bog'lanish</span>
        </button>

        <div className="nav-separator"></div>

        <button
          className="nav-item theme-toggle"
          onClick={toggleTheme}
          aria-label={isDark ? 'Yorug\' rejimga o\'tish' : 'Qorong\'i rejimga o\'tish'}
        >
          {isDark ? <IoSunny size={24} /> : <IoMoon size={24} />}
          <span className="nav-label">{isDark ? 'Yorug\' rejim' : 'Qorong\'i rejim'}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
