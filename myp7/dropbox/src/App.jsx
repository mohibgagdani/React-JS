import React, { useEffect, useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleBodyClick = useCallback((e) => {
    if (isOpen && e.target.closest('.dropdown') === null) {
      closeDropdown();
    }
  }, [isOpen]);

  useEffect(() => {
    document.body.addEventListener('click', handleBodyClick);
    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, [handleBodyClick]);

  return (
    <div className="app">
      <h1>Welcome to My App</h1>
      {isOpen && (
        <div className="dropdown">
          <div className="dropdown-content">
            <span className="close-icon" onClick={closeDropdown}>&times;</span>
            <h2>Dropdown Content</h2>
            <p>This is a simple dropdown.</p>
            <button onClick={closeDropdown}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
