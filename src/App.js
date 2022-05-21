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


class App extends Component {
  hotels = [
    {
      id: 1,
      name: 'Pod Gruszą ',
      city: 'Warszawa ',
      rating: 8.3,
      discription: ' Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle',
      image: ''
    },
    {
      id: 2,
      name: 'Dębowy Sad ',
      city: 'Wrocław ',
      rating: 8.8,
      discription: ' Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle',
      image: ''
    }
  ];
  state = {
    hotels: [],
    loading: true,
    theme: 'info'

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

    );
  }
}

export default App;
