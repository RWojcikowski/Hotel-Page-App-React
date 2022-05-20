import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels';
import LoadingIcon from './components/UI/LoadingIcon/LoadingIcon';
import Searchbar from './components/UI/Searchbar/Searchbar';

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
      name: 'Debowy Sad ',
      city: 'Wrocław ',
      rating: 8.8,
      discription: ' Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle',
      image: ''
    }
  ];

  state = {
    hotels: [],
    loading: true,

  };

  searchHandler = (term) => {
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
    }, 1500);

    console.log('zamontowany');
  }

  render() {
    console.log('Wyrederowany');
    return (
      <div className="App">
        <Header>
          <Searchbar onSearch={term => this.searchHandler(term)} />
        </Header>
        <Menu />
        {this.state.loading ? (
          <LoadingIcon />
        ) : (<Hotels hotels={this.state.hotels} />)}

      </div>
    );
  }
}

export default App;


