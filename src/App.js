import React, { Component } from 'react';
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

class App extends Component {
  hotels = [
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
  state = {
    hotels: [],
    loading: true,
    theme: 'info',
    isAuthenticated: false

  };

  searchHandler(term) {
    const hotels = [...this.hotels]
      .filter(x => x.name
        .toLowerCase()
        .includes(term.toLowerCase()));
    this.setState({ hotels });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        hotels: this.hotels,
        loading: false
      });
    }, 1000);
  }

  changeTheme = () => {
    const newTheme = this.state.theme === 'info' ? 'dark' : 'info';
    this.setState({ theme: newTheme });
  }

  render() {
    const header = (
      <Header>
        <Searchbar
          onSearch={term => this.searchHandler(term)}
        />
        <ThemeButton />
      </Header>
    );
    const content = (
      this.state.loading
        ? <LoadingIcon />
        : <Hotels hotels={this.state.hotels} />
    );
    const menu = <Menu />;
    const footer = <Footer />;

    return (
      <AuthContext.Provider value={{
        isAuthenticated: this.state.isAuthenticated,
        login: this.login,
        logout: this.logout
      }}>
        <ThemeContext.Provider value={{
          color: this.state.theme,
          changeTheme: this.changeTheme
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
}

export default App;
