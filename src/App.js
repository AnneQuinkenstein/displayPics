import React, { Component } from 'react';
import './App.css';
import Dropdownlist from './components/Dropdownlist';
import AnimalsList from './components/AnimalsList';

const cats = [
  {
      name: 'Kandy',
      imgUrl: 'https://images-cdn.9gag.com/photo/3630193_700b.jpg',
  },
  {
      name: 'Sir John II',
      imgUrl: 'https://kittybloger.files.wordpress.com/2012/05/cat-king.jpg?w=584',
  },
]

const dogs = [
  {
      name: 'Bill',
      imgUrl: 'https://live.staticflickr.com/8534/8622367912_cfe27bf5ef.jpg',
  },
  {
      name: 'Shawna',
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk-bi-Tq3VTy8AL_fGBoLIwdnvY5RfG8wJNr1xW5_tWzQ8TOGx',
  },
];

class App extends Component {

  constructor(props) {
      super(props);
      this.state = { 
        selection: 'all'
      }
  }

  handleSelectAnimal = (event) => {
    this.setState({selection: event.target.value}); 
  }

  choice = () => {
    if (this.state.selection === 'Dogs'){
      return dogs;
    } else if (this.state.selection === 'Cats'){
      return cats;
    } else {
      return [...cats, ...dogs];
    }
  }
  

  render(){
    return (
      <>
      <Dropdownlist handleChoice={this.handleSelectAnimal}/>
      <AnimalsList animals={this.choice()}/>
      </>
    )
  }

}

export default App;
