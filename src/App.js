import React, { Component } from 'react';

import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component.jsx';

import './App.css';

class App extends React.Component {
  //Calling the constructor and then implementing it's super 
  //Initializing the initial state 
  constructor(){
    super(); 

    this.state = {
        //string: 'Hello Roman Mondello'
        monsters:[],
        searchField:''
    }; 

    //this.handleChange = this.handleChange.bind(this);
  }

  //Setting the 'monsters' to an array of json data 
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>
      response.json()).
      then(users=>this.setState({monsters:users}));
  }

  handleChange = (e) => {
    this.setState({
      searchField: e.target.value})
  }

  //Running the main HTML page here 
  render(){
    const { monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()));
      return (
        <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monsters' 
          handleChange={this.handleChange}
         />

        <CardList monsters = {filteredMonsters} />         
        </div>
      );
    }
  }

export default App;

