import React from 'react';

const ThemeContext = React.createContext({
  color: 'info',
  changeTheme: () => { }
});

export default ThemeContext;