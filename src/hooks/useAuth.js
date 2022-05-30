import { useContext, useDebugValue } from 'react';
import AuthContext from '../context/authContext';

export default function useAuth() {
  const authContext = useContext(AuthContext);

  const auth = authContext.isAuthenticated;

  useDebugValue(auth ? 'Zalogowany' : 'Wylogowany');

  const setAuth = (isAuthenticated, tokenData = null) => {
    if (isAuthenticated) {
      // login
      authContext.login();

      if (tokenData) {
        window.localStorage.setItem('token-data', JSON.stringify(tokenData));
      }

    } else {
      // logout
      authContext.logout();
      if (tokenData) {
        window.localStorage.removeItem('token-data', JSON.stringify(tokenData));
      }
    }

  }

  return [auth, setAuth];
}