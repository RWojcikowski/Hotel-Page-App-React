import React from 'react';

const ThemeContext = React.createContext({
  color: 'info',
  changeTheme: () => { }
});
ThemeContext.displayName = 'ThemeContext'
export default ThemeContext;