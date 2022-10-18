import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from '../contexts/ThemeContext';

export default function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(themes.light);

  function changeTheme(theme) {
    setTheme(theme);
  }


  useEffect(() => {
    switch (theme) {
      case themes.dark:
        document.body.classList.add('dark-bg');
        document.body.classList.remove('light-bg');
        break;
      case themes.light:
      default:
        document.body.classList.add('light-bg');
        document.body.classList.remove('dark-bg');
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}