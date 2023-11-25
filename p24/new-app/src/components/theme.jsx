import React, { createContext, useContext, useState } from 'react';
import './theme.css'; // Your global styles file

// Create a theme context with default values
const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

// Theme provider component to wrap your entire application
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  // Apply the selected theme to the root HTML element using CSS variables
  document.documentElement.style.setProperty('--background-color', theme === 'light' ? '#fff' : '#333');
  document.documentElement.style.setProperty('--text-color', theme === 'light' ? '#333' : '#fff');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook to consume the theme context in components
const useTheme = () => useContext(ThemeContext);

// Example usage in a component
 export const ThemedComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`themed-component ${theme}`}>
      <h2>{theme === 'light' ? 'Light Theme' : 'Dark Theme'}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

// Your App component, wrapped with the ThemeProvider



