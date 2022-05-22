import { useEffect, useReducer, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels';
import LoadingIcon from './components/UI/LoadingIcon/LoadingIcon';
import Searchbar from './components/UI/Searchbar/Searchbar';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import ThemeButton from './components/UI/ThemeButton/ThemeButton';
import ThemeContext from './context/themeContext';
import AuthContext from './context/authContext';


const backendHotels = [
  {
    id: 1,
    name: 'Pod Dębem',
    city: 'Warszawa',
    rating: 8.3,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat id lorem vitae accumsan.',
    image: ''
  },
  {
    id: 2,
    name: 'Nad Potokiem',
    city: 'Wrosław',
    rating: 8.8,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat id lorem vitae accumsan.',
    image: ''
  }
];


const reducer = (state, action) => {
  //...
  switch (action.type) {
    case 'change-theme':
      const theme = state.theme === 'info' ? 'dark' : 'info'
      return { ...state, theme };
    case 'set-hotels':
      return { ...state, hotels: action.hotels };
    case 'set-loading':
      return { ...state, loading: action.loading };
    case 'login':
      return { ...state, isAuthenticated: true };
    case 'logout':
      return { ...state, isAuthenticated: false };
    default:
      throw new Error(' Nie ma takiej Akcji: ' + action.type)
  }
}

const initialState = {
  hotels: [],
  loading: true,
  isAuthenticated: false,
  theme: 'info',
}

function App() {


  // const [theme, setTheme] = useState('info');
  const [state, dispatch] = useReducer(reducer, initialState);



  const searchHandler = term => {
    const newHotels = [...backendHotels]
      .filter(x => x.name
        .toLowerCase()
        .includes(term.toLowerCase()));
    // setHotels(newHotels);
    dispatch({ type: 'set-hotels', hotels: newHotels });
  }

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'set-hotels', hotels: backendHotels });
      dispatch({ type: 'set-loading', loading: false });
    }, 1000);
  }, []);


  const header = (
    <Header>
      <Searchbar
        onSearch={term => searchHandler(term)}
      />
      <ThemeButton />
    </Header>
  );
  const content = (
    state.loading
      ? <LoadingIcon />
      : <Hotels hotels={state.hotels} />
  );
  const menu = <Menu />;
  const footer = <Footer />;



  return (
    <AuthContext.Provider value={{
      isAuthenticated: state.isAuthenticated,
      login: () => dispatch({ type: 'login' }),
      logout: () => dispatch({ type: 'logout' }),
    }}>
      <ThemeContext.Provider value={{
        color: state.theme,
        changeTheme: () => dispatch({ type: 'change-theme' })
      }}>
        <Layout
          header={header}
          menu={menu}
          content={content}
          footer={footer}
        />
      </ThemeContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
