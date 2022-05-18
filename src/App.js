import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels';


class App extends Component {

  hotels = [
    {
      id: 1,
      name: 'Pod Gruszą ',
      city: 'Warszawa ',
      rating: ' 8.3 ',
      discription: ' Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle',
      image: ''
    },
    {
      id: 2,
      name: 'Debowy Sad ',
      city: 'Wrocław ',
      rating: ' 8.8 ',
      discription: ' Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle',
      image: ''
    }
  ];

  state = {
    hotels: this.hotels

  };

  searchHandler(term) {
    const hotels = [...this.hotels]
      .filter(x => x.name
        .toLowerCase()
        .includes(term.toLowerCase()));
    this.setState({ hotels });
  }

  render() {
    return (
      <div className="App">
        <Header onSearch={term => this.searchHandler(term)} />
        <Menu />
        <Hotels hotels={this.state.hotels} />
      </div>
    );
  }
}

export default App;


