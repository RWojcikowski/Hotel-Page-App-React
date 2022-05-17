import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels';


class App extends Component {

  state = {
    hotels: [
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

    ],
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Menu />
        <Hotels hotels={this.state.hotels} />
      </div>
    );
  }
}

export default App;
