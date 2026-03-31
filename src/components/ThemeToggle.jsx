import { useTheme } from '../context/ThemeContext';
import { IoSunny, IoMoon } from 'react-icons/io5';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle-wrapper">
      <label className="theme-toggle">
        <input
          type="checkbox"
          checked={isDark}
          onChange={toggleTheme}
          aria-label="Toggle theme"
        />
        <span className="toggle-slider">
          <span className="toggle-icon moon">
            <IoMoon />
          </span>
          <span className="toggle-icon sun">
            <IoSunny />
          </span>
        </span>
      </label>
    </div>
  );
};

export default ThemeToggle;
